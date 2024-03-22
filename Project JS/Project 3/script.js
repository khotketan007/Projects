// My News API Key : 3af3852620864d0897b162707c32cd5f

const apiKey = "3af3852620864d0897b162707c32cd5f"

// Declaring Variable
const blockContainer = document.querySelector('.block-container')

async function fetchRandomNews(){
    try {
        // Creating Random Variable
        const apiURL= `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apiKey}`
        const response = await fetch(apiURL)
        const data = await response.json()
        return data.article
        // console.log(data);
    } catch (error) {
        console.error('Error! Fetching Random News', error);
        return []
    }
}

// Function displayBlock
function displayBlock(article){
    blockContainer.innerHTML = ""
    article.forEach((element) => {
        const blockCard = document.createElement('div')
        blockCard.classList.add("block-card")
        const image = document.createElement('img')
        image.src = element.urlToImage
        image.alt = element.title
        const title = document.createElement('h2')
        title.textContent = element.title
        const description = document.createElement("p")
        description.textContent = element.description

        blockCard.appendChild(image)
        blockCard.appendChild(title)
        blockCard.appendChild(description)

        blockContainer.appendChild(blockCard)
    });
}

(async () => {
    try {
       const article = await fetchRandomNews()
       console.log(article);
       displayBlock(article)
    } catch (error) {
        console.error('Error! Fetching Random News',error);
    }
})();