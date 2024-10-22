//so I need to get a sidebar set up then pull data from a json and build cards.
//lets see what the magical AI can manage
//pretty damn impressive honestly

    // Fetch JSON data and generate Bootstrap cards
fetch('data.json')
.then(response => response.json())
.then(data => {
    const cardContainer = document.getElementById('card-container');
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
            <div class="card h-100 clickable-card">
                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        `;

        // Add click event to card
        card.addEventListener('click', () => {
            window.location.href = `productView.html?title=${encodeURIComponent(item.title)}`;
        });

        cardContainer.appendChild(card);
    });
})
.catch(error => console.error('Error fetching JSON:', error));




