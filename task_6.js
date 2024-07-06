document.getElementById('fetchButton').addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/1'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); 
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('dataContainer').textContent = 'Error fetching data';
    }
}

function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = ''; 
    if (typeof data !== 'object' || data === null) {
        dataContainer.textContent = 'Data is not in the expected format';
        return;
    }

    const itemElement = document.createElement('div');
    itemElement.classList.add('item');

    const titleElement = document.createElement('h2');
    titleElement.textContent = `Title : $${data.title}`;
    titleElement.style.textDecoration ="underline"

    const priceElement = document.createElement('h1');
    priceElement.textContent = `Price: $${data.price}`;
    priceElement.style.backgroundColor = "Red"
    

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent =`Description :  $${data.description}`;
    descriptionElement.style.fontWeight= "bolder"

    const categoryElement = document.createElement('h5');
    categoryElement.textContent = `Category: ${data.category}`;


    const imageElement = document.createElement('img');
    imageElement.src = data.image;
    imageElement.alt = data.title;
    imageElement.style.width = '150px'; 
    imageElement.style.border ="50px"

    const ratingElement = document.createElement('h4');
    ratingElement.textContent = `Rating: ${data.rating.rate} (${data.rating.count} reviews)`;
    ratingElement.style.backgroundColor="blue"

    itemElement.appendChild(titleElement);
    itemElement.appendChild(priceElement);
    itemElement.appendChild(descriptionElement);
    itemElement.appendChild(categoryElement);
    itemElement.appendChild(imageElement);
    itemElement.appendChild(ratingElement);

    dataContainer.appendChild(itemElement);
}
