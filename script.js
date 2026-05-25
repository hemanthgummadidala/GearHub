document.getElementById('sectionfrontpage').style.display = 'none';
document.getElementById('section1').style.display = 'block';
document.getElementById('sectionmusclecar1').style.display = 'none';
document.getElementById('sectionmusclecar2').style.display = 'none';
document.getElementById('sectionmusclecar3').style.display = 'none';
document.getElementById('sectionmusclecar4').style.display = 'none';
document.getElementById('sectionsportscar1').style.display = 'none';
document.getElementById('sectionsportscar2').style.display = 'none';
document.getElementById('sectionsportscar3').style.display = 'none';
document.getElementById('sectionsportscar4').style.display = 'none';
document.getElementById('sectionopenwheelcar1').style.display = 'none';
document.getElementById('sectionopenwheelcar2').style.display = 'none';
document.getElementById('sectionopenwheelcar3').style.display = 'none';
document.getElementById('sectionopenwheelcar4').style.display = 'none';
document.getElementById('sectioncoupecar1').style.display = 'none';
document.getElementById('sectioncoupecar2').style.display = 'none';
document.getElementById('sectioncoupecar3').style.display = 'none';
document.getElementById('sectioncoupecar4').style.display = 'none';
document.getElementById('signUP').style.display = 'none';
document.getElementById('signIn').style.display = 'none';
document.getElementById('booking-root').style.display = 'none';
document.getElementById('confirmation-screen').style.display = 'none';

// Track login state and which car page triggered booking
let isLoggedIn = false;
let pendingBooking = false;

// Track the current car being viewed for booking
let currentCarPrice = 0;
let currentCarName = '';

// Car data: price per day (INR) and display name
const carData = {
    'sectionmusclecar1': {
        price: 24999,
        name: 'Ford Mustang GT'
    },
    'sectionmusclecar2': {
        price: 32999,
        name: 'Dodge Charger Hellcat'
    },
    'sectionmusclecar3': {
        price: 41999,
        name: 'Dodge Challenger SRT Demon'
    },
    'sectionmusclecar4': {
        price: 28999,
        name: 'Chevrolet Camaro ZL1'
    },
    'sectionsportscar1': {
        price: 37499,
        name: 'BMW M5 CS'
    },
    'sectionsportscar2': {
        price: 399999,
        name: 'Bugatti Chiron Super Sport 300+'
    },
    'sectionsportscar3': {
        price: 57999,
        name: 'Porsche 911 Turbo S'
    },
    'sectionsportscar4': {
        price: 20999,
        name: 'Toyota Supra GR'
    },
    'sectionopenwheelcar1': {
        price: 199999,
        name: 'Ferrari F2004'
    },
    'sectionopenwheelcar2': {
        price: 329999,
        name: 'Red Bull RB19'
    },
    'sectionopenwheelcar3': {
        price: 289999,
        name: 'Mercedes W11'
    },
    'sectionopenwheelcar4': {
        price: 164999,
        name: 'Dallara IR-18'
    },
    'sectioncoupecar1': {
        price: 32999,
        name: 'BMW M4'
    },
    'sectioncoupecar2': {
        price: 28999,
        name: 'Audi RS5'
    },
    'sectioncoupecar3': {
        price: 37499,
        name: 'Mercedes-AMG C63 S'
    },
    'sectioncoupecar4': {
        price: 124999,
        name: 'Lamborghini Aventador SVJ'
    },
};







function sectionfrontpage() {
    document.getElementById('sectionfrontpage').style.display = 'block';
    document.getElementById('section1').style.display = 'none';
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function backtohome() {
    document.getElementById('sectionfrontpage').style.display = 'block';
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';


}

function sectionmusclecar1() {
    document.getElementById('sectionmusclecar1').style.display = 'block';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectionmusclecar2() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'block';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectionmusclecar3() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'block';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectionmusclecar4() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'block';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectionsportscar1() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'block';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectionsportscar2() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'block';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectionsportscar3() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'block';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectionsportscar4() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'block';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectionopenwheelcar1() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'block';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectionopenwheelcar2() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'block';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectionopenwheelcar3() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'block';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectionopenwheelcar4() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'block';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectioncoupecar1() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'block';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectioncoupecar2() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'block';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectioncoupecar3() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'block';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

function sectioncoupecar4() {
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'block';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'none';

}

// ── Create Account Elements ──
let CAfullnameEl = document.getElementById('CAfullname');
let CAemailEl = document.getElementById('CAemail');
let CApassEl = document.getElementById('CApassword');
let CAcpassEl = document.getElementById('CAconfirmpassword');
let CAcheckEl = document.getElementById('inputcb');
let CAFormEl = document.getElementById('CAform');
let existmailEl = document.getElementById('existmail');

// ── Validation Highlights ──
CAfullnameEl.addEventListener("blur", function() {
    CAfullnameEl.style.boxShadow = CAfullnameEl.value === "" ?
        '0px 0px 10px 3px red' : '0px 0px 0px 0px gray';
});

CAemailEl.addEventListener("blur", function() {
    CAemailEl.style.boxShadow = CAemailEl.value.includes('@') ?
        '0px 0px 0px 0px gray' : '0px 0px 10px 3px red';
});

CApassEl.addEventListener("blur", function() {
    CApassEl.style.boxShadow = CApassEl.value.length >= 6 ?
        '0px 0px 0px 0px gray' : '0px 0px 10px 3px red';
});

CAcpassEl.addEventListener("blur", function() {
    CAcpassEl.style.boxShadow = CApassEl.value === CAcpassEl.value ?
        '0px 0px 0px 0px gray' : '0px 0px 10px 3px red';
});

CAFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});

