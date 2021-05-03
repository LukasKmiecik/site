const body = document.querySelector('body');
const iloscPrzyciskowMenu = 7;
const iloscPrzyciskowSocial = 4;

const header = document.createElement('header');
header.classList.add('header');
body.append(header);

const logo = document.createElement('div');
logo.classList.add('logo');
header.append(logo);

const menuPhone = document.createElement('span');
menuPhone.classList.add('menu__phone');
header.append(menuPhone);
menuPhone.innerText = "92513192 ";

for(i=0; i<iloscPrzyciskowSocial; i++) {
    const socialDiv = document.createElement('span');
    socialDiv.classList.add('socialDiv');
    header.append(socialDiv);
    socialDiv.innerText = "social ";
}

const nav = document.createElement('nav');
nav.classList.add('nav');
header.append(nav);
nav.innerText = "nav ";

const ul = document.createElement('ul');
ul.classList.add('menu-nav');
nav.append(ul);

for(i=0; i<iloscPrzyciskowMenu; i++) {
    const menuNav__item = document.createElement('li');
    menuNav__item.classList.add('menu-nav__item');
    ul.append(menuNav__item);
    menuNav__item.innerHTML = "item ";
}