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
    
    // Checking to see how to grab value attribute from progress element
    // let apBar = $( '#ap-meter' ).val();
    // let hpBar = $( '#hp-meter' ).val();
    // console.log( apBar );
    // console.log( hpBar );
}

function arcaneSceptreGo() {
    console.log( 'arcaneSceptreGo is running' );
    if(attackPower - arcaneSceptre.apCost > 0) {
        attackPower -= arcaneSceptre.apCost;
    } else if(attackPower - arcaneSceptre.apCost < 0) {
        attackPower = 0;
    }
    if(fungusHP - arcaneSceptre.hpDamage > 0) {
    fungusHP -= arcaneSceptre.hpDamage;
    } else if(fungusHP - arcaneSceptre.hpDamage < 0) {
        fungusHP = 0;
    }
    console.log( attackPower );
    console.log( fungusHP );
    adjustTextAndBars();
}

function entangleGo() {
    console.log( 'entangleGo is running' );
    if(attackPower - entangle.apCost > 0) {
        attackPower -= entangle.apCost;
    } else if( attackPower - entangle.apCost < 0 ){
        attackPower = 0;
    }
    if(fungusHP - entangle.hpDamage > 0) {
    fungusHP -= entangle.hpDamage;
    } else if(fungusHP - entangle.hpDamage < 0) {
        fungusHP = 0;
    }
    console.log( attackPower );
    console.log( fungusHP );
    adjustTextAndBars();
}

function dragonBladeGo() {
    console.log( 'dragonBladeGo is running' );
    if(attackPower - dragonBlade.apCost > 0) {
        attackPower -= dragonBlade.apCost;
    } else if( attackPower - dragonBlade.apCost < 0 ) {
        attackPower = 0;
    }
    if(fungusHP - dragonBlade.hpDamage > 0) {
        fungusHP -= dragonBlade.hpDamage;
    } else if (fungusHP - dragonBlade.hpDamage < 0) {
        fungusHP = 0;
    }
    console.log( attackPower );
    console.log( fungusHP );
    adjustTextAndBars();
}

function starFireGo() {
    console.log( 'starFireGo is running' );
    if(attackPower - starFire.apCost > 0) {
        attackPower -= starFire.apCost;
    } else if ( attackPower - starFire.apCost < 0) {
        attackPower = 0;
    }
    if(fungusHP - starFire.hpDamage > 0) {
        fungusHP -= starFire.hpDamage;
    } else if ( attackPower - starFire.hpDamage < 0) {
        fungusHP = 0;
    }
    console.log( attackPower );
    console.log( fungusHP );
    adjustTextAndBars();
}

function adjustTextAndBars() {
    console.log( 'adjustBars running' );
    $( '.hp-text' ).text(`${fungusHP} HP`);
    $( '.ap-text' ).text(`${attackPower} AP`);
    $( '#hp-meter' ).val(fungusHP);
    $( '#ap-meter' ).val(attackPower);
}