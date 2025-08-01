const icons = document.querySelectorAll('i');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.style.color = 'white';
        icon.style.backgroundColor = 'blue';
        icon.style.borderRadius = '10px';
        icon.style.margin = '5px';
    });

});


// lets target images
const assistImages = document.querySelectorAll('.assist-img');
const messageBox = document.getElementById('assist-message');
const helpMessage = document.getElementById('help-message');
const userMessage = document.getElementById('user-message');


assistImages.forEach(img =>{
    img.addEventListener('click', () => {

        messageBox.textContent = "How can I assist you today?";
        helpMessage.textContent = "Solomon, everyday show up please?";
        userMessage.textContent = "Thanks for showing up?";
        
    });

});




