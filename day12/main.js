// @flow

import * as fs from 'fs';
import denodeify from 'denodeify';

let readdir = denodeify(fs.readdir);
let stat = denodeify(fs.stat);
function readDirectory(path: string) {
  let promise = new Promise((resolve, reject) => {
    readdir(path, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
  return promise;
}

readDirectory('./src').then((fileList) => {
  let promiseList = fileList.map((fileName) => {
    return stat('./src/' + fileName).then((result) => {
      return {name: fileName, ...result};
    });
  });
  Promise.all(promiseList).then((files) => {
    for (let {size, name} of files) {
      console.log(size, name, '<<');
    }
  });
});

fetchGithubData('willywilliam8');

function fetchGithubData(user: string) {
  fetch(`https://api.github.com/users/${user}`)
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      let userType = data.type;
      console.log(userType);
    });
}
