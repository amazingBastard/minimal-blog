Template['insertProject'].events({
	'click .insert.project.button': function(e) {
		e.preventDefault();

		var now = Date.now(),
		    newProject = {
			    title: $('.project.form .title').val(),
			    intro: $('.project.form .intro').val(),
			    content: $('.project.form .markdown.content').val(),
			    created: now,
			    updated: now,
			    author: Meteor.userId(),
			    projectCall: function() {
				    return this.post;
			    }
		    };

		Projects.insert(newProject);
		Router.go('home');
		FlashMessages.sendSuccess('Project added');
	}
});
