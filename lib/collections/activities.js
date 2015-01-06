Activities = new Mongo.Collection("activities");

Activities.allow({
	insert: function(userId, doc){
		return !!userId;
	}
});
