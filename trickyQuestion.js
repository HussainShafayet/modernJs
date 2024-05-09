const delay = (i)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(i);
        }, i*1000);
    })
}


const timer = async (n)=>{
    console.log('start timer')
    for(let i = 0;i<=n;i++){
        const result = await delay(i);
        console.log(result);
    }
    console.log('end timer')
}


timer(3);