// // Define the API endpoint URL
// const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';

// // Basic Auth credentials
// const username = 'coalition';
// const password = 'skills-test';

// // Convert credentials to Base64 format
// const base64Credentials = btoa(`${username}:${password}`);

// // Define the headers for the request
// const headers = {
//   'Authorization': `Basic ${base64Credentials}`,
//   'Content-Type': 'application/json',  // You may need to adjust depending on the API response type
// };


// async function fetchJessicaTaylorInfo() {
//   try {
//     const response = await fetch(apiUrl, {
//       method: 'GET', 
//       headers: headers,
//     });

//     // Check if the response is ok (status 200-299)
//     if (!response.ok) {
//       throw new Error(`HTTP Error! Status: ${response.status}`);
//     }

//     // Parse the response as JSON (adjust based on API response type)
//     const data = await response.json();
    
//     // Log the data (you can process it further as needed)
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// // Call the function to fetch the data
// fetchJessicaTaylorInfo();
