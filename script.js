var lista = document.querySelectorAll(
    "#cypher-type, #options, #encode-radio, #decode-radio, #submit-btn, #decoded-text, #encoded-text"
);

var decrypt =lista[0];
var tipoDeCifra =lista[1];
var Oelem = lista[2];
var Radio = lista[3];
var DeRadio =lista[4];
var Send =lista[5];
var crypted = lista[6];

console.log(lista);
innitListeners();


function innitListeners() {
    tipoDeCifra.addEventListener("change", function () {
if (tipoDeCifra.selectedIndex == 0) {
            document.getElementById("TC").remove();
      document.getElementById("TL").remove();
        } else {
 addShiftElement();
        }
    });
    Send.addEventListener("click", function (event) {
        event.preventDefault();

               if (tipoDeCifra.selectedIndex == 0) {
    if (isEncode()) {
                crypted.value = btoa(decrypt.value);
    }if (!isEncode()) {
                crypted.value = atob(crypted.value);
            }
        } else {
if (isEncode()) {
      crypted.value = Cezinha(
           decrypt.value,
         parseInt(document.getElementById("TC").value)
        );
    }
 if (!isEncode()) {
  crypted.value = caesarDecipher(
     decrypt.value,
      parseInt(document.getElementById("TC").value)
         );
     }
   }
    });
}

function changeBtnName() {
    if (isEncode()) {
        Send.setAttribute("valor", "encode message");
    }

    if (!isEncode()) {
        Send.setAttribute("valor", "decode message");
    }
}

function isEncode() {
    if (Radio.checked == true && DeRadio.checked == false) {
        return true;
    }

    return false;
}

function addShiftElement() {
    let CTL = document.createElement("label");
    let CTI = document.createElement("input");
    CTL.innerHTML = "Shift: ";
    CTL.setAttribute("id", "TL");
 CTL.setAttribute("for", "TC");
    CTI.style.width = "35px";
    CTI.style.margin = "5px";

       CTI.setAttribute("valor", 1);
    CTI.setAttribute("type", "number");
    CTI.setAttribute("id", "TC");
    Oelem.appendChild(CTL);
Oelem.appendChild(CTI);
}
function Cezinha(input, shift) {
    let code = [];
    for (var i = 0; i < input.length; i++) {
               let troca = input.charCodeAt(i) + (shift);
        while (troca > 122) {
    troca = (troca - troca) + 97;
        }
 code.push(String.fromCharCode(troca));
    }
           return code.join("");
}
function caesarDecipher(input, shift) {
    let code = [];
    for (var i = 0; i < input.length; i++) {
        let troca = input.charCodeAt(i) + shift * -1;
        while (troca > 122) {
            troca = (troca - troca) + 97;
        }
        code.push(String.fromCharCode(troca));
    }
    return code.join("");
} 