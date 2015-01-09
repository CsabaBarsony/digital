Template.activities.events({
	"click #new-activity": function(){
		Modal.show('formModal', { formTemplate: 'newActivityForm', title: 'Új tevékenység' });
	},
	"click .activity-toggle": function(){
		var IDs = Session.get("openedActivityIdList");
		if(!IDs) IDs = [];
		var index = IDs.indexOf(this._id);
		if(index > -1){
			IDs.splice(index, 1);
		}
		else{
			IDs.push(this._id);
		}
		Session.set("openedActivityIdList", IDs);
	},
	"click .activity-select": function(){
		Session.set("selectedActivityId", this._id);
	},
	"click #collapse-up": function(){
		Session.set("openedActivityIdList", null);
	},
	"click #collapse-down": function(){
		var IDs = [];
		Activities.find().forEach(function(a){
			IDs.push(a._id);
		});
		Session.set("openedActivityIdList", IDs);
	}
});

Template.activityItem.events({
	"click .activity-add": function(){
		Modal.show('formModal', { formTemplate: 'newActivityForm', title: 'Új tevékenység', formObject: { child: true, _id: this._id } });
	}
});

Template.activities.helpers({
	activities: function(){
		return Activities.find({ parentId: { $exists: false } });
	}
});

Template.activityItem.helpers({
	openedActivity: function(){
		return Session.get("openedActivityIdList").indexOf(this._id) > -1;
	},
	selectedActivity: function(){
		return Session.get("selectedActivityId") === this._id;
	},
	childActivities: function(){
		return Activities.find({ parentId: this._id });
	}
});

Template.newActivityForm.events({
	"submit #new-activity-form": function(e){
		e.preventDefault();
		if(this.child){
			Activities.insert({ name: e.target[0].value, parentId: this._id });
		}
		else{
			Activities.insert({ name: e.target[0].value});
		}
		Modal.hide("formModal");
	}
});

Template.readingPane.helpers({
	activity: function(){
		return Activities.findOne(Session.get("selectedActivityId"));
	}
});