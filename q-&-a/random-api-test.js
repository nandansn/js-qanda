// Developing and testing your web or mobile app can be hard without any data to work with. This is why Random Data API exists. Use any of our API endpoints and fetch data that will allow you faster development and testing cycle. All responses come with ID (integer) and UID (string).

// For example, you can combine our users, stripe and subscription resources to develop and test your membership feature.

// URL: https://random-data-api.com/documentation

fetch(" https://random-data-api.com/api/v2/users?size=100&is_xml=true")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));
