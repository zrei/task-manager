class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :deadline, :slug
  has_many :subtasks
end
