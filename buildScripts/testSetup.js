// This file isn't transpiled, so must CommonJS and ES5

// Register babel to transpile before our tests run.
require('@babel/register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['css'] = function () {};   // Treat any CSS (included in index.js) as an empty function
