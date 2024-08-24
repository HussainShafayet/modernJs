let a = 10;
const outer = ()=>{
    let b = 15;
    const inner = ()=>{
        let c = 20;
       console.log(a, b, c);
    }
   console.log('c', c);
    inner();
}
//console.log('b', b);
outer();