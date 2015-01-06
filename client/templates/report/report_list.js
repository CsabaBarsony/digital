Template.reportList.helpers({
	reports: function(){
		var category = Session.get("report-category");
		if(category === "new"){
			return Reports.find({ employeeId: { $exists: false } });
		}
		else if(category === "all"){
			return Reports.find();
		}
		else if(category === "own"){
			return Reports.find({ employeeId: Meteor.userId() });
		}
		else{
			Session.set("report-category", "all");
			return Reports.find();
		}
	},
	selected: function(){
		return Session.get("report-category");
	}
});

Template.reportList.selected = function(){
	return "selected";
};

Template.reportList.events({
	"click #dig-report-category-new": function(e){
		Session.set("report-category", "new");
	},
	"click #dig-report-category-all": function(e){
		Session.set("report-category", "all");
	},
	"click #dig-report-category-own": function(e){
		Session.set("report-category", "own");
	}
});
