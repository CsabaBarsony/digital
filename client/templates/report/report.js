Template.report.helpers({
	employee: function(){
		if(this.employeeId){
			var employee = Meteor.users.findOne({ _id: this.employeeId });
			return "Felelős: " + employee.username;
		}
		else{
			return "Nincs hozzárendelve";
		}
	}
});
