
//EASY
//1) Am I Perfect?
const AmIPerfectNumber=(num)=>{
    let sum=0;
    for(let i=1;i<=num/2;i++){
        if(num%i===0)
            sum+=i;
        if(sum>num)
            break;
    }
    return check(num,sum);
}
const check=(num,sum)=>{
    if(sum===num)
        return "perfect number"
    else
        return (sum>num)? "Abundant" : "Deficient";
        
}

console.log( AmIPerfectNumber(6) );



//2) Shorten me!
const ShortenMe=(string)=>{
    let resString="",count=1,n=string.length;
    if(string===null || n===0)
    return "";
    
    for(let i=0;i<n;i++){
        if(string.charAt(i)!==string.charAt(i+1) || i===n-1){
            resString= (count>1)? resString.concat(count,string.charAt(i)) : resString.concat(string.charAt(i)) ;
            count=1;
        }else{
            count++;
        } 
    }
    return resString;
}
console.log( ShortenMe("OOOOHHHHMYYYYYGDDOOOOOD") );


//MEDIUM
//1) Greater than and less than in a matrix 

const MinMax=(array)=>{

    let colMin=array[0];
    let resArray=[];
    //Using set to store values of row Maximum
    const rowMax = new Set();

    for(let i=0;i<array.length;i++){
        let max=-1;

        for(let j=0;j<array[0].length;j++){
            let ele=array[i][j];
            if(ele<colMin[j])
                colMin[j]=ele;
            max=Math.max(max,ele);
        }

        rowMax.add(max);
    }
    
    // Cheking for matching of row and col value .
    colMin.forEach(ele => {
        if(rowMax.has(ele))
            resArray.push(ele);
    });

    return resArray;
}

 let array=[[7,8,7],[5,4,2],[8,6,7]];
 MinMax(array).forEach(ele=>console.log(ele));

 //HARD
//1) Catch the fish
 const CatchTheFish=(fishes,k,l,m,n)=>{
    //  If any person has value 1, he can catch all fishes
    if(k===1||l===1||m===1||n===1)
        return fishes;

    let catchedFishes=0;
     for(let i=1;i<=fishes;i++){
         if(i%k===0||i%l===0||i%m===0||i%n===0){
            catchedFishes++;
         }
     }
     return catchedFishes;
 }

 console.log(CatchTheFish(24,2,3,4,5));