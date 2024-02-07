let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let minValue= false;
let minIndex;
for (i = 0; i<arr.length; i++){
    if (!minValue || minValue > arr[i]){
        minValue = arr[i];
        minIndex = i;  
    }
}
console.log("minimal "+minValue+" index is "+(minIndex+1));
// 
let maxValue= false;
let maxIndex;
for (i = 0; i<arr.length; i++){
    if (!maxValue || maxValue < arr[i]){
        maxValue = arr[i];
        maxIndex = i;
    }
}
console.log("maximal "+maxValue+" index is "+(maxIndex+1));
// 
let subZero= 0;
for (i = 0; i<arr.length; i++){
    if (arr[i]<0){
        subZero++;
    }
}
console.log(subZero+" negative");
// 
let oddPositivePair= 0;
for (i = 0; i<arr.length; i++){
    if (arr[i]%2!== 0 && arr[i]> 0){
        oddPositivePair++;  
    }
}
console.log(oddPositivePair+" oddPositivePair");
// 
let evenPositivePair= 0;
for (i = 0; i<arr.length; i++){
    if (arr[i]%2=== 0 && arr[i]> 0){
        evenPositivePair++;  
    }
}
console.log(evenPositivePair+" evenPositivePair");
// 
let evenPositiveSum= 0;
for (i = 0; i<arr.length; i++){
    if (arr[i]%2=== 0 && arr[i]> 0){
        evenPositiveSum+=arr[i];  
    }
}
console.log(evenPositiveSum+" evenPositiveSum");
// 
let oddPositiveSum= 0;
for (i = 0; i<arr.length; i++){
    if (arr[i]%2!== 0 && arr[i]> 0){
        oddPositiveSum+=arr[i];  
    }
}
console.log(oddPositiveSum+" oddPositiveSum");
// 
let PositiveMult= 1;
for (i = 0; i<arr.length; i++){
    if (arr[i]> 0){
        PositiveMult*=arr[i];  
    }
}
console.log(PositiveMult+" PositiveMult");
// 
let maxFromList= false;
let maxFromListIndex;
for (i = 0; i<arr.length; i++){
    if (!maxFromList || maxFromList < arr[i]){
        maxFromList = arr[i];
        maxFromListIndex=i;
    }
    arr[i]= 0;
}
arr[maxFromListIndex]=maxFromList;
console.log(maxFromList+" is maximal " + arr);




