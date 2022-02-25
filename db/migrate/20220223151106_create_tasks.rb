class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :tag
      t.text :description
      t.date :deadline

      t.timestamps
    end
  end
end
