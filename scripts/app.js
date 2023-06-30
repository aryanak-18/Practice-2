// const parentdiv=document.getElementByClassName("parent");
const homediv=document.getElementById('homei');
const contdiv=document.getElementById('contacti');
const infodiv=document.getElementById('infoi');
const guidediv=document.getElementById('guidei');

const home2button=document.getElementById('home2i');
const cont2button=document.querySelector('.cont2');
const info2button=document.querySelector('.info2');
const guide2button=document.querySelector('.guide2');

const showHome=()=>{
    homediv.style.display="block";
    contdiv.style.display="none";
    infodiv.style.display="none";
    guidediv.style.display="none";
};

const showContact=()=>{
    homediv.style.display="none";
    contdiv.style.display="block";
    infodiv.style.display="none";
    guidediv.style.display="none";
};

const showInfo=()=>{
    homediv.style.display="none";
    contdiv.style.display="none";
    infodiv.style.display="block";
    guidediv.style.display="none";
};

const showGuide=()=>{
    homediv.style.display="none";
    contdiv.style.display="none";
    infodiv.style.display="none";
    guidediv.style.display="block";
};

home2button.addEventListener('click', showHome);
cont2button.addEventListener('click', showContact);
info2button.addEventListener('click', showInfo);
guide2button.addEventListener('click', showGuide);