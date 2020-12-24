class RemoveIsCompletedFromTasks < ActiveRecord::Migration[6.0]
  def change
    remove_column :tasks, :is_completed, :boolean
  end
end
