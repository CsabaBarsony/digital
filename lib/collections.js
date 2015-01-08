Tasks = new Mongo.Collection("tasks");

Tasks.allow({
	insert: function(userId){
		return !!userId;
	},
	update: function(userId){
		return !!userId;
	}
});

Clients = new Mongo.Collection("clients");

Clients.allow({
	insert: function(userId){
		return !!userId;
	},
	update: function(userId){
		return !!userId;
	},
	remove: function(userId){
		return !!userId;
	}
});