// Array of quote objects
let quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspirational" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivational" },
    // Add more initial quotes if desired
];

// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.innerHTML = `<p>${randomQuote.text}</p><p><em>${randomQuote.category}</em></p>`;
}

// Function to add a new quote
function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText && newQuoteCategory) {
        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        alert("New quote added!");
    } else {
        alert("Please enter both quote text and category.");
    }

    // Clear the input fields
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
}

// Function to create and add the quote form dynamically
function createAddQuoteForm() {
    const formContainer = document.createElement('div');

    const quoteInput = document.createElement('input');
    quoteInput.id = 'newQuoteText';
    quoteInput.type = 'text';
    quoteInput.placeholder = 'Enter a new quote';
    formContainer.appendChild(quoteInput);

    const categoryInput = document.createElement('input');
    categoryInput.id = 'newQuoteCategory';
    categoryInput.type = 'text';
    categoryInput.placeholder = 'Enter quote category';
    formContainer.appendChild(categoryInput);

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Quote';
    addButton.onclick = addQuote;
    formContainer.appendChild(addButton);

    document.body.appendChild(formContainer);
}

// Event listener for showing a new random quote
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Call createAddQuoteForm to dynamically create the form
createAddQuoteForm();

// Initial quote display
showRandomQuote();
