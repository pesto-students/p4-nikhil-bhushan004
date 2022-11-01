//execution using Async Await
async function completeTaskAsyncAwait() {

  let doTask1 = new Promise(function(resolve, reject) {

    setTimeout(() => {
      console.log("task 1 started");
      resolve(true);
    }, 5000);

  });


  let doTask2 = new Promise(function(resolve, reject) {

    setTimeout(() => {
      console.log("task 2 started");
      reject(new Error("error while completing task 2"))
    }, 2000);

  });

  let doTask3 = new Promise(function(resolve, reject) {

    setTimeout(() => {
      console.log("task 3 started");
      resolve(true);
    }, 1000);

  });


  let task1 = await doTask1.then((result) => {
    console.log("task 1 complete");
  }).catch((error) => {
    console.log(error);
    console.log("task 1 not complete");
  });

  let task2 = await doTask2.then((result) => {
    console.log("task 2 complete");
  }).catch((error) => {
    console.log(error);
    console.log("task 2 not complete");
  });

  let task3 = await doTask3.then((result) => {
    console.log("task 3 complete");
  }).catch((error) => {
    console.log(error);
    console.log("task 3 not complete");
  });

}

completeTaskAsyncAwait();


//execution using generators

async function* completeTaskGenerator() {

  let doTask1 = new Promise(function(resolve, reject) {

    setTimeout(() => {
      console.log("task 1 started");
      resolve(true);
    }, 5000);

  });


  let doTask2 = new Promise(function(resolve, reject) {

    setTimeout(() => {
      console.log("task 2 started");
      reject(new Error("error while completing task 2"))
    }, 2000);

  });

  let doTask3 = new Promise(function(resolve, reject) {

    setTimeout(() => {
      console.log("task 3 started");
      resolve(true);
    }, 1000);

  });


  let task1 = yield await doTask1.then((result) => {
    console.log("task 1 complete");
  }).catch((error) => {
    console.log(error);
    console.log("task 1 not complete");
  });

  let task2 = yield await doTask2.then((result) => {
    console.log("task 2 complete");
  }).catch((error) => {
    console.log(error);
    console.log("task 2 not complete");
  });

  let task3 = yield await doTask3.then((result) => {
    console.log("task 3 complete");
  }).catch((error) => {
    console.log(error);
    console.log("task 3 not complete");
  });

}

const gen = completeTaskGenerator();

gen.next();
gen.next();
gen.next();