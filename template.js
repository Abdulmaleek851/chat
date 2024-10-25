function sendMessage() {
    const inputField = document.getElementById('userInput');
    const userMessage = inputField.value.trim();

    if (userMessage === '') return;

    // Display user message
    const userMessageContainer = document.createElement('div');
    userMessageContainer.classList.add('message', 'user');
    const userMessageContent = document.createElement('p');
    userMessageContent.textContent = userMessage;
    userMessageContainer.appendChild(userMessageContent);
    document.getElementById('chatMessages').appendChild(userMessageContainer);

    // Clear input field
    inputField.value = '';

    // Scroll to the bottom
    document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;

    // Simulate bot response
    setTimeout(() => {
        generateBotResponse(userMessage);
    }, 1000);
}

function generateBotResponse(userMessage) {
    const botMessageContainer = document.createElement('div');
    botMessageContainer.classList.add('message', 'bot');
    const botMessageContent = document.createElement('p');

    // Basic bot response logic
    if (userMessage.toLowerCase().includes('hello')) {
        botMessageContent.textContent = 'Hi there! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('help')) {
        botMessageContent.textContent = 'Sure, I can help you. What do you need assistance with?';
    } else if (userMessage.toLowerCase().includes('bye')) {
        botMessageContent.textContent = 'Goodbye! Have a great day!';
    } else {
        botMessageContent.textContent = 'I am not sure how to respond to that. Could you please rephrase?';
    }

    botMessageContainer.appendChild(botMessageContent);
    document.getElementById('chatMessages').appendChild(botMessageContainer);

    // Scroll to the bottom
    document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
}
