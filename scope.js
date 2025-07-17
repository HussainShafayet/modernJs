let a = 10;
const outer = ()=>{
    let b = 256;
    const inner = ()=>{
        let c = 665;
       console.log(a, b, c);
    }
   console.log('c', c);
    inner();
}
//console.log('b', b);
outer();
