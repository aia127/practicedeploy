document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('chat-open').addEventListener('click', function() {
    document.getElementById('chatwindow').style.display = 'flex';
    this.style.display = 'none';
});

document.getElementById('chat-close').addEventListener('click', function() {
    document.getElementById('chatwindow').style.display = 'none';
    document.getElementById('chat-open').style.display = 'block';
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        appendMessage(userInput, 'user-message');
        document.getElementById('user-input').value = '';

        setTimeout(() => {
            appendMessage('I am a virtual chatbot, created by an AI student.', 'bot-message');
        }, 1000);
    }
}

function appendMessage(text, className) {
    const chatwindowBody = document.getElementById('chatwindow-body');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.innerHTML = `
        <div class="icon">👤</div>
        <div class="text">${text}</div>
    `;
    chatwindowBody.appendChild(messageElement);
    chatwindowBody.scrollTop = chatwindowBody.scrollHeight;
}
