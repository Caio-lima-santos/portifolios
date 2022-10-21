import "./css/index.css"
import * as M from "./functions.js"
import iMask from "imask"


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


M.default("mastercard")
