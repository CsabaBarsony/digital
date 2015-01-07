Reports = new Mongo.Collection("reports");

Reports.allow({
	insert: function(){
		return true;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

Clients = new Mongo.Collection("clients");

Clients.allow({
	insert: function(){
		return true;
	}
});