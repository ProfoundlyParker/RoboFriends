//Handles API call
export const apiCall = (link) => 
  fetch(link)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(`API request failed: ${error}`);
    });
