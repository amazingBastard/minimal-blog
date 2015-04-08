Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  progressSpinner: false,
  progressDelay: 100,
  trackPageView: true
});

Router.plugin('ensureSignedIn', {
  only: ['admin', 'editPost', 'editProject']
});
