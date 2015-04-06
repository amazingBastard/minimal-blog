Template['insertPost'].events({
	'click .insert.post.button': function(e) {
		e.preventDefault();

		var now = Date.now(),
		    newPost = {
			    title: $('.post.form .title').val(),
			    intro: $('.post.form .intro').val(),
			    content: $('.post.form .markdown.content').val(),
			    created: now,
			    updated: now,
			    author: Meteor.userId(),
			    postCall: function() {
				    return this.post;
			    }
		    };

		Posts.insert(newPost);
		Router.go('home');
		FlashMessages.sendSuccess('Post added');
	}
});
