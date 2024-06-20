const body = document.body
let hasil = 0;

var sec1 = document.getElementById("section-1")
var p1 = document.getElementById("p1")
var text1 = document.getElementById('textarea-1')
text1.className = 'cel';
sec1.appendChild(p1)

var sec2 = document.getElementById("section-2")
var p2 = document.getElementById("p2")
var text2 = document.getElementById('textarea-2')
text2.className = 'fah'
sec2.appendChild(p2)

var text3 = document.getElementById('textarea-3')

function convert(){
    if(text1.className === 'cel'){
        let a = parseFloat(text1.value);
        if (!isNaN(a)){
            hasil = ((9/5) * a) + 32;
            text2.value = hasil;
            text3.value = "((9/5) * " + a + ") + 32"
        }else{
            alert("Tidak valid")
        }
    } else{
        let b = parseFloat(text1.value);
        if (!isNaN(b)){
            hasil = (5/9) * (b - 32);
            text2.value = hasil;
            text3.value = "(5/9) * (" + b + " - 32)"
        }else{
            alert("Tidak valid")
        }
    }
}

function reset(){
    text1.value = ""
    text2.value = ""
    text3.value = ""
}

function reverse(){
    [p1.textContent, p2.textContent] = [p2.textContent, p1.textContent];
    [text1.className, text2.className] = [text2.className, text1.className];
    text1.value = "";
    text2.value = "";
    text3.value = "";
}