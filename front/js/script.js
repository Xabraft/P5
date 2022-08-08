
// Fonction pour aller chercher l'api
const fetchProducts = async () => {
    return await fetch('http://localhost:3000/api/products') // on va chercher l'API avec la methode fetch 
        .then(res => res.json())
       // on récupere les informations de l'api qu'on va mettre au format json.  
        .catch((error) => console.error(error));
};

// fetchProducts(); // On appelle la fonction précédente pour récupérer les données de l'API

// fonction pour lier les élements HTML que l'on va créer avec les données de l'api
const showProducts = async () => {  // on créait une fonction asynchrone et on attends la réponse de fetchProducts.
    const products = await fetchProducts();
    let items = document.getElementById("items");
    for (let i = 0; i < products.length; i++) {

        // Ajout des liens
        let link = document.createElement("a");
        link.setAttribute('href', "product.html?id=" + products[i]._id);
        

        // Création des balises article
        let article = document.createElement("article");
        link.appendChild(article);

        // Ajout des images
        let images = document.createElement("img");
        images.setAttribute('src', products[i].imageUrl);
        images.setAttribute('alt', products[i].altTxt);
        // Création des titres h3
        let title = document.createElement("h3");
        title.innerHTML = products[i].name;
        title.classList.add("productName")
         // Création des paragraphes
        let description = document.createElement("p");
        description.innerHTML = products[i].description;
        description.classList.add("productDescription")

        article.appendChild(images);
        article.appendChild(title);
        article.appendChild(description);
        link.appendChild(article)

        items.appendChild(link);
    }
};
showProducts();