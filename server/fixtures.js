if(Activities.find().count() === 0){
	Activities.insert({
		name: "első feladat"
	});

	Activities.insert({
		name: "második feladat..."
	});
}

if(Employees.find().count() === 0){
	Employees.insert({
		name: "Béla",
		_id: "1234"
	});

	Employees.insert({
		name: "Géza",
		_id: "4321"
	});

	Employees.insert({
		name: "Csaba",
		_id: "C7de8wF3xm2hK5w2t"
	});
}
