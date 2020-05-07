


//Personnalisation du taux 

const centBirrFdjInput = document.getElementById('centBirrFdj');
const unEuroFdj = document.getElementById('euroFdj');

const btnSave = document.getElementById('save');

const unBirrFdj = document.getElementById('unBirrFdj');
const unEuroBirr= document.getElementById('unEuroBirr');
const unFdjEuro = document.getElementById('unFdjEuro');
const unBirrEuro = document.getElementById('unBirrEuro');
const unFdjBirr = document.getElementById('unFdjBirr');

var birrFdj, euroFdj, euroBirr, fdjEuro, birrEuro, fdjBirr;

var registre = new Map();

btnSave.addEventListener('click', function(){
    localStorage.setItem('centBirrFdj',centBirrFdjInput.value);
    localStorage.setItem('euroFdj',unEuroFdj.value);
    displayConvertion();
});


  function displayConvertion(){
   birrFdj = new Number(centBirrFdjInput.value)/100;
   euroFdj = new Number(unEuroFdj.value);
   euroBirr = euroFdj/birrFdj;
   fdjEuro = 1/euroFdj;
   birrEuro = 1/euroBirr;
   fdjBirr = 1/birrFdj;

    unBirrFdj.textContent = birrFdj;
    unEuroBirr.textContent = euroBirr;
    unFdjEuro.textContent = fdjEuro;
    unBirrEuro.textContent = birrEuro;
    unFdjBirr.textContent = fdjBirr;

    registre.set('EUROFDJ',euroFdj);
    registre.set('EUROBIRR',euroBirr);
    registre.set('EUROEURO',1);
    registre.set('FDJEURO',fdjEuro);
    registre.set('FDJBIRR',fdjBirr);
    registre.set('FDJFDJ',1);
    registre.set('BIRREURO',birrEuro);
    registre.set('BIRRFDJ',birrFdj);
    registre.set('BIRRBIRR',1);

  }

  function loadpage(){
    if(localStorage.getItem('centBirrFdj') && localStorage.getItem('euroFdj')){
        centBirrFdjInput.value = localStorage.getItem('centBirrFdj');
        unEuroFdj.value = localStorage.getItem('euroFdj');
        displayConvertion();
      }


  }

  document.body.onload = loadpage;

  //convertion

const montantInput = document.getElementById('montant');
const deSelect= document.getElementById('de');
const aSelect = document.getElementById('a');
const resultatSpan = document.getElementById('resultat');
const convertirBtn = document.getElementById('convertir');

function convertir(montant,de,a){
    let taux = registre.get(de+a);
    return montant*taux;
}

convertirBtn.addEventListener('click', function(){
    let montant =  new Number(montantInput.value);
    let de = deSelect.value;
    let a = aSelect.value;
    let newMontant = convertir(montant,de,a);

    resultatSpan.textContent = montant + " " + de + " = " + newMontant+ " " + a;

});
