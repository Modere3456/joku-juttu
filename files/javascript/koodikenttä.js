const writingArea = document.getElementById('writingArea');
const logs = document.getElementById('logs');
const sendButton = document.getElementById('sendButton');

// Load previous logs from localStorage
const previousLogs = JSON.parse(localStorage.getItem('logs')) || [];
previousLogs.forEach(log => {
    const li = document.createElement('li');
    li.textContent = log;
    logs.appendChild(li);
});

// Function to save logs
const saveLog = (text) => {
    if (text.trim() === '') return; // Don't save empty logs

    const previousLogs = JSON.parse(localStorage.getItem('logs')) || [];
    previousLogs.push(text);
    localStorage.setItem('logs', JSON.stringify(previousLogs));

    // Add the new log to the list
    const li = document.createElement('li');
    li.textContent = text;
    logs.appendChild(li);

    // Clear the textarea after saving
    writingArea.value = '';
};

// Save logs when the "Send" button is clicked
sendButton.addEventListener('click', () => {
    saveLog(writingArea.value.trim());
});

// Save logs when the Enter key is pressed
writingArea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent newline in textarea
        saveLog(writingArea.value.trim());
    }
});