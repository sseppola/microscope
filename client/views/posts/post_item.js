// post_item.html manager
Template.postItem.helpers({
	ownPost: function () {
		if (Meteor.userId())
			return this.userId == Meteor.userId();
		else 
			return false;
	},
	domain: function () {
		var a = document.createElement('a');
		a.href = this.url;
		return a.hostname;
	},
	commentsCount: function () {
		return Comments.find({postId: this._id}).count();
	}
});