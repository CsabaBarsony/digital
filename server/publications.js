Meteor.publish("reports", function(){
	return Reports.find();
});

Meteor.publish("userData", function(){
	return Meteor.users.find({}, { fields: { _id: 1, username: 1 } });
});

Meteor.publish("clients", function(){
	return Clients.find();
});
