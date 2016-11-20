"use strict";
const
    root = process.env.PWD,
    path = require('path'),
    fs = require('fs');

let aSprueche, sSpruch, countSprueche;

const 
getSprueche = function(){
    let file = fs.readFileSync(path.join(root,'sprueche.json'), {encoding:'utf-8'});
    try{
        aSprueche = JSON.parse(file);
    } catch (e){
        console.log(e);
        aSprueche = ['Alles ist im Rauch verborgen.'];
    }
    countSprueche = aSprueche.length;
},
getRandomSpruch = function(){
    let randOfArray = Math.round(Math.random()*(countSprueche));
    return aSprueche[randOfArray];
};

getSprueche();
console.log("### Das Orakel von IORIA sagt: \n");
console.log(getRandomSpruch());