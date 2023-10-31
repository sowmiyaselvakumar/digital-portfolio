// script.js

document.getElementById('download-btn').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'https://www.w3schools.com/images/myw3schoolsimage.jpg'; // The URL of the file to download
    link.download = 'myImage.jpg'; // The name of the downloaded file
    link.click();
});