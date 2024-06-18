async function fetchData(): Promise<string> {
  const data = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });

  return data;
}

fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
