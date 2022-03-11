let meanAndMedian=(arr)=>{
    arr.sort((num1,num2)=>{
        return num1-num2;
    })
    let median;
    if(arr.length%2!==0){
        median=arr[arr.length/2]
    }else{
        median=(arr[Math.floor((arr.length-1)/2)] + arr[arr.length / 2]) / 2
    }

    let sum=arr.reduce((acc,curr)=>{return acc+=curr},0)

    let mean=sum/(arr.length)

    return({median,mean})

}

console.log(meanAndMedian([1, 3, 4, 2, 6, 5, 8, 7]));
