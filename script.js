$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// State Variables
let fungusHP = 100;
let attackPower = 100;

// Attack Objects
const arcaneSceptre = {
    apCost: 12,
    hpDamage: 14
}

const entangle = {
    apCost: 23,
    hpDamage: 9
}

const dragonBlade = {
    apCost: 38,
    hpDamage: 47
}

const starFire = {
    apCost: 33,
    hpDamage: 25
}

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    //Targets the parent of the attack icons
    $( '.attacks' ).on('click', '.arcane-sceptre', arcaneSceptreGo)
    $( '.attacks' ).on('click', '.entangle', entangleGo)
    $( '.attacks' ).on('click', '.dragon-blade', dragonBladeGo)
    $( '.attacks' ).on('click', '.star-fire', starFireGo)

}

function arcaneSceptreGo() {
    console.log( 'arcaneSceptreGo is running' );
    attackPower -= arcaneSceptre.apCost;
    fungusHP -= arcaneSceptre.hpDamage;
    console.log( attackPower );
    console.log( fungusHP );
}

function entangleGo() {
    console.log( 'entangleGo is running' );
    attackPower -= entangle.apCost;
    fungusHP -= entangle.hpDamage;
    console.log( attackPower );
    console.log( fungusHP );
}

function dragonBladeGo() {
    console.log( 'dragonBladeGo is running' );
    attackPower -= dragonBlade.apCost;
    fungusHP -= dragonBlade.hpDamage;
    console.log( attackPower );
    console.log( fungusHP );
}

function starFireGo() {
    console.log( 'starFireGo is running' );
    attackPower -= starFire.apCost;
    fungusHP -= starFire.hpDamage;
    console.log( attackPower );
    console.log( fungusHP );
}