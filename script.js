function newQuote() {
  fetch('https://labs.bible.org/api/?passage=random&type=json')
    .then(response => response.json())
    .then(data => {
      const verse = data[0];
      document.getElementById('quote').textContent = `"${verse.text}" — ${verse.bookname} ${verse.chapter}:${verse.verse}`;
    })
    .catch(error => {
      document.getElementById('quote').textContent = 'Oops! Could not fetch a Bible verse.';
      console.error('Error fetching verse:', error);
    });
}

document.addEventListener('DOMContentLoaded', newQuote);
