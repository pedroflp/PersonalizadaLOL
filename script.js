function enviarNomes(){

var nome1 = document.getElementById('name1').value;
var nome2 = document.getElementById('name2').value;
var nome3 = document.getElementById('name3').value;
var nome4 = document.getElementById('name4').value;
var nome5 = document.getElementById('name5').value;
var nome6 = document.getElementById('name6').value;
var nome7 = document.getElementById('name7').value;
var nome8 = document.getElementById('name8').value;
var nome9 = document.getElementById('name9').value;
var nome10 = document.getElementById('name10').value;

var lista = [
    nome1,
    nome2,
    nome3,
    nome4,
    nome5,
    nome6,
    nome7,
    nome8,
    nome9,
    nome10
]

var objResults = [];
var count = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (var i = 0; i < lista.length;){
    var randomIndex = Math.floor(Math.random() * lista.length);
    if( count[randomIndex] == 0){
        objResults[i] = lista[randomIndex];
        count[randomIndex] = 1;
        i++;
    }
}

var time1 = [];
for ( var i = 0; i < objResults.length/2; i++){
    time1[i] = objResults[i];
}
var time2 = [];
for( var i = 0; i < objResults.length+1/2; i++ ){
    time2[i] = objResults[objResults.length/2 + i];
}


document.getElementById('team1').innerHTML = time1.join(" <br/>");

document.getElementById('team2').innerHTML = time2.join(" <br/>");
return false
}

function clearModal(){
    document.getElementById('submitTeams').value = 'Enviar';

    document.getElementById('name1').value = "";
    document.getElementById('name2').value = "";
    document.getElementById('name3').value = "";
    document.getElementById('name4').value = "";
    document.getElementById('name5').value = "";
    document.getElementById('name6').value = "";
    document.getElementById('name7').value = "";
    document.getElementById('name8').value = "";
    document.getElementById('name9').value = "";
    document.getElementById('name10').value = "";

    var modal = document.getElementById('modal');
    modal.style.display = 'none';

    var form = document.getElementById('form');
    form.style.display = 'block';

    var image = document.getElementById('home-image');
    image.style.opacity = '1';

    
}
