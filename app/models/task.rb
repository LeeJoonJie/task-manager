class Task < ApplicationRecord

  enum priority: [:Low, :Moderate, :High]

  validates :title,
            presence: true
  validates :deadline,
            presence: true
  validates :priority,
            inclusion: { in: Task.priorities }
  validates :is_completed,
            inclusion: { in: [true, false] }

end
