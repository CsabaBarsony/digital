Router.configure({
	layoutTemplate: "layout",
	loadingTemplate: "loading",
	notFoundTemplate: "notFound"
});

Router.route("/", { name: "home" });

Router.route("/activities", { name: "activityList" });
Router.route("/activity/:_id", {
	name: "activityPage",
	data: function() {
		return Activities.findOne(this.params._id);
	}
});

Router.route("/sendreport", { name: "errorReport" });
Router.route("/reports", { name: "reportList" });
Router.route("/report/:_id", {
	name: "reportPage",
	data: function(){
		return Reports.findOne(this.params._id);
	}
});
Router.route("/ready", { name: "reportSent" });

Router.route("/employees", { name: "employeeList" });

var requireLogin = function(){
	if(!Meteor.user()) this.render("accessDenied");
	else this.next();
};

Router.onBeforeAction("dataNotFound", { only: "activityPage" });
Router.onBeforeAction(requireLogin, { only: "activityList" });
Router.onBeforeAction(requireLogin, { only: "reportList" });
Router.onBeforeAction(requireLogin, { only: "employeeList" });
