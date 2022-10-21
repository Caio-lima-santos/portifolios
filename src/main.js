import "./css/index.css"
import setCardType,* as M from "./functions.js"
import iMask from "imask"


document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault
})

const nomePessoal=document.getElementById("card-holder")
const nomeNoCard=document.getElementById("nome_no_card")

var secureCode =document.getElementById("security-code")
const secureCodePattern={
    mask:"0000",
}
const secureCodeMask= iMask(secureCode,secureCodePattern)

const expirationDate=document.getElementById("expiration-date")
const expirationDatePattern={
    mask:"MM{/}YY",
    blocks:{
        MM:{
        mask:iMask.MaskedRange,
        from:1,
        to:12
        },
        YY:{
        mask:iMask.MaskedRange,
        from: parseInt(String(new Date().getFullYear()).slice(2)),
        to: parseInt( String(new Date().getFullYear() + 10).slice(2))
        }

    }
}
const expirationDateMask= iMask(expirationDate,expirationDatePattern);

const cardNumber=document.getElementById("card-number")

const cardNumberPattern={
    mask:[
        {
            mask:"0000 0000 0000 0000",
            regex: /^4\d{0,15}/,
            cardtype:"visa"
        },
        {
            mask:"0000 0000 0000 0000",
            regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
            cardtype:"mastercard"
        },
        {
            mask:"0000 0000 0000 0000",
            cardtype:"default"
        },
    ],
     dispatch: function(appended,dynamicMasked){
        const number=(dynamicMasked.value +appended).replace(/\D/g,"")
        const foundMask=dynamicMasked.compiledMasks.find(function(item){
            console.log("aqui")
            console.log(number.match(item.regex))
            return number.match(item.regex)

        })
        
        return foundMask
    },
}


 const cardNumberMask= iMask(cardNumber,cardNumberPattern)





const bAddCard = document.getElementById("button")

bAddCard.addEventListener("click",() =>{
    console.log("vc clicou")
})


nomePessoal.addEventListener("input",()=>{
   
    nomeNoCard.textContent= nomePessoal.value.length === 0 ? "FULANO DA SILVA": nomePessoal.value
})

function updateSecurityCode(code){
    var cc_Code=document.querySelector(".cc-security .value")
    
        cc_Code.textContent= code.value.length === 0 ? "123" : code.value
    
    
    }
    
    

secureCodeMask.on("accept",()=>{
updateSecurityCode(secureCodeMask)
})


cardNumberMask.on("accept",()=>{
    const type= cardNumberMask.masked.currentMask.cardtype
    setCardType(type)
const cc_number=document.getElementById("cc-numbe")
cc_number.textContent=cardNumberMask.value.length === 0 ?"1234 5678 1234 1234":cardNumberMask.value
})

expirationDateMask.on("accept",()=>{
 const expiratDate= document.getElementById("expirat")   
expiratDate.textContent= expirationDateMask.value.length ===0 ? "01/22":expirationDateMask.value
})