console.log("page loaded...");

let editProfile = document.querySelector('#edit-profile')
let connectionRequests = 3;
let yourConnections = 213;

function changeColor(element) {
    if (element.classList.contains('change-color')) {
        element.classList.remove('change-color');
        
    } else {
        element.classList.add("change-color");
    }
}


function changeName() {
    let name = document.querySelector('#change-name');
    name.innerHTML = "John Doe";
}

function remove(e) {
    if (e.classList.contains('remove1')) {
        document.querySelector('#first-connect').remove();
        connectionRequests--;
        document.querySelector('#connection-req-number').innerHTML = `${connectionRequests}`;

    } else if (e.classList.contains('remove2')) {
        document.querySelector('#second-connect').remove();
        connectionRequests--;
        document.querySelector('#connection-req-number').innerHTML = `${connectionRequests}`;

    } else if (e.classList.contains('remove3')) {
        document.querySelector('#third-connect').remove();
        connectionRequests--;
        document.querySelector('#connection-req-number').innerHTML = `${connectionRequests}`;
        
    }
    
}

function addConnection(e) {
    if (e.classList.contains('accept')) {
        yourConnections++;
        document.querySelector('#connection-number').innerHTML = `${yourConnections}`;
        
    }
}