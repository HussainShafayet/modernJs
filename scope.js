let a = 10;
const outer = ()=>{
    let b = 25;
    const inner = ()=>{
        let c = 29;
       console.log(a, b, c);
    }
   console.log('c', c);
    inner();
}
//console.log('b', b);
outer();