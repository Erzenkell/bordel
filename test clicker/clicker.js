//let b1 = document.querySelector('button');
let d1 = document.querySelector('div');

function changeCouleur(){
    this.style.backgroundColor ='orange';
}

let compteur = 0;

function mabite(){
    compteur+= 1;
    document.querySelector('p').textContent = "Compteur : "+compteur;
}

//b1.addEventListener('click', mabite)

d1.addEventListener('click', mabite);
d1.addEventListener('mouseover', changeCouleur)
d1.addEventListener('mouseover', function(){this.style.fontWeight ='bold'});
d1.addEventListener('mouseout', function(){this.style.backgroundColor='white'});
d1.addEventListener('mouseout', function(){this.style.fontWeight='normal'});

//d1.removeEventListener('mouseover', changeCouleur);