function btInloggen(){
   var gebruikersnaam = document.getElementById("gebruikersnaam").value;
    var wachtwoord = document.getElementById("wachtwoord").value;

    if(gebruikersnaam == "1" && wachtwoord == "1")
    {
        alert("login succeed")
        window.location.href = "personeel.html";
     
    }
    else{
        alert("something went wrong")
    }
}

function bereken(){
    var totaalPrijs = 0;
    var nodig;
    var totaalKleinePizza;
    for (var i = 1; i <= 8; i++)
    {
        var prijsPerKilo = +(document.getElementById("kiloprijs" + i).value);
        var nodig = +(document.getElementById("nodig" + i).value);
        
        if (prijsPerKilo != null)
        {
            parseFloat(prijsPerKilo);
            parseFloat(nodig);
        }
        else
        {
            totaalPrijs = 0;
            nodig = 0;
        }

        totaalKleinePizza = (nodig / 100) * prijsPerKilo;
        document.getElementById("pizzaklein" + i).value = totaalKleinePizza.toFixed(2);
        document.getElementById("pizzagroot" + i).value = (totaalKleinePizza * 1.96).toFixed(2);
        totaalPrijs = totaalPrijs + totaalKleinePizza;
    }

    document.getElementById("totaalklein").value = totaalPrijs.toFixed(2);
    document.getElementById("totaalgroot").value = (totaalPrijs * 1.96).toFixed(2);

}


