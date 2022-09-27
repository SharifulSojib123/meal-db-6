const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayBuddies(data));

}


const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy.name)
        const div = document.createElement('div');
        div.innerHTML = ` 
        <h3>
            Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        
        </h3>
        <p>
            Email: ${buddy.email}
        </p>
        
        `;

        buddiesDiv.appendChild(div);
    }
}