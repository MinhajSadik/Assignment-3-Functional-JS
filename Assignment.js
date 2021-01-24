//https://github.com/MinhajSadik/Assignment-3-Functional-JS


//kilometerToMeter/Function.
function kilometerToMeter(kilo){

let meter = kilo * 1000;
return meter;

}
var result = kilometerToMeter(1);
console.log(result);




//budgetCalculator/Fanction.
function budgetCalculator(budget){



}


//hotelCost/Fanction.
function hotelCost(){





}


//megaFriend/Fanction.
let friend = ['Minhaj', 'Ahmed', 'Sadik', 'Anika', 'Sharmin', 'IqraAziz'];
function megaFriend(friend){
    let maxWord = 0;
    let longestWord;
    for(i=0; i<friend; i++){
        if(friend[i].length > maxWord){
            let maxWord = friend[i].length;
            longestWord = friend[i];

        }
    }
    return maxWord;
}
let result4 = megaFriend(friend);
console.log(result4);
