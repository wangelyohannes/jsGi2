function removeNegative(num){
    return num.filter(function(num){
        return num > 0;
    })
}        
let num =[1,4,5,344,-434,345]
console.log(removeNegative(num));
