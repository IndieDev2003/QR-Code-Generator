const apiUrl='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
let inputText=document.querySelector("#input-text")
let qrImage=document.querySelector("#qr-img")

function QR(){
    qrImage.src=apiUrl+inputText.value
}