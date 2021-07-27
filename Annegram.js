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
