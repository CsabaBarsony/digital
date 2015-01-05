Router.configure({
	layoutTemplate: "layout",
	loadingTemplate: "loading",
	notFoundTemplate: "notFound",
	waitOn: function(){
		return Meteor.subscribe("activities");
	}
});

Router.route("/", { name: "home" });
Router.route("/activities", { name: "activityList" });
Router.route("/activity/:_id", {
	name: "activityPage",
	data: function() {
		return Activities.findOne(this.params._id);
	}
});
Router.route("/report", { name: "errorReport" });
Router.route("/ready", { name: "reportSent" });
Router.route("/reports", { name: "reportList" });
Router.route("/reportPage/:_id", {
	name: "reportPage",
	data: function(){
		return Reports.findOne(this.params._id);
	}
});


Router.onBeforeAction("dataNotFound", { only: "activityPage" });
