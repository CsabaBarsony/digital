Router.configure({
	layoutTemplate: "layout",
	loadingTemplate: "loading",
	notFoundTemplate: "notFound"
});

Router.route("/", { name: "home" });

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
Router.route("/employee/:_id", {
	name: "employeePage",
	data: function(){
		return Meteor.users.findOne(this.params._id);
	}
});

var requireLogin = function(){
	if(!Meteor.user()) this.render("accessDenied");
	else this.next();
};

Router.onBeforeAction(requireLogin, { only: "reportList" });
Router.onBeforeAction(requireLogin, { only: "employeeList" });
