const url = 'https://www.blockchain.com/ticker';

function prixBitcoin()
{

let requete = new XMLHttpRequest();
requete.open('GET', url); 
requete.responseType = 'json';
requete.send();

requete.onload = function () {
    if(requete.readyState === XMLHttpRequest.DONE) {
        if(requete.status === 200){
            let response = requete.response;
            let prixEnEuros = response.EUR.last;
            document.querySelector('#price_label').textContent = prixEnEuros;
         }
        else {
            alert("Erreur");
         }
        }
    }
}

setInterval(prixBitcoin, 3000);