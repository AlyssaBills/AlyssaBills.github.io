"use strict"


/*Через prompt сделать неск. вопросов: тип сайта? 
дизайн сайта? адаптивная верстка?
объект кальк. для расчета стоимости*/

let type = prompt("Выберите тип сайта (Введите в поле цифры от 1 до 3):\n 1. Сайт-визитка \n 2. Интернет-магазин \n 3. Корпоративный сайт");
function choose1(){
	if (type == 1){
		let type = 1000;
	}

	if (type == 2){
		let type = 2000;
	}

	if (type == 3){
		let type = 3000;
	}

}


let design = prompt("Выберите дизайн сайта (Введите в поле цифры от 1 до 3):\n 1. Диз1 \n 2. Диз2 \n 3. Диз3");
function choose2(){
	if (design == 1){
		let design = 3000;
	}

	if (design == 2){
		let design = 4000;
	}

	if (design == 3){
		let design = 5000;
	}

}


let adapt = prompt("Выберите адаптивность сайта (Введите в поле цифры от 1 до 2):\n 1. Адаптивный \n 2. Неадаптивный");
function choose3(){
	if (adapt == 1){
		let adapt = 6000;
	}

	if (adapt == 2){
		let adapt = 0;
	}

}


let sum = 0;

if (type == 1){
	sum = sum + 1000;
	
}

if (type == 2){
	sum = sum + 2000;
	
}

if (type == 3){
	sum = sum + 3000;
	
}

if (design == 1){
	sum = sum + 3000;
	
}

if (design == 2){
	sum = sum + 4000;
	
}

if (design == 3){
	sum = sum + 5000;
	
}

if (adapt == 1){
	sum = sum + 6000;
	
}

if (adapt == 2){
	sum = sum + 0;
	
}

alert(sum)




