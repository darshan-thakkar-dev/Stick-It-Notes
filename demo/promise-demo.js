// promise

/*
 To achieve asynchronous kind of things we can use promise

 Asynchronous :- if I am sending a aaabbcc d, Here I don't need to take care about middle
 part I just need initial point a and receiving point d

 To give your code asynchronous ability you can use promise
*/

let promiseCertificate = () => {
    return new Promise((resolve, failure) => {
        let certified = true;
        if (certified) {
            resolve('Certified');
        } else {
            failure('Failed');
        }
    })
};


let promiseJob = () => {
    return new Promise((resolve, failure) => {
        let jobCertified = true;
        if (jobCertified) {
            resolve('Job Certified');
        } else {
            failure('Failed');
        }
    })
};

/*

promiseCertificate.then((success) => {
    console.log(success);
    return promiseJob;
})
    .catch((reject) => {
        console.log(reject);
    })
    .then((success) => {
        console.log(success);
    })
    .catch((reject) => {
        console.log(reject);
    });

*/

// it works like && in if condition all must to succeed
/*
Promise.all([promiseCertificate(), promiseJob()])
    .then((result) => {
        console.log(result);
    }).catch((failure) => {
    console.log(failure);
});
*/

// it works like || in if condition all must to succeed
Promise.race([promiseCertificate(), promiseJob()])
    .then((result) => {
        console.log(result);
    }).catch((result) => {
    console.log(result);
});


console.log("Rest code");

