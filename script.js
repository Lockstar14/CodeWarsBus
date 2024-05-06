let number = function(busStops){
    let summaryIn = 0;
let summaryOut = 0;
let summary = 0;
    for (people of busStops){
      summaryIn += people[0]
       summaryOut += people[1]
       summary = summaryIn - summaryOut

    }
    return summary
  }
  console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))