Template['editPost'].events({
  'click .update.post.button': function(e) {
		e.preventDefault();

		var now = Date.now(),
				thisPostId = this._id,
		    postEntry = {
					title: $('.post.form .title').val(),
			    intro: $('.post.form .intro').val(),
			    content: $('.post.form .markdown.content').val(),
          updated: now
        };

    Posts.update(thisPostId, {$set: postEntry}, function(err) {
      if (err) {
				FlashMessages.sendError('Error, error!');
        console.log(err.reason);
      } else {
				Router.go('postDetails', {_id: thisPostId});
				FlashMessages.sendSuccess('Post updated');
      }
    });
  },
  'click .remove.post.button': function(e) {
    e.preventDefault();

    if (confirm('Are you sure you want to remove this post?')) {
      var id = this

      Posts.remove(id._id, function(err) {
        if (err) {
          FlashMessages.sendError('Error, error!');
          console.log(err);
        } else {
          Router.go('home');
          FlashMessages.sendWarning('Post removed');
        }
      });
    }
  }
});
