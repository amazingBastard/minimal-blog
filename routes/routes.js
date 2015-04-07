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

Router.route('/work', {
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

Router.route('/:postsLimit?', {
  name: 'home'
}, function () {
  SEO.set({ title: Meteor.App.NAME });
});
