const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyRight = document.createElement("p");

copyRight.innerHTML = (`&copy; Halterman ${thisYear}`);
footer.appendChild(copyRight);

const skillsSection = document.getElementById(`skills`);
const skillList = skillsSection.querySelector('ul');
const skills = [`Mental Health First Aid`, `Administration`, `Microsoft Word`, `Microsoft Excel`, 'CSS', 'HTML', 'JS'];

for ( let i = 0; i < skills.length; i ++ ) {
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
        const messageEmail = document.createElement('a');
        const messageParagraph = document.createElement('p');
        messageEmail.textContent = name.value;
        messageEmail.href = `mailto:${email.value}`;
        messageParagraph.textContent = ` wrote: ${textarea.value}`;
        newMessage.appendChild(messageParagraph);  
        messageParagraph.prepend(messageEmail); 
        //newMessage.innerHTML = `<a href=mailto:${email.value}>${name.value}</a> wrote: <span style="margin-right:10px">${textarea.value}</span>`;
        
        const removeButton = document.createElement("button");
        removeButton.classList.add("button");
        removeButton.textContent = "remove";
        removeButton.type = "button";
        removeButton.addEventListener('click', (event) => {
            const entry = event.target.parentNode;
            console.log(entry);
            entry.remove();
        });
        
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);
        
        messageForm.reset();
    });
};

// var githubRequest = new XMLHttpRequest();

// githubRequest.open('GET', 'https://api.github.com/users/brihalterman/repos');
// githubRequest.send();


// githubRequest.addEventListener('load', function() {
//     const repositories = (JSON.parse(this.response));
//     const projectSection = document.getElementById('projects');
//     const projectList = projectSection.querySelector('ul');
//     for (let i = 0; i < repositories.length; i++) {
//         const project = document.createElement('li');
//         project.textContent = repositories[i].name;
//         console.log(project);
//         projectList.appendChild(project);
//     }
// });

fetch('https://api.github.com/users/brihalterman/repos')
    .then((res) => res.json())
    .then((repositories) => {
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul');
        for ( let i = 0; i < repositories.length; i++ ) {
            const project = document.createElement('li');
            project.textContent = repositories[i].name;
            projectList.appendChild(project);
        }
    });



