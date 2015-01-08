Template.clientList.helpers({
	clients: function(){
		return Clients.find();
	}
});

Template.clientList.events({
	"click #new-client": function(e){
		Modal.show('formModal', { formTemplate: 'newClientForm', title: 'Új ügyfél' });
	}
});

Template.clientListItem.events({
	"click #client-edit": function(e){
		var id = $(e.target).data("id");
		var client = Clients.findOne(id);
		Modal.show('formModal', { formTemplate: 'newClientForm', title: 'Ügyfél szerkesztése', formObject: client});
	},
	"click #client-delete": function(e){
		if(!confirm("Biztosan törli az ügyfelet?")) return;
		var id = $(e.target).data("id");
		Clients.remove(id);
	}
});

Template.newClientForm.events({
	"click #submit-client": function(e){
		e.preventDefault();
		var id = $("#id").val();
		var name = $("#clientName").val();
		var address = $("#clientAddress").val();
		if(!name || !address) {
			alert("Minden mezőt ki kell tölteni!");
			return;
		}
		if(id){
			Clients.update(id, { $set: { name: name, address: address } });
		}
		else{
			Clients.insert({ name: name, address: address });
		}
		Modal.hide("formModal");
	}
});