//https://github.com/MinhajSadik/Assignment-3-Functional-JS

1//kilometerToMeter/Function.
function kilometerToMeter(kilo){
    let meter = kilo * 1000;
    return meter;
}
//var result = kilometerToMeter(1);
// console.log(result);

2//budgetCalculator/Fanction.
function budgetCalculator(total, watch, mobile, laptop){
    let badget = 0;
    let remaining = 0;

    if(total <= 10){
        badget = total * 50;

    }
    else if(total <= 20){
        watch = 10 * 50;
        remaining = total - 10;
        mobile = remaining * 100;
        badget = watch + mobile;

    }
    else{
        watch = 10 * 50;
        mobile = 20 * 100;
        remaining = total - 20;
        laptop = remaining * 500;
        badget = watch + mobile + laptop;
    }
    return badget;
}
//let result1 = budgetCalculator(10);
// console.log(result1);

3//hotelCost/Fanction.
function hotelCost(cost) {
    let totalBill = 0;

    if(cost <= 10){
        totalBill = cost * 100;

    }else if(cost <= 20){
        let firstDay = 10 * 100;
        let tillNow = cost - 10;
        let secondDay = tillNow * 80;
        totalBill = firstDay + secondDay;

    }
    else{
        firstDay = 10 * 100;
        secondDay = 20 * 80;
        tillNow = cost - 20;
        let otherDay = tillNow * 50;
        totalBill = firstDay + secondDay + otherDay;

    }
    return totalBill;
}
//let result2 =hotelCost(12);
// console.log(result2);

4//megaFriend/Fanction.
let friend =['Minhaj', 'Ahmed', 'Sadik', 'Anika', 'Sharmin', 'IqraAziz'];
function megaFriend(friend){
    let maxWord = 0;
    let highestWord;
    for(i=0; i<friend.length; i++){
        if(friend[i].length > maxWord){
            maxWord = friend[i].length;
            highestWord = friend[i];
        }
    }
    return maxWord;
}
// let result3 = megaFriend(friend);
// console.log(result3);
