class SubtaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :deadline, :task_id
end
