var beginRoundWith3 = function() {
	checkWinner(me, person, other, ai3, "NO", "NO", "NO");
	getMoneyM(me);
	getMoneyM(person);
	getMoneyM(other);
	getMoneyM(ai3);
	getMoneyM("");
	getMoneyM("");
	getMoneyM("");
	buyWorkers(me);
	buyWorkers(person);
	buyWorkers(other);
	buyWorkers("");
	buyWorkersComputer(ai3);
	taxPayer(me, person, other, ai3, "", "", "");
};
