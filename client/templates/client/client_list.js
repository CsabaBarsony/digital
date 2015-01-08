Template.clientList.helpers({
	clients: function(){
		return Clients.find();
	}
});

Template.clientList.events({
	"submit form": function(e){
		var name 	= e.target.name.value,
			address = e.target.address.value;

		if(!name || !address){
			alert("Minden mezőt ki kell tölteni!");
			return;
		}

		var client = {
			name   : name,
			address: address
		};

		Clients.insert(client);

		e.target.name.value    = "";
		e.target.address.value = "";

		return false;
	}
});