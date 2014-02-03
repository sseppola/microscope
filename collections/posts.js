// Notice that there is not variable declaration. Meteor makes this a
// global variable for the whole app by emitting the variable declaration
Posts = new Meteor.Collection('posts');

Posts.allow({
	insert: function (userId, doc) {
		// only allow posting if you are logged in
		return !! userId;
	}
});