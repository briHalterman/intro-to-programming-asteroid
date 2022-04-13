const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyRight = document.createElement("p");

copyRight.innerHTML = (`&copy; Halterman ${thisYear}`);
footer.appendChild(copyRight);

const skillsSection = document.getElementById(`skills`);
const skillList = skillsSection.querySelector('ul');
const skills = [`Mental Health First Aid`, `Administration`, `Microsoft Word`, `Microsoft Excel`, 'HTML', 'JS'];

for ( i = 0; i < skills.length; i ++ ) {
    var item = document.createElement('li');
    item.textContent = skills[i];
    skillList.prepend(item);
};

// const hiBrittany = (event) => {
//     console.log(event.target)
// }

// document.addEventListener('click', hiBrittany);

const submit = document.getElementById('submit');
const messageForm = document.getElementsByName('leave_message')[0];
if(messageForm) {
    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.name;
        const email = event.target.email;
        const textarea = event.target.message;
        console.log(name.value,email.value,textarea.value);

        const messageSection = document.getElementById('messages');
        const messageList = messageSection.querySelector('ul');
        const newMessage = document.createElement('li');    
        newMessage.innerHTML = `<a href=mailto:email.value>${name.value}</a> wrote: <span>${textarea.value}</span>`;
        
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "remove";
        removeButton.type = "button";
        removeButton.addEventListener('click', (event) => {
            const entry = removeButton.parentNode.parentNode();
            entry.remove();
        });
        
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);
        
        messageForm.reset();
    });
};





