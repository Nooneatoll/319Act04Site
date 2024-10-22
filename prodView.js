// Get the title from the URL parameters
const params = new URLSearchParams(window.location.search);
const title = params.get('title');

// Fetch JSON data and search for the item with the matching title
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const item = data.find(item => item.title === title);

        if (item) {
            const detailsContainer = document.getElementById('details-container');
            detailsContainer.innerHTML = `
                        <div class="card">
                            <div class="displayImage">
                                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                            </div>
                            <div class="card-body">
                                <h2 class="card-title">${item.title}</h2>
                                <p class="card-text">${item.author}</p>
                                <p class="card-text">${item.publishDate}</p>

                                <p class="card-text">${item.summary}</p>
                            </div>
                        </div>
                    `;
        } else {
            document.getElementById('details-container').innerHTML = '<p>Please select an item.</p>';
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));