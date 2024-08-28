

let currentBackgroundIndex = 0;
const backgrounds = [
    { src: 'imgs/1.png', coords: { top: '66%', left: '50%' }, width:170,height:270 },
    { src: 'imgs/2.png', coords: { top: '26%', left: '49%' }, width :   105 , height : 189 },
    { src: 'imgs/3.png', coords: { top: '50%', left: '48%' }, width : 285 , height : 472 },
    { src: 'imgs/4.png', coords: { top: '59%', left: '48.5%' } , width : 150 , height : 280 },
];

function selectBackground(index,) {
    currentBackgroundIndex = index;
    const mainBackground = document.getElementById('main-background');
    mainBackground.style.backgroundImage = `url(${backgrounds[index].src})`;
    positionUploadedImage();
}

function uploadImage(event) {
    const uploadedImage = document.getElementById('uploaded-image');
    uploadedImage.src = URL.createObjectURL(event.target.files[0]);
    uploadedImage.style.display = 'block';
    positionUploadedImage();
}

function positionUploadedImage() {
    const uploadedImage = document.getElementById('uploaded-image');
    const coords = backgrounds[currentBackgroundIndex].coords;
    const width = backgrounds[currentBackgroundIndex].width
    const height = backgrounds[currentBackgroundIndex].height
    uploadedImage.style.top = coords.top;
    uploadedImage.style.left = coords.left;
    uploadedImage.style.width = width+'px';
    uploadedImage.style.height = height+'px';
}

function downloadMainBackground() {
    const element = document.getElementById('main-background');
    html2canvas(element, { useCORS: true }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'main-background.png';
        link.click();
    });
}


// Initialize with the first background
selectBackground(0);
