class Task < ApplicationRecord

  enum priority: [:None, :Low, :Moderate, :High]

  validates :title,
            presence: true
  validates :priority,
            inclusion: { in: Task.priorities }
  validates :progress,
            presence: true,
            numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }

end
