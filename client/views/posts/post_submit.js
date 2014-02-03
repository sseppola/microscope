Template.postSubmit.events({
	'submit form': function (e) {
		e.preventDefault();

		var post = {
			url: 	 $(e.target).find('[name=url]').val(),
			title: 	 $(e.target).find('[name=title]').val(),
			message: $(e.target).find('[name=message]').val()
		}

		post._id = Posts.insert(post); // .insert() returns and _id that is used in .go
		Router.go('postPage', post);
	}
});