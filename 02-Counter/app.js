// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count ++;
        }
        else {
            count = 0;
        }
        if(count > 0){
            value.style.color = '#3F704D';
            document.body.style.backgroundColor = '#FAFAFA';
        }
        if(count < 0){
            value.style.color = '#CF1920';
            document.body.style.backgroundColor = '#FAFAFA';

        }
       if(count === 0) {
            value.style.color = '#33333';
            document.body.style.backgroundColor = '#FAFAFA';
        }
        value.textContent = count;
    });
});