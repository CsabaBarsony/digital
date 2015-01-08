Template.newTask.helpers({
	employees: function(){
		return Meteor.users.find();
	},
	clients: function(){
		return Clients.find();
	}
});

Template.newTask.events({
	"submit #new-task-form": function(e){
		e.preventDefault();
		console.log(e.target[0].value);
		console.log(e.target[1].value);
		console.log(e.target[2].value);
	}
});