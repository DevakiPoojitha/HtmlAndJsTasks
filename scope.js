
// Block scope

// let and const keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block

// Global Scope:
// Variables declared Globally have Global Scope.

// Global variables can be accessed from anywhere in a JavaScript program.

// Variables declared with var, let and const are quite similar when declared outside a block.


// global variable
let a = 'Hey';

function task() {

    // local variable
    let b = 'Ivy';

    console.log(a + ' ' + b);

    if (b == 'Ivy') {

        // block-scoped variable
        let c = 'hello';

        console.log(a + ' ' + b + ' ' + c);
    }

    // variable c cannot be accessed here
    console.log(a + ' ' + b + ' ' + c);
}

task();