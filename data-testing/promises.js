const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 5000);
  });
};

// add(5, 8)
//   .then((sum) => {
//     console.log(sum);
//     return add(sum, 7);
//   })
//   .then((sum2) => {
//     console.log(sum2);
//   });

const addNumbers = async () => {
  const sum = await add(5, 8);
  const sum2 = await add(sum, 7);
  return sum2;
};

addNumbers().then((result) => {
  console.log(result);
});
