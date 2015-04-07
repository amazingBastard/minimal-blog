Meteor.publish('projects', function(options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Projects.find({}, options);
});

Meteor.publish('project', function(id) {
  check(id, String)
  return Projects.find(id);
});
