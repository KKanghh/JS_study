let i = 1;
setInterval((q) => {
    if (i === 5) {
        console.log('종료!');
        process.exit();
    }
    console.log(i);
    i += 1;
}, 1000);