async function fetchData() {
    const data = await new Promise((resolve) => {
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
export {};
