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
}

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