const QRImg = document.getElementById('QRImg');
const QRSize = document.getElementById('QRSize')
const QRText = document.getElementById('QRText');
const button = document.getElementById('generateButton');

const generateQR = ()=>{
    const QRApi = `https://chart.googleapis.com/chart?cht=qr&chf=bg,s,65432100&chs=${QRSize.value}&chl=${QRText.value}`;
    QRImg.src = QRApi;
}

button.addEventListener('click',generateQR)