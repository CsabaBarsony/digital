Template.report.helpers({
	employee: function(){
		if(this.employeeId){
			var employee = Employees.findOne({ _id: this.employeeId });
			return "Felelős: " + employee.name;
		}
		else{
			return "Nincs hozzárendelve";
		}
	}
});
