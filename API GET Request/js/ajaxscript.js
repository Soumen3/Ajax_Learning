document.getElementById("btnajax").addEventListener('click', makerequest);

function makerequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://dummyjson.com/products", true)
    xhr.responseType = "json"
    xhr.timeout = 3000
    xhr.onload = () => {
        if (xhr.status === 200) {
            const products = xhr.response.products;

            
            const itemsDiv = document.getElementById('items');
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');

                const title = document.createElement('h3');
                title.textContent = product.title;

                const description = document.createElement('p');
                description.textContent = product.description;

                const price = document.createElement('p');
                price.textContent = `Price: $${product.price}`;

                const rating = document.createElement('p');
                rating.textContent = `Rating: ${product.rating}`;

                productDiv.appendChild(title);
                productDiv.appendChild(description);
                productDiv.appendChild(price);
                productDiv.appendChild(rating);

                itemsDiv.appendChild(productDiv);
            });
            
        } else {
            console.log("problem occured")
        }
    }
    xhr.onerror = () => {
        console.log("network error")
    }
    xhr.onprogress = () => {
        console.log("on progress")
    }
    xhr.onabort = () => {
        console.log("request aborted")
    }
    xhr.ontimeout = () => {
        console.log("request timeout")
    }
    xhr.onloadend = () => {
        console.log("request end")
    }
    xhr.onloadstart = () => {
        console.log("request start")
    }

    xhr.send()
}
