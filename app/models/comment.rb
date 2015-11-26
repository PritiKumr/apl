class Comment < ActiveRecord::Base
	belongs_to :idea

	def self.comments(params)
		return Comment.where(:post_id => params)
	end
end
