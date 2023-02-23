$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// State Variables
let fungusHP = 100;
let attackPower = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    // Attack Objects
    let arcaneSceptre = {
        apCost: 12,
        hpDamage: 14
    }

    let entangle = {
        apCost: 23,
        hpDamage: 9
    }

    let dragonBlade = {
        apCost: 38,
        hpDamage: 47
    }

    let starFire = {
        apCost: 33,
        hpDamage: 25
    }

    
    // Arcane Sceptre
    // AP: 12
    // HP Damage: 14
    

    // Entangle
    // AP: 23
    // HP Damage: 9

    // Dragon Blade
    // AP: 38
    // HP Damage: 47

    // Star Fire
    // AP: 33
    // HP Damage: 25
}
