// https://github.com/Aklima-Shampa/JAVESCRIPT_PROJECT

// kilometerTometerConvert

function kilometerToMeter(number){
    var meter = number * 1000;
    return meter;
  }
  
//   var result = kilometerToMeter(8);
//   console.log(result);
  
//   budgetCalculator
  
   function budgetCalculator(watch, phone, laptop) {
          var watch = watch * 50;
          var phone = phone * 100;
          var laptop = laptop * 500;
          var product = watch + phone + laptop;
          return product;
        
      }
    //   var result = budgetCalculator(2, 2, 2);
    //   console.log(result);
  
  
//   hotelCostCalculation:
  
  function hotelCost(day) {
    var moneyCost = 0;
    if (day<=10) {
      moneyCost = day * 100;
    } else if (day<=20) {
        var firstPart = 10 * 100;
        var totelCost = day -10;
        var scondPart = totelCost * 80;    
        moneyCost = firstPart + scondPart;
    } else {
        var firstPart = 10 * 100;
        var scondPart = 10 * 80;
        var totelCost = day - 20;
        var thirdPart = totelCost * 50;
        moneyCost =  firstPart + scondPart + thirdPart;
    }
      return moneyCost;
    }
    //   var result = hotelCost (30);
    //   console.log(result);
  
  
//   megaFriend: 
  
function megaFriend(arr){
      var longest="";
  
      for(var i=0;i<arr.length;i++){
        
         if (arr[i].length>longest.length){
            longest=arr[i];
         }
      } 
      return longest;
   }
//    var result = megaFriend(["morjina", "fahima", "farjana"])
//    console.log(result);
  
  
  