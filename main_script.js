// Logout
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isGuest');
    window.location.href = "login.html";
});

// Display User Name
const userNameDisplay = document.getElementById('userNameDisplay');
const isGuest = localStorage.getItem('isGuest') === 'true';
userNameDisplay.textContent = isGuest ? "Guest" : "Student User";

// Disable Appointment Booking for Guests
if(isGuest){
    const bookingSection = document.getElementById('booking-section');
    bookingSection.style.display = 'none';
}

// ==================== AI-guided Chat ====================
const sendBtn = document.getElementById('sendBtn');
const userMessage = document.getElementById('userMessage');
const chatMessages = document.getElementById('chatMessages');

const responses = {
    "hello": "Hello! How are you feeling today?",
    "anxious": "Try deep breaths and meditation. You can also book a counsellor if needed.",
    "sad": "Listening to calming music or journaling may help.",
    "stress": "Break tasks into smaller steps and take short breaks.",
    "default": "Thank you for sharing. You can also explore resources or book an appointment if needed."
};

sendBtn.addEventListener('click', () => {
    const msg = userMessage.value.trim();
    if(msg === "") return;

    const userDiv = document.createElement('div');
    userDiv.textContent = msg;
    userDiv.classList.add('user');
    chatMessages.appendChild(userDiv);

    let botReply = responses.default;
    Object.keys(responses).forEach(key => {
        if(msg.toLowerCase().includes(key)) botReply = responses[key];
    });

    const botDiv = document.createElement('div');
    botDiv.textContent = botReply;
    botDiv.classList.add('bot');
    chatMessages.appendChild(botDiv);

    userMessage.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

// ==================== Appointment Booking ====================
const bookingForm = document.getElementById('bookingForm');
const bookingMessage = document.getElementById('bookingMessage');
if(bookingForm){
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        bookingMessage.textContent = "Appointment booked successfully!";
        bookingForm.reset();
    });
}

// ==================== Peer Support Forum ====================
const forumForm = document.getElementById('forumForm');
const forumMessages = document.getElementById('forumMessages');
forumForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('forumName').value || (isGuest ? "Guest" : "Anonymous");
    const msg = document.getElementById('forumMessage').value;
    const li = document.createElement('li');
    li.textContent = `${name}: ${msg}`;
    forumMessages.appendChild(li);
    forumForm.reset();
});

