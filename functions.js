// 1.

function tripleFive() {
	for(i = 0; i < 3; i++) {
		console.log("Five!");
	}
}

tripleFive();

// 2.

var lastLetter = function(string) {
	return string.charAt(string.length-1);
};

console.log(lastLetter('hello'));
console.log(lastLetter('island'));

// 3.

var square = function square(x) {
	return x*x;
}

console.log(square(3));
console.log(square(5));

// 4.

function negate(num) {
	return 0-num;
}

console.log(negate(5));
console.log(negate(-8));

// 5. 

var toArray = function(x, y, z) {
	var newArray = [];
	newArray[0] = x;
	newArray[1] = y;
	newArray[2] = z;
	return newArray;
};

console.log(toArray(1, 4, 5));
console.log(toArray(8, 9, 10));

// 6.

function startsWithA(string) {
	if (string.charAt(0) === "a" || string.charAt(0) === "A") {
		return true;
	} else {
		return false;
	}
}

console.log(startsWithA('aardvark'));
console.log(startsWithA('bear'));

// 7.

function excite(str) {
	return(str + "!!!");
}

console.log(excite('yes'));
console.log(excite('go'));

// 8.

function sun(str) {
	if (str.indexOf("sun") > -1) {
		return true;
	} else {
		return false;
	}
}

console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));

// 9.

function tiny(num) {
	if(num >= 0 && num <= 1) {
		return true;
	} else {
		return false;
	}

}

console.log(tiny('0.3'));
console.log(tiny('14'));
console.log(tiny('-5'));

// 10.

function getSeconds(str) {
    var a = str.split(':');
    return ((+a[0]*60)+(+a[1]));
}

console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));