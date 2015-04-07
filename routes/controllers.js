HomeController = RouteController.extend({
  template: 'home',
  increment: 5,
  postsLimit: function() {
    return parseInt(this.params.postsLimit) || this.increment;
  },
  findOptions: function() {
    return {sort: {updated: -1}, limit: this.postsLimit()};
  },
  subscriptions: function() {
    this.postsSub = Meteor.subscribe('posts', this.findOptions());
  },
  waitOn: function() {
    return Meteor.subscribe('posts', this.findOptions());
  },
  posts: function() {
    return Posts.find({}, this.findOptions());
  },
  data: function() {
    var hasMore = this.posts().count() === this.postsLimit();
    var nextPath = this.route.path({postsLimit: this.postsLimit() + this.increment});
    return {
      posts: this.posts(),
      ready: this.postsSub.ready,
      nextPath: hasMore ? nextPath : null
    };
  }
});

WorkController = RouteController.extend({
  template: 'work',
  increment: 10,
  projectsLimit: function() {
    return parseInt(this.params.projectsLimit) || this.increment;
  },
  findOptions: function() {
    return {sort: {updated: -1}, limit: this.projectsLimit()};
  },
  subscriptions: function() {
    this.projectsSub = Meteor.subscribe('projects', this.findOptions());
  },
  waitOn: function() {
    return Meteor.subscribe('projects', this.findOptions());
  },
  projects: function() {
    return Projects.find({}, this.findOptions());
  },
  data: function() {
    var hasMore = this.projects().count() === this.projectsLimit();
    var nextPath = this.route.path({projectsLimit: this.projectsLimit() + this.increment});
    return {
      projects: this.projects(),
      ready: this.projectsSub.ready,
      nextPath: hasMore ? nextPath : null
    };
  }
});
