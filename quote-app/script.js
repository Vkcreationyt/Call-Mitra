document.getElementById('getQuoteButton').addEventListener('click', function() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => {
            document.getElementById('quote').textContent = 'Error fetching quote';
            console.error('Error fetching quote:', error);
        });
});
