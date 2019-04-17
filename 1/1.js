function divisionByThree(numbers) {
 for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 3 == 0) {
		console.log("U can divide me by three - " + numbers[i]);
	}
	 else console.log("I'm indivisible by three, pathetic man - " + numbers[i]) 
}
}

divisionByThree([5, 3, 6, 7, 33, 5, 78, 126, 543]);