const swap1=(arr,index1,index2)=>{
    [arr[index1],arr[index2]]=[arr[index2],arr[index1]];
    }
    const bubbleSort1=(arr)=>{
    const n=arr.length
    let isSwap1;
        for( let i=n;i>0;i--){
            isSwap1=true
            for(let j=0;j<i-1;j++){
                if(arr[j]<arr[j+1]){
                    swap1(arr,j,j+1)
                    isSwap1=false
                }
            }
            if(isSwap1){
                break;
            }
        }
        return arr
    
    }

    let sortinDecending1=(str)=>{
        let arr=[]
        for(let i=0 ;i<str.length;i++){
           arr.push(str.charCodeAt(i))
        }
        let res=String.fromCharCode(...bubbleSort1(arr))
        console.log(res)
    }
    sortinDecending1("SSKEEEAATT");
    
    