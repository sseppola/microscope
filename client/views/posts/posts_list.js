// posts_list.html manager

Template.postsList.helpers({
	posts: function () {
		return Posts.find({}, {sort: {submitted: -1}});
	}
});