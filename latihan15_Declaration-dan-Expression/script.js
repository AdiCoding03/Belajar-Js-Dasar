// rumus function declaration
// function identifier (parameters(opt)) { function body }

// rumus function expression
// function identifier(opt) (parameters(opt)) { function body }

// function declaration
function message_dec(name) {
  console.log(`halo ${name}`);
}
message_dec("dimas");

// function expression
var message_exp = function (name) {
  console.log(`halo ${name}`);
}
message_exp("adi");

// Perbedaannya

// function declaration
// - lebih fleksibel (dapat ditulis dimanapun)
  // - karna di javascript ada konsep Hoisting
// - karna function declaration lebih mudah dipahami

// function expression
// - harus dideclarasikan terlebih dahulu
// - Lebih powerfull
  // - sebagai closure
  // - sebagai argumen untuk function lain
  // - IIFE (Immediately Invoked Function Expression)