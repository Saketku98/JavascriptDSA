let relativeSorting1=(arr,rel)=>{
    let obj={};
    arr.forEach(ele=>{
        obj[ele]=obj[ele]+1||1
    })
    let result=[];

    rel.forEach((reli)=>{
        if(obj.hasOwnProperty(reli)){
            for(let i=0;i<obj[reli];i++){
                result.push(reli)
            }
            delete obj[reli]
        }
    })
    
    for(let i in obj){
        for(let x=1;x<=obj[i];x++){
            result.push(+i)
        }
    }
    console.log(result)
    
}

relativeSorting1([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]);