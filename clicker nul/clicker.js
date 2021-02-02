let b1 = document.querySelector('#upgrade');
let b2 = document.querySelector('#upgrade2')
let d1 = document.querySelector('article');
let cookie = document.querySelector('#cookie');

let cookie_par_seconde = 0;
let compteur_cookie = 0;

let prix_upgrade_clic = 30;
let clic_power = 1;
let nb_upgrade_clic = 0;

let prix_upgrade_2 = 100;
let nb_upgrade_2 = 0;

setInterval(cookie_temps,100);

function cookie_clic(){
    compteur_cookie+= clic_power;
    document.querySelector('p').textContent = "Compteur cookie : "+Math.round(compteur_cookie);
}

function bouton_upgrade(){
    if (compteur_cookie >= prix_upgrade_clic){
        nb_upgrade_clic += 1;
        clic_power += 1;
        compteur_cookie -= prix_upgrade_clic;
        prix_upgrade_clic += nb_upgrade_clic*2;
        document.querySelector('p').textContent = "Compteur cookie : "+Math.round(compteur_cookie);
        b1.textContent = "("+nb_upgrade_clic+") Upgrade clic : "+prix_upgrade_clic;
    }
}

function bouton_upgrade_2(){
    if (compteur_cookie >= prix_upgrade_2){
        nb_upgrade_2 += 1;
        compteur_cookie -= prix_upgrade_2;
        prix_upgrade_2 += nb_upgrade_2*3;
        cookie_par_seconde += 1;
        document.querySelector('p').textContent = "Compteur cookie : "+Math.round(compteur_cookie);
        b2.textContent = "("+nb_upgrade_2+") Upgrade cps 1 : "+prix_upgrade_2;
    }
}

function cookie_temps(){
    compteur_cookie += cookie_par_seconde/10;
    document.querySelector('p').textContent = "Compteur cookie : "+Math.round(compteur_cookie);    
}

b1.addEventListener('click', bouton_upgrade);
b2.addEventListener('click', bouton_upgrade_2);
cookie.addEventListener('click', cookie_clic);
