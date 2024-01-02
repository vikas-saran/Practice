const countval= document.querySelector('.val');
const incri= () =>{
let value=parseInt(countval.innerText);
value=value+1;
countval.innerText=value;
};
const decri= () =>{
    let value=parseInt(countval.innerText);
    value=value-1;
    countval.innerText=value;
    };
    