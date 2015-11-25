class Idea < ActiveRecord::Base

	def self.mounted(param)
		ideas = Idea.where(:user_id => param)
		return ideas
	end
end
