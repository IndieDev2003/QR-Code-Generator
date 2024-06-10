const apiUrl='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
let inputText=document.querySelector("#input-text")
let qrImage=document.querySelector("#qr-img")

function QR(){
    if(inputText.value===''){
        alert("Type Something To Generate QR Code !")
    }else{
        qrImage.src=apiUrl+inputText.value
    }
    
}