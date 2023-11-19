const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    const shops = data.shops;
    let sizeArray =[];
    let volume = 0;
    let square = 0;
    for (let value of shops) {
       sizeArray.push(Object.values(value));
    }
    for (let i = 0; i < sizeArray.length; i++) {
        square += sizeArray[i][0]*sizeArray[i][1];
        volume += square*data.height;
       
    }
    if (volume*data.moneyPer1m3 <= data.budget) {
        return ('Бюджета достаточно');
    } else {
        return ('Бюджета недостаточно');
    }
}

isBudgetEnough(shoppingMallData);
/* const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });
    console.log(square);
    volume = data.height * square;
    console.log(volume*data.moneyPer1m3);

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return console.log('Бюджета достаточно');
    } else {
        return  console.log('Бюджета недостаточно');
    }
}

isBudgetEnough(shoppingMallData); */

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam',]; 

function sortStudentsByGroups(arr) {
    arr.sort();
    let arrGroup = [];
    let num = arr.length - Math.floor(arr.length/3)*3;
    for (let i = 0; i < Math.floor(arr.length/3)*3; i = i+3) {
        arrGroup.push(arr.slice (i, i+3));
    }
    if(Math.floor(arr.length/3)*3 == arr.length) {
        arrGroup.push(`Оставшиеся студенты: -`);
    } else if (num == 2) {
        arrGroup.push(`Оставшиеся студенты: ${arr[arr.length - 2]}, ${arr[arr.length - 1]}`);
    } else {
        arrGroup.push(`Оставшиеся студенты: ${arr[arr.length - 1]}`);
    }
    return console.log(arrGroup);
}

sortStudentsByGroups(students);

let shout = {
    _message: "hello",
    get message() {
        return this._message;
    }, 
    set message(value) {
        this._message = value.toUpperCase();
    }
};

shout.message = "This camelcase";
console.log(shout.message);