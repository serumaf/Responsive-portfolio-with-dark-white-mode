
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

//DArk- light Mode

const darkModeButton =document.getElementById('darkModeButton');
const body =document.body;

const enableDarkMode=()=>{
    body.classList.add('dark-mode');
}
const disableDarkMode=()=>{
    body.classList.remove('dark-mode');
}

darkModeButton.addEventListener('change',()=>{
    if(darkModeButton.checked){
        disableDarkMode();

}else{
    enableDarkMode();
}});

//multipl text

const typed = new Typed ('.multiple',{
    strings: ['Web Developer', 'Web Designer', 'Front-End Developer', 'Back-End Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop :true

});
