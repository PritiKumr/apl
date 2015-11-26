class Idea < ActiveRecord::Base
	mount_uploader :picture, BlogPictureUploader

	def self.mounted(param)
		ideas = Idea.where(:user_id => param)
		return ideas
	end

end
