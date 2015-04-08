Router.route('/admin', {
  name: 'admin',
}, function () {
  this.render('admin');
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/about', {
  name: 'about'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/projects/:_id', {
  name: 'projectDetails',
  data: function() {
    return Projects.findOne(this.params._id);
  },
  waitOn: function () {
    Meteor.subscribe('project', this.params._id)
  },
  action: function () {
    if (this.ready())
      this.render('projectDetails')
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/projects/edit/:_id', {
  name: 'editProject',
  waitOn: function () {
    return Meteor.subscribe('project', this.params._id);
  },
  data: function() {
    return Projects.findOne(this.params._id);
  },
  action: function () {
    if (this.ready())
      this.render('editProject')
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/work/:projectsLimit?', {
  name: 'work'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/posts/:_id', {
  name: 'postDetails',
  data: function() {
    return Posts.findOne(this.params._id);
  },
  waitOn: function () {
    Meteor.subscribe('post', this.params._id)
  },
  action: function () {
    if (this.ready())
      this.render('postDetails')
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/posts/edit/:_id', {
  name: 'editPost',
  waitOn: function () {
    return Meteor.subscribe('post', this.params._id);
  },
  data: function() {
    return Posts.findOne(this.params._id);
  },
  action: function () {
    if (this.ready())
      this.render('editPost')
    else
      this.render('loading');
  }
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});

Router.route('/:postsLimit?', {
  name: 'home'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
