// Array to store reminders
let reminders = [];

// Function to set reminder
function setReminder() {
    const reminderText = document.getElementById('reminder-text').value.trim();
    const reminderDate = document.getElementById('reminder-date').value;
    const reminderTime = document.getElementById('reminder-time').value.trim();

    if (reminderText === '' || reminderDate === '' || reminderTime === '') {
        alert('Please enter reminder text, date, and time.');
        return;
    }

    const reminderDateTime = new Date(`${reminderDate}T${reminderTime}`);

    const currentTime = new Date().getTime();

    if (reminderDateTime <= currentTime) {
        alert('Please select a future date and time for the reminder.');
        return;
    }

    const reminder = {
        text: reminderText,
        date: reminderDate,
        time: reminderTime
    };

    reminders.push(reminder);

    renderReminders();

    document.getElementById('reminder-form').reset();
}

// Function to render reminders
function renderReminders() {
    const remindersList = document.getElementById('reminders');
    remindersList.innerHTML = '';
    reminders.forEach((reminder, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = `${reminder.text} - ${reminder.date} ${reminder.time}`;
        remindersList.appendChild(listItem);
    });
}
