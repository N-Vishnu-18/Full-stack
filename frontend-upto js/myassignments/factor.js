const  num= document.querySelector('.number')
const   bu= document.querySelector('.submit-button')

bu.addEventListener('click',()=>{
    let n = Number(num.value)
    let a = []
    for(let i = 1;i<=n;i++){
        if(n%i==0)
        a.push(i);
    }
    console.log(a)
    const factors = document.querySelector('.ans')
    factors.textContent = `Factors of ${n} is `+a;
    Input.value=null;
})