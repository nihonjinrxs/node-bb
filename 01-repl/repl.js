#!/usr/bin/env node

const repl = require('repl');

const r = repl.start({
  prompt: `[${process.pid}]:> `
});

r.context.lodash = require('lodash');
