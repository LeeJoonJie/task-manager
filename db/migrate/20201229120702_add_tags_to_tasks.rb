class AddTagsToTasks < ActiveRecord::Migration[6.0]
  def change
    add_column :tasks, :tags, :text, array: true, default: []
  end
end
