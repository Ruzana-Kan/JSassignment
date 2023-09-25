  function hotelCost(day){var cost= 0;
         if(day<=10)
         {cost =day*1000}
        
        else if(day<=20){
          var firstPart=10*1000;
          var remaining=  day -10;
          var secondPart =remaining*800;
        }
        else{
            var firstPart=10*1000;
            var secondPart=10*800;
            var remaining=day-20;
            var thirdPart =remaining*500;
            cost=firstPart+secondPart+thirdPart;} 
          return cost}
            var totalCost=hotelCost(70);
            document.write(totalCost)