// ── Firebase: Create Account ──
function createAccount() {
    const name = CAfullnameEl.value.trim();
    const email = CAemailEl.value.trim();
    const pass = CApassEl.value;
    const cpass = CAcpassEl.value;

    if (!name || !email || !pass || !cpass) {
        existmailEl.textContent = '*Please fill in all fields';
        return;
    }
    if (pass !== cpass) {
        existmailEl.textContent = '*Passwords do not match';
        return;
    }
    if (pass.length < 6) {
        existmailEl.textContent = '*Password must be at least 6 characters';
        return;
    }

    existmailEl.textContent = '⏳ Creating account...';

    // Wait for Firebase to be ready (module loads async)
    const tryCreate = () => {
        if (!window._fbCreateUser) {
            setTimeout(tryCreate, 100);
            return;
        }
        window._fbCreateUser(email, pass)
            .then((userCredential) => {
                existmailEl.textContent = '';
                isLoggedIn = true;

                // Pre-fill sign-in email for convenience
                signinemailEl.value = email;
                signinpasswordEl.value = '';
                signinerrorEl.textContent = '';

                CAFormEl.reset();
                hideAllSections();
                // Go straight to booking if they came from a car page
                if (pendingBooking) {
                    setupBookingPage();
                    document.getElementById('booking-root').style.display = 'block';
                    document.getElementById('booking-screen').style.display = 'flex';
                    document.getElementById('confirmation-screen').style.display = 'none';
                } else {
                    document.getElementById('sectionfrontpage').style.display = 'block';
                }
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    existmailEl.textContent = '*Email already registered. Please sign in.';
                } else if (error.code === 'auth/invalid-email') {
                    existmailEl.textContent = '*Invalid email address.';
                } else {
                    existmailEl.textContent = '*Error: ' + error.message;
                }
            });
    };
    tryCreate();
}

function hideAllSections() {
    document.getElementById('section1').style.display = 'none';
    document.getElementById('sectionfrontpage').style.display = 'none';
    document.getElementById('sectionmusclecar1').style.display = 'none';
    document.getElementById('sectionmusclecar2').style.display = 'none';
    document.getElementById('sectionmusclecar3').style.display = 'none';
    document.getElementById('sectionmusclecar4').style.display = 'none';
    document.getElementById('sectionsportscar1').style.display = 'none';
    document.getElementById('sectionsportscar2').style.display = 'none';
    document.getElementById('sectionsportscar3').style.display = 'none';
    document.getElementById('sectionsportscar4').style.display = 'none';
    document.getElementById('sectionopenwheelcar1').style.display = 'none';
    document.getElementById('sectionopenwheelcar2').style.display = 'none';
    document.getElementById('sectionopenwheelcar3').style.display = 'none';
    document.getElementById('sectionopenwheelcar4').style.display = 'none';
    document.getElementById('sectioncoupecar1').style.display = 'none';
    document.getElementById('sectioncoupecar2').style.display = 'none';
    document.getElementById('sectioncoupecar3').style.display = 'none';
    document.getElementById('sectioncoupecar4').style.display = 'none';
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('signUP').style.display = 'none';
    document.getElementById('booking-root').style.display = 'none';
    document.getElementById('booking-history').style.display = 'none';
}

