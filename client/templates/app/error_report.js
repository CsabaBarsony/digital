Template.errorReport.events({
	"submit form": function(e){
		e.preventDefault();

		var report = {
			name: e.target.name.value,
			description: e.target.description.value
		};

		report._id = Reports.insert(report);
		Router.go("reportSent");
	}
});
