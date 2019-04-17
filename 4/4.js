function checkInArray(stroka, masiv) {
	for (let i = 0; i < masiv.length; i++) {
		if (masiv[i] === stroka) {
			return true;
		} 
	}
	return false;
}

checkInArray("paper", [0, "kt", "paper"]);