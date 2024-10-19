document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = document.getElementById('userInput').value;

    // Fetch registered users and populate the receiver dropdown
    fetch('/Home/GetUsers')
        .then(response => response.json())
        .then(users => {
            const receiverDropdown = document.getElementById('receiverDropdown');
            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.userName;
                option.text = user.userName;
                receiverDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching users:', error));

    const connection = new signalR.HubConnectionBuilder()
        .withUrl("/chatHub")
        .build();

    connection.on("ReceiveMessage", (sender, message) => {
        const li = document.createElement("li");
        li.textContent = `${sender}: ${message}`;
        document.getElementById("messagesList").appendChild(li);
    });

    connection.start().catch(err => console.error(err.toString()));

    document.getElementById("sendButton").addEventListener("click", () => {
        const receiver = document.getElementById("receiverDropdown").value;
        const message = document.getElementById("messageInput").value;
        if (receiver) {
            connection.invoke("SendMessage", receiver, message).catch(err => console.error(err.toString()));
        } else {
            alert('Please select a recipient');
        }
    });
});
