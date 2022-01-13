function splitTheBill(x) {
    var total = 0;
    var count = 0;
    
    for(item in x){
      total += x[item];
      count++;
    }
    var average = total / count;  
    
    for(item in x){
      x[item] = Math.round((x[item] - average) * 100) / 100;
    }
    
    return x;
  }



  function splitTheBill(x) {
    let average =Object.values(x).reduce((a,b)=>a+b,0)/Object.values(x).length;
    let arr=Object.keys(x);
    let arr2=Object.values(x).map((a,b)=>(a-average));
    return Object.assign(...arr.map((n, i) => ({ [n]: parseFloat((arr2[i]).toFixed(2)) })));
    }


