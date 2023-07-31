let text2 = document.getElementById("my");
let mydisplay1 = document.getElementById("dis");
let text3=document.getElementById("my1");

let n=document.getElementById("num");
let n1=document.getElementById("num1");

function display1() {
    var str = text2.value;
    var str1 = text3.value;
    mydisplay1.innerHTML = str.toString();
    mydisplay1.innerHTML = str1.toString();
    mydisplay1.innerHTML = str.concat(str1);
  
}

function low(){
    var str=text2.value;
    mydisplay1.innerHTML=str.toLowerCase();
}
function upp(){
    var str=text2.value;
    mydisplay1.innerHTML=str.toUpperCase();
}
function slc()
{  var str=text2.value;
    var numb=n.value;
    var numb1=n1.value;
   mydisplay1.innerHTML=str.slice(numb,numb1);
}




/*let swr = new String("here we go");
console.log(swr.charAt(3));
console.log(swr.toUpperCase());
console.log(swr.lastIndexOf("e"));
console.log(swr.indexOf("e"));*/
//# sourceMappingURL=new3.js.map