Template['editProject'].events({
  'click .update.project.button': function(e) {
		e.preventDefault();

		var now = Date.now(),
				thisProjectId = this._id,
		    projectEntry = {
					title: $('.project.form .title').val(),
			    intro: $('.project.form .intro').val(),
			    content: $('.project.form .markdown.content').val(),
          updated: now
        };

    Projects.update(thisProjectId, {$set: projectEntry}, function(err) {
      if (err) {
				FlashMessages.sendError('Error, error!');
        console.log(err.reason);
      } else {
				Router.go('projectDetails', {_id: thisProjectId});
				FlashMessages.sendSuccess('Project updated');
      }
    });
  },
  'click .remove.project.button': function(e) {
    e.preventDefault();

    if (confirm('Are you sure you want to remove this project?')) {
      var id = this

      Projects.remove(id._id, function(err) {
        if (err) {
          FlashMessages.sendError('Error, error!');
          console.log(err);
        } else {
          Router.go('work');
          FlashMessages.sendWarning('Project removed');
        }
      });
    }
  }
});
