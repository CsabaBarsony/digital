Meteor.publish("activities", function(){
	return Activities.find();
});

Meteor.publish("reports", function(){
	return Reports.find();
});

Meteor.publish("employees", function(){
	return Employees.find();
});
