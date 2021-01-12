const socket = io();


let name;

// do..while untill user give a name
do{
    name = prompt('Enter your name');
}while(!name);

// grabing the text to textarea 
let textarea = document.querySelector("#textarea");

// adding eventlistener for any key press
textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){      // check if the key pressed is Enter key or not
        sendMessage(e.target.value);
    }
});

function sendMessage(message){
    let msg = {
        user : name,
        message : message.trim()
    };

    // Append message
    appendMessage(msg, 'outgoing');
    textarea.value = '';
    scrollToBottom();

    // Send to Server
    socket.emit('message', msg);
}

// grabing the message_area
let messageArea = document.querySelector(".message_area");

function appendMessage(msg, type){
    // creating new div tag
    let divTag = document.createElement("div");
    let className = type;

    divTag.classList.add(className, 'message');

    let markup = `
        <h4>${ msg.user }</h4>
        <p>${ msg.message }</p>
    `;

    divTag.innerHTML = markup;

    messageArea.appendChild(divTag);

}

// Recieving serverside message
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming');
    scrollToBottom();
});

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}