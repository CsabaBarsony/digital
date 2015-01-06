Template.employeePage.helpers({
	reports: function(){
		return Reports.find({ employeeId: this._id });
	}
});
