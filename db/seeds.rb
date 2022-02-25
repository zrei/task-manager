# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
tasks = Task.create([
  { 
    name: "Homework",
    tag: "School",
    description: "No subtasks, just a description and a deadline.",
    deadline: "2022-03-16"
  }, 
  { 
    name: "Oral Presentation",
    tag: "School"
  },
  { 
    name: "Task Report",
    tag: "Work",
    deadline: "2021-12-14"
  }, 
  { 
    name: "Mother's Day Gift",
    tag: "Personal",
    description: "Showing off the sorting.",
    deadline: "2022-05-19"
  }
])
subtasks = Subtask.create([
  {
    name: "A random subtask",
    description: "An overdue subtask.",
    deadline: "2021-12-13",
    task: tasks.second
  },
  { 
    name: "Another subtask", 
    deadline: "2022-03-07",
    task: tasks.second
  },
  { 
    name: "Just showing off more sorting",
    deadline: "2022-03-07",
    task: tasks.fourth
  },
  {
    name: "Middle due",
    deadline: "2022-03-08",
    task: tasks.fourth
  },
  {
    name: "Far in the future",
    deadline: "2022-06-27",
    task: tasks.fourth 
  }
])