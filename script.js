let counter = 0;

function increamentCounter(){
    counter++;
    document.getElementById("bt-result").innerText = counter;
    //console.log(counter);
}

function decreamentCounter(){
    counter--;
    document.getElementById("bt-result").innerText = counter;
    //console.log(counter);
}

/*const increamentCounter=()=>
counter=counter+1;
document.getElementById("bt-result").innerText = counter;

const decreamentCounter=()=>
counter=counter-1;
document.getElementById("bt-result").innerText = counter;*/

//document.getElementById("incrament-Button").addEventListener("click", increamentCounter);
//document.getElementById("decreament-Button").addEventListener("click",decreamentCounter);

//capital uppercase first letter
//week5
//const str="kasia";
function uppercaseFirstLetter(str){
    //let firstLetter= str.charAt[0];
    let firstLetter=(str.slice(0,1)).toUpperCase();
    
    //let secondLetter=str.substring(1,str.length);
    let secondLetter=str.slice(1);

    //let toupper=firstLetter.toUpperCase();
    console.log(firstLetter.toUpperCase());
    console.log(secondLetter);
    //console.log(toupper);

    console.log(firstLetter+secondLetter);
    console.log("---------------");
}
console.log(uppercaseFirstLetter("kasia")=="Kasia");
console.log(uppercaseFirstLetter("kasia")=="KAsia");
console.log(uppercaseFirstLetter("1hello")=="1hell");

//create button with Javascript
const newButton = document.createElement('button');
newButton.textContent = 'Click here';
document.body.appendChild(newButton);
newButton.style="width:100px;margin-top: 500px";



//assignment change button color
const addCart = document.createElement('button');
addCart.textContent = 'Add to cart';
document.body.appendChild(addCart);
addCart.style="background-color:black;color:white;margin-top: 500px;font-size: 36px;";

addCart.addEventListener("click", changeStyles);

function changeStyles(){
    //
     addCart.style="background-color:green;color:white;margin-top: 500px;font-size: 36px;";

    addCart.className=".changecolor";
    //addCart.style=".changecolor";
}


