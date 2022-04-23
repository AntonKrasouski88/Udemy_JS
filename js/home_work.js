'use strict';
//площадь куба S = 6a2; объем куба V = a3;

/* function calculateSquareVolume (value) {
    if (typeof value =="number" && value > 0 && Number.isInteger(value)) {
        let square = 6*(value*value);
        let volume = value * value * value;
        console.log(`Объем куба: ${volume}, площадь всей поверхности: ${square}`);
    } else {
        console.log ("При вычислении произошла ошибка");
    }
    
}

calculateSquareVolume (""); */

function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;
    
    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);



function checkCoupeTrainCarriage (numberPlace) {
    if (typeof numberPlace == "number" && numberPlace > 0 && Number.isInteger(numberPlace)) {
        for (let i = 1; i <= 9; i++) {
            for (let k = i*4 - 3; k <= i*4; k++){
                if (k == numberPlace){
                    console.log(i);
                }
            }
        }
    } else if (numberPlace == 0 || numberPlace > 36) {
        console.log('Таких мест в выгоне не существует');
    } else {
        console.log('Ошибка. Проверте правильность введенного номера места');
    }
    
}     


checkCoupeTrainCarriage("");

function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);