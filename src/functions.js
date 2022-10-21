
const ccBgColor01= document.getElementById("path01")
const ccBgColor02= document.getElementById("path02")
const img_card= document.getElementById("img_card")


function setCardType(type){
    const colors ={
        visa:["blue" ,"orange"],
        mastercard:["black","purple"],
        default:["green","red"]
    }
    
    
    
    
    ccBgColor01.setAttribute('fill',colors[type][0])
    ccBgColor02.setAttribute('fill',colors[type][1])
    img_card.setAttribute("src",`cc-${type}.svg`)
    /*switch(type){
        case "visa":
      img_card.src="cc-visa.svg"
      break;
    
      case "mastercard":
        img_card.src="cc-mastercard.svg"
        break;
        */
    
    
    }






    


    export default setCardType