const singleNumbers = [ 'zero', 'one', 'two',  'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const decimalNumbers = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const dozensNumbers = ['zero','ten','twenty', 'thirty', 'forty', 'fifty','sixty', 'seventy', 'eighty', 'ninety' ]

module.exports = function toReadable (number) {
    let num = number % 10;
    let n = Math.floor(number / 10);

    if (number < 10)
        return singleNumbers[number];

    if (number < 100 && number % 10 === 0)
        return dozensNumbers[n];

    if (number < 20)
        return decimalNumbers[number%10];

    if (number < 100)
        return dozensNumbers[(number-num) / 10] + ' ' + singleNumbers[num];

    let m = number % 100;

    if (m === 0)
        return singleNumbers[(number-m)/100] + ' hundred';

    if (number % 10 === 0) 
        return singleNumbers[(number-m)/100] + ' hundred ' + dozensNumbers[(m)/10]

    if (m < 10)
        return singleNumbers[(number-m)/100] + ' hundred ' + singleNumbers[m]

    if (10 < m && m < 20)
        return singleNumbers[(number-m)/100] + ' hundred ' + decimalNumbers[m%10]

    return singleNumbers[(number-m)/100] + ' hundred ' + dozensNumbers[(number%100-((m)%10))/10] + ' ' + singleNumbers[(number%100)%10]
}


  /*  const singleNumbers = [ 'zero', 'one', 'two',  'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const decimalNumbers = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozensNumbers = ['ten','twenty', 'thirty', 'forty', 'fifty','sixty', 'seventy', 'eighty', 'ninety' ];


module.exports = function toReadable (number) {
   
    let numberString = number.toString();
    let n = Math.floor(number / 10);
    let num = number % 10;
    let m = number % 100;
    
      switch (numberString.length) {
          case 1: 
          return singleNumbers[number];
          
          case 2: 
          if (number % 10 === 0) {
            return numberString = dozensNumbers[n-1] 
          }
          else if (number < 20) {
                return decimalNumbers[num]
              }
          else {
                return numberString = dozensNumbers[(number-num) / 10-1] + ' ' + singleNumbers[num]
              }
     
         case 3: 
              if (m === 0) { 
                  numberString = singleNumbers[number/100] + ' hundred'
              } else if (number % 10 === 0){ 
                  numberString = singleNumbers[(number-m)/100] + ' hundred ' + dozensNumbers[(m)/10 - 1]
              } else if (number % 100 < 20 && number % 100 > 10) { 
                  numberString = singleNumbers[(number-m)/100] + ' hundred ' + decimalNumbers[(m)%10]
              } else if (m < 10) {
                  numberString = singleNumbers[(number-m)/100] + ' hundred ' + singleNumbers[m]
              } else { 
                  numberString = singleNumbers[(number-m)/100] + ' hundred ' + dozensNumbers[(m-((m)%10))/10 - 1] + ' ' + singleNumbers[(m)%10]
              }
      }
      return numberString 
    
    
} */