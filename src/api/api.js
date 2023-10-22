//Handles API call
export const apiCall = (link) => 
  fetch(link)
  .then(response => response.json())
