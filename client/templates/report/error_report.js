Template.errorReport.events({
	"submit form": function(e){
		e.preventDefault();

		var name 		= e.target.name.value,
			description = e.target.description.value;

		if(!name || !description){
			alert("Minden mezőt ki kell tölteni!");
			return;
		}

		var report = {
			name: name,
			description: description
		};

		report._id = Reports.insert(report);
		Router.go("reportSent");
	}
});
