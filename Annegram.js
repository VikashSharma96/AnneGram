let v = "vikash"
let b = "viisha"
let a = 0;
for(let i of v){
    for(let k of b){
        if(i==k){
            a++
            break
        }
    }
}
if (b.length===a){
    if (v.length === b.length){
        console.log('Anne')
    }
}




let v = "vikash"
let b = "viksha"
if (v.length === b.length){
    for(i of v){
        let a = 0;
        for(k of b){
            if(i!=k){
                a++
            }
        }if(a == v.length){
            console.log("not Annegram")
            break
        }
    }
}else{
    console.log("not annegram")
}