function bookaRide() {
    // Find currently visible car section and get its price
    for (const [sectionId, data] of Object.entries(carData)) {
        const el = document.getElementById(sectionId);
        if (el && el.style.display !== 'none') {
            currentCarPrice = data.price;
            currentCarName = data.name;
            break;
        }
    }

    hideAllSections();
    if (isLoggedIn) {
        // Already signed in — go straight to the booking page
        setupBookingPage();
        document.getElementById('booking-root').style.display = 'block';
        document.getElementById('booking-screen').style.display = 'flex';
        document.getElementById('confirmation-screen').style.display = 'none';
    } else {
        // Must sign in first; remember we want to go to booking after
        pendingBooking = true;
        document.getElementById('signIn').style.display = 'block';
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function setupBookingPage() {
    // Update car name in booking header
    const nameEl = document.getElementById('br-car-name');
    if (nameEl) nameEl.textContent = currentCarName || 'Selected Car';
    // Reset price preview
    document.getElementById('price-preview').style.display = 'none';
}

function formatPrice(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

function updatePricePreview() {
    const pickupDate = document.getElementById('br-pickup-date').value;
    const dropDate = document.getElementById('br-dropoff-date').value;
    const preview = document.getElementById('price-preview');
    if (!pickupDate || !dropDate || !currentCarPrice) {
        preview.style.display = 'none';
        return;
    }
    const days = Math.max(1, Math.round((new Date(dropDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24)));
    const total = days * currentCarPrice;
    document.getElementById('pp-car-name').textContent = currentCarName;
    document.getElementById('pp-rate-line').textContent = 'Rate: ' + formatPrice(currentCarPrice) + '/day';
    document.getElementById('pp-days-line').textContent = 'Days: ' + days;
    document.getElementById('pp-total-line').textContent = 'Total: ' + formatPrice(total);
    preview.style.display = 'block';
}

function goToSignUp() {
    hideAllSections();
    document.getElementById('signUP').style.display = 'block';
}

function oldAcclogin() {
    hideAllSections();
    document.getElementById('signIn').style.display = 'block';
}

// ── Sign In Elements ──
let signinemailEl = document.getElementById('signinemail');
let signinpasswordEl = document.getElementById('signinpassword');
let signinerrorEl = document.getElementById('signinError');
let signInformEl = document.getElementById('signInform');

signinemailEl.addEventListener("blur", function() {
    signinemailEl.style.boxShadow = signinemailEl.value.includes('@') ?
        '0px 0px 0px 0px gray' : '0px 0px 10px 3px red';
});

signinpasswordEl.addEventListener("blur", function() {
    signinpasswordEl.style.boxShadow = signinpasswordEl.value.length >= 6 ?
        '0px 0px 0px 0px gray' : '0px 0px 10px 3px red';
});

signInformEl.addEventListener("submit", function(event) {
    event.preventDefault();
});

// ── Firebase: Sign In ──
function signInBtn() {
    const email = signinemailEl.value.trim();
    const pass = signinpasswordEl.value;

    if (!email || !pass) {
        signinerrorEl.textContent = '*Please enter your email and password';
        return;
    }

    signinerrorEl.textContent = '⏳ Signing in...';

    const trySignIn = () => {
        if (!window._fbSignIn) {
            setTimeout(trySignIn, 100);
            return;
        }
        window._fbSignIn(email, pass)
            .then((userCredential) => {
                signinemailEl.style.boxShadow = '0px 0px 0px 0px gray';
                signinpasswordEl.style.boxShadow = '0px 0px 0px 0px gray';
                signinerrorEl.textContent = '';
                goToBooking();
            })
            .catch((error) => {
                signinemailEl.style.boxShadow = '0px 0px 10px 3px red';
                signinpasswordEl.style.boxShadow = '0px 0px 10px 3px red';
                if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                    signinerrorEl.textContent = '*Invalid email or password';
                } else {
                    signinerrorEl.textContent = '*Error: ' + error.message;
                }
            });
    };
    trySignIn();
}

// ── Firebase: Google Sign-In (works from both Sign In & Sign Up pages) ──
function googleSignIn() {
    // Show loading on whichever error element is visible
    const signUpErr = document.getElementById('googleSignUpError');
    const signInErr = document.getElementById('googleSignInError');
    if (signUpErr) signUpErr.textContent = '⏳ Opening Google sign-in...';
    if (signInErr) signInErr.textContent = '⏳ Opening Google sign-in...';

    const tryGoogle = () => {
        if (!window._fbGoogleSignIn) {
            setTimeout(tryGoogle, 100);
            return;
        }
        window._fbGoogleSignIn()
            .then((result) => {
                if (signUpErr) signUpErr.textContent = '';
                if (signInErr) signInErr.textContent = '';
                isLoggedIn = true;
                goToBooking();
            })
            .catch((error) => {
                const msg = error.code === 'auth/popup-closed-by-user' ?
                    '*Popup closed. Please try again.' :
                    '*Google sign-in failed: ' + error.message;
                if (signUpErr) signUpErr.textContent = msg;
                if (signInErr) signInErr.textContent = msg;
            });
    };
    tryGoogle();
}

function goToBooking() {
    isLoggedIn = true;
    pendingBooking = false;
    hideAllSections();
    setupBookingPage();
    document.getElementById('booking-root').style.display = 'block';
    document.getElementById('booking-screen').style.display = 'flex';
    document.getElementById('confirmation-screen').style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function handleBookingSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('br-full-name').value.trim();
    const email = document.getElementById('br-email').value.trim();
    const phone = document.getElementById('br-phone').value.trim();
    const location = document.getElementById('br-pickup-loc').value.trim();
    const pickupDate = document.getElementById('br-pickup-date').value;
    const dropDate = document.getElementById('br-dropoff-date').value;

    function fmtDate(d) {
        if (!d) return '—';
        const [y, m, day] = d.split('-');
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[+m - 1]} ${+day}, ${y}`;
    }


    const bid = 'VRS-' + Math.random().toString(36).toUpperCase().slice(2, 8);

    document.getElementById('br-booking-id').textContent = bid;
    document.getElementById('br-c-name').textContent = name || '—';
    document.getElementById('br-c-email').textContent = email || '—';
    document.getElementById('br-c-phone').textContent = phone || '—';
    document.getElementById('br-c-location').textContent = location || '—';
    document.getElementById('br-c-pickup-date').textContent = fmtDate(pickupDate);
    document.getElementById('br-c-dropoff-date').textContent = fmtDate(dropDate);

    // Pricing calculation
    let days = 1;
    if (pickupDate && dropDate) {
        days = Math.max(1, Math.round((new Date(dropDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24)));
    }
    const total = days * currentCarPrice;
    document.getElementById('br-c-rate').textContent = formatPrice(currentCarPrice) + '/day';
    document.getElementById('br-c-days').textContent = days + (days === 1 ? ' day' : ' days');
    document.getElementById('br-c-total').textContent = formatPrice(total);

    document.getElementById('booking-screen').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'block';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Save booking to Firestore
    const userEmail = (window._fbAuth && window._fbAuth.currentUser) ?
        window._fbAuth.currentUser.email :
        email;

    if (window._fbSaveBooking && userEmail) {
        window._fbSaveBooking(userEmail, {
            bookingId: bid,
            carName: currentCarName,
            fullName: name,
            email: email,
            phone: phone,
            location: location,
            pickupDate: fmtDate(pickupDate),
            dropoffDate: fmtDate(dropDate),
            ratePerDay: formatPrice(currentCarPrice),
            days: days,
            totalCost: formatPrice(total)
        }).catch(err => console.error('Booking save failed:', err));
    }
}

function brBookAnother() {
    document.getElementById('booking-form').reset();
    document.getElementById('confirmation-screen').style.display = 'none';
    document.getElementById('booking-screen').style.display = 'flex';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Live price preview on date change
document.addEventListener('DOMContentLoaded', function() {
    const pickupDateEl = document.getElementById('br-pickup-date');
    const dropDateEl = document.getElementById('br-dropoff-date');
    if (pickupDateEl) pickupDateEl.addEventListener('change', updatePricePreview);
    if (dropDateEl) dropDateEl.addEventListener('change', updatePricePreview);
});
// ── Forgot Password ──
function forgotPassword() {
    const email = signinemailEl.value.trim();

    if (!email) {
        signinerrorEl.style.color = 'red';
        signinerrorEl.textContent = '*Please enter your email address first.';
        signinemailEl.focus();
        return;
    }

    signinerrorEl.style.color = 'gray';
    signinerrorEl.textContent = '⏳Sending reset email...';

    const tryReset = () => {
        if (!window._fbResetPassword) {
            setTimeout(tryReset, 100);
            return;
        }
        window._fbResetPassword(email)
            .then(() => {
                signinerrorEl.style.color = 'green';
                signinerrorEl.textContent = '✅Password reset email sent to ' + email + '. Check your inbox!';
            })
            .catch((error) => {
                signinerrorEl.style.color = 'red';
                if (error.code === 'auth/user-not-found') {
                    signinerrorEl.textContent = '*No account found with this email.';
                } else if (error.code === 'auth/invalid-email') {
                    signinerrorEl.textContent = '*Invalid email address.';
                } else {
                    signinerrorEl.textContent = '*Error: ' + error.message;
                }
            });
    };
    tryReset();
}
// ── Booking History ──
function showBookingHistory() {
    const userEmail = (window._fbAuth && window._fbAuth.currentUser) ?
        window._fbAuth.currentUser.email :
        null;

    if (!userEmail) {
        alert('Please sign in to view your booking history.');
        return;
    }

    hideAllSections();
    document.getElementById('booking-history').style.display = 'block';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Hide all cards first
    for (let i = 1; i <= 5; i++) {
        document.getElementById('history-card-' + i).style.display = 'none';
    }
    document.getElementById('no-bookings-msg').style.display = 'none';
    document.getElementById('booking-count').textContent = 'Loading...';

    const tryLoad = () => {
        if (!window._fbGetBookings) {
            setTimeout(tryLoad, 100);
            return;
        }
        window._fbGetBookings(userEmail)
            .then((bookings) => {
                const count = bookings.length;
                document.getElementById('booking-count').textContent =
                    count + ' Ride' + (count !== 1 ? 's' : '') + ' Booked';

                if (count === 0) {
                    document.getElementById('no-bookings-msg').style.display = 'block';
                    return;
                }

                // Sort by most recent
                bookings.sort((a, b) => new Date(b.bookedOn) - new Date(a.bookedOn));

                // Fill up to 5 cards
                const limit = Math.min(count, 5);
                for (let i = 0; i < limit; i++) {
                    const b = bookings[i];
                    const n = i + 1;
                    const bookedDate = b.bookedOn ?
                        new Date(b.bookedOn).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                        }) :
                        '—';

                    document.getElementById('hc' + n + '-carname').textContent = b.carName || '—';
                    document.getElementById('hc' + n + '-bid').textContent = b.bookingId || '—';
                    document.getElementById('hc' + n + '-pickup').textContent = b.pickupDate || '—';
                    document.getElementById('hc' + n + '-dropoff').textContent = b.dropoffDate || '—';
                    document.getElementById('hc' + n + '-location').textContent = b.location || '—';
                    document.getElementById('hc' + n + '-days').textContent = b.days || '—';
                    document.getElementById('hc' + n + '-rate').textContent = b.ratePerDay || '—';
                    document.getElementById('hc' + n + '-total').textContent = b.totalCost || '—';
                    document.getElementById('hc' + n + '-date').textContent = bookedDate;
                    document.getElementById('history-card-' + n).style.display = 'block';
                }
            })
            .catch(err => {
                document.getElementById('booking-count').textContent = 'Error';
                document.getElementById('no-bookings-msg').style.display = 'block';
                document.getElementById('no-bookings-msg').textContent = 'Failed to load bookings. Please try again.';
                console.error(err);
            });
    };
    tryLoad();
}

// ── Navbar Account Dropdown ──
function toggleAccountDropdown() {
    const dropdown = document.getElementById('nav-account-dropdown');
    dropdown.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.nav-account-wrapper');
    if (wrapper && !wrapper.contains(e.target)) {
        document.getElementById('nav-account-dropdown').classList.remove('open');
    }
});

function updateNavAccount() {
    const user = window._fbAuth && window._fbAuth.currentUser;
    const emailEl = document.getElementById('nav-account-email');
    const labelEl = document.getElementById('nav-account-label');
    const logoutBtn = document.getElementById('nav-logout-btn');
    const loginBtn = document.getElementById('nav-login-btn');
    const historyItem = document.getElementById('nav-history-item');

    if (user) {
        labelEl.textContent = 'My Account';
        emailEl.textContent = user.email;
        emailEl.style.display = 'block';
        logoutBtn.style.display = 'block';
        loginBtn.style.display = 'none';
        historyItem.style.display = 'block';
    } else {
        labelEl.textContent = 'Login';
        emailEl.style.display = 'none';
        logoutBtn.style.display = 'none';
        loginBtn.style.display = 'block';
        historyItem.style.display = 'none';
    }
}

function navLogout() {
    if (window._fbAuth) {
        window._fbAuth.signOut().then(() => {
            isLoggedIn = false;
            document.getElementById('nav-account-dropdown').classList.remove('open');
            updateNavAccount();
            backtohome();
        });
    }
}

function closeDropdownAndShowHistory() {
    document.getElementById('nav-account-dropdown').classList.remove('open');
    showBookingHistory();
}

// Update nav on auth state change
const navAuthCheck = () => {
    if (!window._fbOnAuthStateChanged) {
        setTimeout(navAuthCheck, 100);
        return;
    }
    window._fbOnAuthStateChanged((user) => {
        updateNavAccount();
    });
};
navAuthCheck();