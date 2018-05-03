const fs = require('fs');

function fileSize (fileName, cb) {
  if (typeof fileName !== 'string') {
    process.nextTick(cb, new TypeError('argument should be string'));
    return;
  }

  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err);
    }

    cb(null, stats.size);
  });
}

// fileSize(__filename, (err, size) => {
fileSize(1, (err, size) => { // triggers an error
  if (err) throw err;

  console.log(`Size in KB: ${size/1024}`);
});

console.log('Hello!');
