const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyRight = document.createElement("p");

copyRight.innerHTML = (`&copy; Halterman ${thisYear}`);
footer.appendChild (copyRight);

const skillsSection = document.getElementById(`skills`)
const skillList = skillsSection.querySelector('ul')
const skills =[`Mental Health First Aid`, `Administration`, `Microsoft Word`, `Microsoft Excel`, 'HTML', 'JS']
for ( i = 0; i < skills.length; i ++ ) {
    var item = document.createElement('li');
    item.textContent = skills[i]
    skillList.prepend(item)
};

