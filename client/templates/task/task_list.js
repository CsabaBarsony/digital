Template.taskList.helpers({
	tasks: function(){
		return Tasks.find();
	}
});

Template.taskList.events({
	"click #new-task": function(){
		Modal.show('formModal', { formTemplate: 'newTaskForm', title: 'Új feladat' });
	}
});

Template.newTaskForm.helpers({
	employees: function(){
		return Meteor.users.find();
	},
	clients: function(){
		return Clients.find();
	},
	employeeEquals: function(){
		return "";
	}
});

Template.newTaskForm.events({
	"submit #new-task-form": function(e){
		e.preventDefault();

		var description = e.target[0].value;
		var employeeId = e.target[1].value;
		var clientId = e.target[2].value;
		var taskId = e.target[3].value;

		if(!description || employeeId == 0 || clientId == 0){
			alert("Minden mezőt ki kell tölteni!");
			return;
		}

		if(taskId){

		}
		else{
			Tasks.insert({
				description: description,
				employeeId: employeeId,
				clientId: clientId,
				creatorId: Meteor.userId()
			});
		}
		Modal.hide("formModal");
	}
});

Template.taskListItem.helpers({
	creator: function(){
		return Meteor.users.findOne(this.creatorId).username;
	},
	employee: function(){
		return Meteor.users.findOne(this.employeeId).username;
	},
	client: function(){
		return Clients.findOne(this.clientId).name;
	}
});

Template.taskListItem.events({
	"click #task-edit": function(e){
		var id = $(e.target).data("id");
		var task = Tasks.findOne(id);
		Modal.show('formModal', { formTemplate: 'newTaskForm', title: 'Feladat szerkesztése', formObject: task });
	},
	"click #task-delete": function(e){

	}
});