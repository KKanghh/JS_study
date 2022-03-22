const condition = true;

const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
.then((message) => {
    return new Promise((resolve, reject) => {
        reject(new Error('실패'));
    });
})
.then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
        resolve(message2);
    });
},
    (error) => {
    console.log('hello' + error);
    return new Promise((resolve, reject) => {
        reject('굿');
    });
})
.then(message3 => {
    console.log(message3);
})
.catch((error) => {
    console.error(error + '!');
})
.finally(() => {
    console.log('무조건');
});