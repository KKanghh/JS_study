#!/usr/bin/env node
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// const names = process.argv.slice(2)
// console.log(process.argv.slice(2));
// const ext = names[0];
// const name = names[1];
// const dir = names[2].split('/');
// let dirName = '';

// console.log(dir);
// for (let i = 1; i < dir.length; i++) {
//     dirName = path.join(dirName, dir[i]);
//     try{
//         fs.readdirSync(dirName);
//     } catch (error) {
//         fs.mkdirSync(dirName);
//     }
    
// }
// dirName = path.join(dirName, name + '.' + ext);
// console.log(dirName);
// fs.writeFileSync(dirName, '');
console.clear();
 
const answerCallback = (answer) => {
    if (answer === 'y') {
        console.log('감사합니다!');
        rl.close();
    } else if (answer === 'n') {
        console.log('죄송합니다!');
        rl.close();
    } else {
        console.clear();
        console.log('y 또는 n 만 입력하세요.');
        rl.question('예제가 재미있습니까? (y/n) ', answerCallback)
    }
};

rl.question('예제가 재미있습니까? (y/n) ', answerCallback);
