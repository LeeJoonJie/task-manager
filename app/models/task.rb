class Task < ApplicationRecord

  enum priority: %i[None Low Moderate High]

  validates :title,
            presence: true
  validates :priority,
            inclusion: { in: Task.priorities }
  validates :progress,
            presence: true,
            numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }

  # Class method for querying tasks from database with the following specifications (arguments);
  # sort_field, sort_order, search_field, search_string
  def self.all_query(sort_field:, sort_order:, search_field:, search_string:)

    # Removing tasks with empty sort_field
    non_empty_tasks = Task.where.not("#{sort_field}": nil)
    non_empty_tasks = non_empty_tasks.where.not("#{sort_field}": 0) if sort_field.to_s == 'priority'

    # Search for tasks with matching search_string in the search_field
    search_params = { non_empty_tasks: non_empty_tasks, search_string: search_string }
    searched_tasks = case search_field.to_s
                     when 'all'
                       search_tags(**search_params)
                     .or(search_deadline(**search_params))
                     .or(search_description(**search_params))
                     .or(search_title(**search_params))
                     .or(search_priority(**search_params))
                     when 'tags'
                       search_tags(**search_params)
                     when 'deadline'
                       search_deadline(**search_params)
                     when 'description'
                       search_description(**search_params)
                     when 'title'
                       search_title(**search_params)
                     when 'priority'
                       search_priority(**search_params)
                     end

    # Sort tasks by sort_field in sort_order
    searched_tasks.order("#{sort_field} #{sort_order}")

  end

  ############################### Private class methods ######################################################

  def self.search_tags(non_empty_tasks:, search_string:)
    non_empty_tasks.where("array_to_string(tags, ', ') ILIKE ? ", "%#{search_string}%")
  end

  def self.search_deadline(non_empty_tasks:, search_string:)
    # Return everything if search string is empty
    return non_empty_tasks if search_string.to_s == ''

    non_empty_tasks.where("TO_CHAR(deadline, 'DD/MM/YYYY')  ILIKE ?",
                          "%#{search_string}%")
                   .or(non_empty_tasks.where("TO_CHAR(deadline, 'DD-MM-YYYY')  ILIKE ?",
                                             "%#{search_string}%"))
                   .or(non_empty_tasks.where("TO_CHAR(deadline, 'DD MM YYYY')  ILIKE ?",
                                             "%#{search_string}%"))
  end

  def self.search_description(non_empty_tasks:, search_string:)
    non_empty_tasks.where('description ILIKE ?', "%#{search_string}%")
  end

  def self.search_title(non_empty_tasks:, search_string:)
    non_empty_tasks.where('title ILIKE ?', "%#{search_string}%")
  end

  def self.search_priority(non_empty_tasks:, search_string:)
    priorities = Task.priorities
                     .select { |key, _value| key.to_s.downcase.include? search_string.to_s.downcase }
                     .values
    non_empty_tasks.where(priority: priorities)
  end

  private_class_method :search_tags,
                       :search_deadline,
                       :search_description,
                       :search_title,
                       :search_priority

end
