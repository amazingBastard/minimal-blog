Template['insertPost'].events({
	'click .insert.post.button': function(e) {
		e.preventDefault();
		
		Router.go('home');
		FlashMessages.sendSuccess('Post added');
	}
});
