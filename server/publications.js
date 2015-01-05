Meteor.publish("activities", function(){
	return Activities.find();
});

Meteor.publish("reports", function(){
	return Reports.find();
});
