console.log("hejehejdå");

minLista = document.getElementById("minLista");

var minaHobbyn = ["koda" , "spela" , "fotboll" , "träna" , "chilla"];

for (i=0; i<minaHobbyn.length; i++){
    console.log(minaHobbyn[i]);
    minLista.insertAdjacentHTML('beforeend', '<li>'+ minaHobbyn[i] +'</li>');
    
};