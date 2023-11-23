let input =document.querySelector("#input");
let buttons = Array.from(document.getElementsByClassName('btn'));
console.log(buttons);
let ope ='';
let data =[];
// console.log(typeof );
buttons.map((btn)=>{btn.addEventListener('click',(evnt)=>{
    let btnvalue = evnt.target.innerText;
    if(btnvalue==="AC"){
        input.innerText='';
        data=[];
        ope ='';
        
    } 
    else if (btnvalue=='Del'){
        input.innerText =input.innerText.slice(0,-1);
    }
    else if(btnvalue==='.'){
        if(!input.innerText.includes('.')){
            input.innerText +=btnvalue
        }
    
    }

    else if(btnvalue==="="){
        data.push(input.innerText);
        let result =eval(data.join(' '));
        input.innerText=result;
        data=[];
        ope='';

    }else if(isNaN(parseInt(btnvalue))){
        ope = btnvalue;
        data.push(input.innerText);
        data.push(ope);
        input.innerText='';
    }
    else{
        input.innerText+=btnvalue;
    }

});
});