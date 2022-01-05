class Task < ApplicationRecord
	has_many :subtasks, dependent: :destroy
	validates :name, presence: true
	before_create :slugify

	private

	def slugify
		self.slug = name.parameterize
	end
end
