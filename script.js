const QRImg = document.getElementById('QRImg');
const QRSize = document.getElementById('QRSize')
const QRText = document.getElementById('QRText');
const button = document.getElementById('generateButton');

const generateQR = ()=>{
    if(QRText.value !== ""){
        const QRApi = `https://chart.googleapis.com/chart?cht=qr&chf=bg,s,65432100&chs=${QRSize.value}&chl=${QRText.value}`;
        QRImg.src = QRApi;
    }
    else{
        window.alert('Empty Text! Enter Text for QR Code')
    }
}

button.addEventListener('click',generateQR)