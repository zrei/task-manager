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
    description: "For science class",
    deadline: 20211228
  }, 
  { 
    name: "PW Slides",
    deadline: 20211231
  },
  { 
    name: "Change Peanut's Cage",
    description: "Remember to use the new grid!" 
  }, 
  { 
    name: "Cook Dinner",
    description: "Family coming over, throw in more vegetables."
  }, 
  { 
    name: "Make Jane's New Year's Present",
    description: "She's allergic to peanuts.",
    deadline: 20220101
  }, 
  { 
    name: "Book holiday trip",
	deadline: 20211231
  }
])
subtasks = Subtask.create([
  { 
    name: 'Do diagrams', 
    deadline: 20211227,
    task: tasks.first
  },
  { 
    name: 'Do essay', 
    description: 'Remember indentation', 
    task: tasks.first 
  },
])