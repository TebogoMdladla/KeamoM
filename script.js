function showMessage() {
    const messages = [
        "Hi Baby ",
        "Hope you're having a great day, because you deserve it! 😊",
        "You're an amazing person. Stay blessed and keep being you. 🌟",
        "P.S text me back bathong! "
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerText = randomMessage;
}
