document.addEventListener("DOMContentLoaded", function () {
    fetch("posts.json")
        .then(response => response.json())
        .then(posts => {
            const blogContainer = document.querySelector(".blog-container");
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("blog-post");
                postElement.innerHTML = `
                    <a href="posts/${post.url}" class="post-link">
                        <img src="${post.image}" alt="${post.title}">
                        <h3>${post.title}</h3>
                        <p>${post.content}</p>
                        <a href="posts/${post.url}" class="read-more">Leer más...</a>
                    </div>
                `;
                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error cargando los posts: ", error));
    });
