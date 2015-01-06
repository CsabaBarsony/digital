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
		name: "Béla"
	});

	Employees.insert({
		name: "Géza"
	});
}
