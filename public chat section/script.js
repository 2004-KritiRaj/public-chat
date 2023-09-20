const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const userList = document.getElementById('user-list');

sendButton.addEventListener('click', () => {
    sendMessage();
});

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
        displayMessage('You: ' + message);
        messageInput.value = '';
    }
}


function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; 
}


function simulateLoggedInUsers() {
    const users = ['User1', 'User2', 'User3', 'User4', 'User5'];

    users.forEach((user) => {
        const userElement = document.createElement('li');
        userElement.textContent = user;
        userElement.addEventListener('click', () => {
            console.log(`Clicked on user: ${user}`);
        });
        userList.appendChild(userElement);
    });
}

simulateLoggedInUsers();
