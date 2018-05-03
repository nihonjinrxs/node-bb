console.log(module);

require('find-me');

/*
1. resolve string to path
  - file at that path
  - index.js in folder at that path
  - file of that name in node_modules under the current directory
  - index.js in folder of that name in node_modules under the current directory
2. load the file
3. wrap in iife
  require('module').wrapper // to see the function
  // ends up looking like:
  (function( exports, require, module, __filename, __dirname ) {
    // your code goes here
    return module.exports;
  });
4. evaluate the code loaded from the file
5. cache the module
*/