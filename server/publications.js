Meteor.publish("tasks", function(){
	return Tasks.find();
});

Meteor.publish("employees", function(){
	return Meteor.users.find({}, { fields: { _id: 1, username: 1 } });
});

Meteor.publish("clients", function(){
	return Clients.find();
});
