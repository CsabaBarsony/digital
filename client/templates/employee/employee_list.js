Template.employeeList.helpers({
	employees: function(){
		return Employees.find();
	}
});
