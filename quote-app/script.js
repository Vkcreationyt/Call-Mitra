document.addEventListener('DOMContentLoaded', function() {
    const quoteTextElem = document.getElementById('quoteText');
    const quoteAuthorElem = document.getElementById('quoteAuthor');

    function fetchQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                quoteTextElem.textContent = `"${data.content}"`;
                quoteAuthorElem.textContent = `- ${data.author}`;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteTextElem.textContent = 'Failed to fetch quote';
                quoteAuthorElem.textContent = '';
            });
    }

    document.getElementById('getQuoteButton').addEventListener('click', fetchQuote);

    document.getElementById('shareButton').addEventListener('click', function() {
        const quoteText = `${quoteTextElem.textContent} ${quoteAuthorElem.textContent}`;
        if (navigator.share) {
            navigator.share({
                title: 'Quote of the Day',
                text: quoteText
            })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Share failed', error));
        } else {
            alert(`Share this quote: ${quoteText}`);
        }
    });

    // Initial fetch of a quote when the widget loads
    fetchQuote();
});
