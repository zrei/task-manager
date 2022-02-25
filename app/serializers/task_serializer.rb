class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :tag, :description, :deadline, :slug
  has_many :subtasks
end
