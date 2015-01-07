Template.employeeList.helpers({
	employees: function(){
		var u = Meteor.users.find();
		console.log(u);
		return u;
	}
});
