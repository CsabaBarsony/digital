Template.employeeList.helpers({
	employees: function(){
		return Meteor.users.find();
	}
});
