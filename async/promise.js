const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = true; // Simulate success/failure

    setTimeout(() => {
      if (success) {
        resolve("✅ Data fetched successfully!");
      } else {
        reject("❌ Failed to fetch data.");
      }
    }, 2000);
  });
};

// Using the promise
// fetchData()
//   .then((result) => {
//     console.log(result); // ✅ Data fetched successfully!
//   })
//   .catch((error) => {
//     console.error(error); // ❌ Failed to fetch data.
//   });
// console.log(fetchData());
const fetchDataAsync = async () => {
  try {
    const result = await fetchData();
    console.log(result); // ✅ Data fetched successfully!
  } catch (error) {
    console.error(error); // ❌ Failed to fetch data.
  }
};
fetchDataAsync();
