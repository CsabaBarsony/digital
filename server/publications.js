Meteor.publish("activities", function(){
	return Activities.find();
});

Meteor.publish("reports", function(){
	return Reports.find();
});

Meteor.publish("employees", function(){
	return Employees.find();
});

Meteor.publish("userData", function(){
	return Meteor.users.find({}, { fields: { _id: 1 } });
});

Meteor.methods({
	getAllUsers: function(){
		return Meteor.users.find().map(function(u){
			return {
				username: u.username,
				_id: u._id
			};
		});
	}
});
