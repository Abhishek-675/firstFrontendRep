async function f() {
    console.log('a');
    console.log('b');

    let p1 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('c'));
        }, 1000);
    });
    
    let p2 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('d'));
        }, 0);
    });
            
    console.log('e');
}

f();