  fetch("https://mango-ocean-0c0ec081e.6.azurestaticapps.net/submit-feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(feedbackData)
  })
  .then(response => response.json())
  .then(data => alert("Thank you, ${name}, for your feedback! We'll review ASAP!"))
  .catch(error => console.error("Error:", error));