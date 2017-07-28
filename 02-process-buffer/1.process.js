// process is an event emitter

process.on('exit', (code) => {
  // do one final synchronous operation
  // before the node process terminates
});
