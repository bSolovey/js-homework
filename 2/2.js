function quadraticRoot(a,b,c) {
	 let D = Math.pow(b, 2) - 4*a*c;
	 if (D < 0) {
	 	return ("Уравнение не имеет действительных корней");
	 } else if (D > 0) {
	 	 let 	x1 = (-b - Math.sqrt(D)) / (2*a);
		 let  x2 = (-b + Math.sqrt(D)) / (2*a);
		 let  roots = [x1, x2];
		 return roots;
	 } else {
	 	 let 	x1 = (-b - Math.sqrt(D)) / (2*a);
	 	 return x1;
	 }
}

 let first = quadraticRoot(1, 15, 100);

let second = quadraticRoot(2, 8, -192);


