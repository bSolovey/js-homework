// 1.
// function divisionByThree(numbers) {
//  for (let i = 0; i < numbers.length; i++) {
// 	if (numbers[i] % 3 == 0) {
// 		console.log("U can divide me by three - " + numbers[i]);
// 	}
// 	 else console.log("I'm indivisible by three, pathetic man - " + numbers[i]) 
// }
// }

// a * Math.pow(x) +  b * x + c = 0
// if D < 0   уравнение не имеет действительных корней
// if  D = 0, то уравнение имеет один действительный корень
// if D > 0, то уравнение имеет два действительных корня.
// 2.
// function quadraticRoot(a,b,c) {
// 	 let D = Math.pow(b, 2) - 4*a*c;
// 	 if (D < 0) {
// 	 	return ("Уравнение не имеет действительных корней");
// 	 } else if (D > 0) {
// 	 	 let 	x1 = (-b - Math.sqrt(D)) / (2*a);
// 		 let  x2 = (-b + Math.sqrt(D)) / (2*a);
// 		 let  roots = [x1, x2];
// 		 return roots;
// 	 } else {
// 	 	 let 	x1 = (-b - Math.sqrt(D)) / (2*a);
// 	 	 return x1;
// 	 }
// }

// 3. Напишите программу, которая выводит на экран числа от 1 до 100. 
// При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz»,
//  а вместо чисел, кратных пяти — слово «Buzz». Если число кратно и 3, и 5,
//   то программа должна выводить слово «FizzBuzz»

//  for (let i = 1; i <= 100; i++) {
//  	if (i % 3 == 0 && i % 5 == 0) {
//  		console.log("FizzBuzz")
//  	} else if (i % 5 == 0) {
//  		console.log("Buzz")
//  	} else if (i % 3 == 0 ) {
//  		console.log("Fizz")
//  	} else console.log(i);
//  }

// 4.
// function checkInArray(stroka, masiv) {
// 	for (let i = 0; i < masiv.length; i++) {
// 		if (masiv[i] === stroka) {
// 			return true;
// 		} 
// 	}
// 	return false;
// }


let name = prompt("Cuál es tu nombre?", "");  
document.write("Mi nombre es " + name); 

