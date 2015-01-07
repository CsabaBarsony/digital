Template.reportPage.helpers({
	employees: function(){
		return Meteor.users.find();
	},
	ownEmployee: function(){
		return Meteor.users.findOne({ _id: this.employeeId });
	}
});

Template.reportPage.events({
	"click .employee-list-item": function(e){
		Reports.update(Router.current().params._id, {$set: { employeeId: e.target.attributes[1].value } }, function(error){
			if(error){
				alert(error.reason);
			}
		});
	}
});
