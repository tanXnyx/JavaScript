// Taking Function as a parameter
function MultipleIntro(Intro,n) {
    for (let i = 0; i < n; i++) {
        Intro();
    }    
}

function Intro() {
    console.log("Hellotan");
}

console.log("High Order Function");
MultipleIntro(Intro,5);

console.log("Calling Intro() function:");
Intro();

// Having a function as a return value

function Intro1() {
    return function () {
        console.log("Hello tan");
    }
}

console.log("Function as a return value");
Intro1();