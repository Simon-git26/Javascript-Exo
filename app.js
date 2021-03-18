/* (function nameFonction () {
    const numberDevine = Math.round(Math.random() * 99) + 1;
    let essai = window.prompt('Rentrez un chiffre entre 1 et 100');
    let numberEssai = 8;
    
    while (essai != numberDevine && numberEssai > 0) {
        numberEssai --
        if (essai > numberDevine) {
            alert('Tu est au dessus');
        } else {
            alert('Tu est en dessous');
        }

        if (numberEssai > 0) {
            essai = window.prompt('Retentez votre chance');
        }
    }

    if (essai == numberDevine) {
        alert('Bravo, vous avez réussi');
    } else {
        alert('Echec, perdu');
    }

    (function nameReplay () {
        essai = window.confirm('Voulez-vous rejoué?')
    
        if (essai) {
            nameFonction();
        } else  {
            alert('Ok, tu est un mauvais perdant');
        }
    })();
})(); */



(function nameFunction() {
    const numberDevine = Math.round(Math.random() * 99) + 1;
    let essai = window.prompt('Choisissez un chiffre entre 1 et 100');
    let numberEssai = 8;

    while (essai != numberDevine) {
        numberEssai --
        if (essai < numberDevine && numberEssai > 0) {
            alert('Tu est en dessous');
        } else {
            alert('Tu est au dessus');
        }

        if (numberEssai > 0) {
            essai = window.prompt('Retente ta chance');
        } else {
            alert("Non, tu n'a plus d'essai");
        }
        
    }

    if (essai == numberDevine) {
        alert('Bravo, tu a réussi');
    } else {
        alert('Non, tu est nul');
    }


    (function nameReplay() {
        essai = window.confirm('Voulez-vous rejouer ?');

        if (essai) {
            nameFunction();
        } else {
            alert('Ok, mauvais perdant');
        }

    })();
})();