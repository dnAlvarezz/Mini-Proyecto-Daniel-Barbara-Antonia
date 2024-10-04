// Simulación de sistema de publicaciones
function crearPost() {
    const titulo = document.getElementById("titulo-post").value;
    const contenido = document.getElementById("contenido-post").value;

    if (titulo && contenido) {
        const publicaciones = document.getElementById("publicaciones");
        const nuevoPost = document.createElement("div");
        nuevoPost.classList.add("post");
        nuevoPost.innerHTML = `<h3>${titulo}</h3><p>${contenido}</p>`;
        publicaciones.appendChild(nuevoPost);

        document.getElementById("titulo-post").value = "";
        document.getElementById("contenido-post").value = "";

        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push({ titulo: titulo, contenido: contenido });
        localStorage.setItem("posts", JSON.stringify(posts));
    }
}

// Nueva función para conectar a Spotify
function conectarSpotify() {
    window.location.href = "https://www.spotify.com";
}

// Cargar publicaciones almacenadas en el localStorage
function cargarPosts() {
    const publicaciones = document.getElementById("publicaciones");
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.forEach(post => {
        const nuevoPost = document.createElement("div");
        nuevoPost.classList.add("post");
        nuevoPost.innerHTML = `<h3>${post.titulo}</h3><p>${post.contenido}</p>`;
        publicaciones.appendChild(nuevoPost);
    });
}

window.onload = function() {
    cargarPosts();
}

let posicion = 0;

function moverCarrusel(direccion) {
    const carruselItems = document.querySelector('.carrusel-items');
    const items = document.querySelectorAll('.musica-item');
    const totalItems = items.length;

    const itemWidth = items[0].clientWidth + parseInt(getComputedStyle(items[0]).marginRight);
    const carruselWidth = carruselItems.clientWidth;

    if (direccion === 1 && Math.abs(posicion) < itemWidth * (totalItems - 3)) {
        posicion -= itemWidth;
    } else if (direccion === -1 && posicion < 0) {
        posicion += itemWidth;
    }

    carruselItems.style.transform = `translateX(${posicion}px)`;
}

// Simulación de sistema de publicaciones
function crearPost() {
    const titulo = document.getElementById("titulo-post").value;
    const contenido = document.getElementById("contenido-post").value;

    if (titulo && contenido) {
        const publicaciones = document.getElementById("publicaciones");
        const nuevoPost = crearElementoPost(titulo, contenido);
        publicaciones.appendChild(nuevoPost);

        document.getElementById("titulo-post").value = "";
        document.getElementById("contenido-post").value = "";

        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push({ titulo: titulo, contenido: contenido, likes: 0 });
        localStorage.setItem("posts", JSON.stringify(posts));
    }
}

function crearElementoPost(titulo, contenido, likes = 0) {
    const nuevoPost = document.createElement("div");
    nuevoPost.classList.add("post");
    nuevoPost.innerHTML = `
        <h3>${titulo}</h3>
        <p>${contenido}</p>
        <div class="interacciones">
            <span class="like-count">${likes} Me gusta</span>
            <button class="btn-like" onclick="darMeGusta(this)">Me gusta</button>
        </div>
    `;
    return nuevoPost;
}

function cargarPosts() {
    const publicaciones = document.getElementById("publicaciones");
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.forEach(post => {
        const nuevoPost = crearElementoPost(post.titulo, post.contenido, post.likes);
        publicaciones.appendChild(nuevoPost);
    });
}

function darMeGusta(button) {
    const likeCountElement = button.previousElementSibling;
    let likeCount = parseInt(likeCountElement.textContent);
    likeCount++;
    likeCountElement.textContent = `${likeCount} Me gusta`;

    // Actualizar los likes en localStorage
    const titulo = button.closest('.post').querySelector('h3').textContent;
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts = posts.map(post => {
        if (post.titulo === titulo) {
            post.likes = likeCount;
        }
        return post;
    });
    localStorage.setItem("posts", JSON.stringify(posts));
}

window.onload = function() {
    cargarPosts();
}

let amigos = [
    { nombre: "Daniel", descripcion: "Fan de Pop y Rock", foto: "https://i.pinimg.com/originals/63/85/1c/63851c75d37cd7a90bcd1f05f6220d13" },
    { nombre: "Antonia", descripcion: "Amante del Jazz", foto: "https://i.pinimg.com/736x/0d/f8/89/0df889bf6ca5fd82595c157bef374b71" }
];

function cargarAmigos() {
    const listaAmigos = document.getElementById("lista-amigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de volver a cargar

    amigos.forEach((amigo, index) => {
        const amigoDiv = document.createElement("div");
        amigoDiv.classList.add("amigo");
        amigoDiv.innerHTML = `
            <img src="${amigo.foto}" alt="Foto de perfil de ${amigo.nombre}" class="amigo-foto">
            <div class="amigo-info">
                <p><strong>${amigo.nombre}</strong> - ${amigo.descripcion}</p>
            </div>
            <button class="btn-eliminar" onclick="eliminarAmigo(${index})">Eliminar</button>
        `;
        listaAmigos.appendChild(amigoDiv);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    let amigos = [
        { nombre: "Rocío", descripcion: "Fan de Folclore ", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1sJjmKrt9MHNzDPK54Y_xVCxIQdkKTZD-A&s" },
        { nombre: "Agustín", descripcion: "Amante del Jazz", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLtWE_V1ma-C-u8qr5Ac9jjvTzoR-lsHuNg&s" }
    ];

    function cargarAmigos() {
        const listaAmigos = document.getElementById("lista-amigos");
        listaAmigos.innerHTML = ""; // Limpiar la lista antes de volver a cargar

        amigos.forEach((amigo, index) => {
            const amigoDiv = document.createElement("div");
            amigoDiv.classList.add("amigo");
            amigoDiv.innerHTML = `
                <img src="${amigo.foto}" alt="Foto de perfil de ${amigo.nombre}" class="amigo-foto">
                <div class="amigo-info">
                    <p><strong>${amigo.nombre}</strong> - ${amigo.descripcion}</p>
                </div>
                <button class="btn-eliminar" onclick="eliminarAmigo(${index})">Eliminar</button>
            `;
            listaAmigos.appendChild(amigoDiv);
        });
    }

    function agregarAmigo() {
        const nombre = document.getElementById("nombre-amigo").value;
        const descripcion = document.getElementById("descripcion-amigo").value;
        const foto = document.getElementById("foto-amigo").value;

        if (nombre && descripcion && foto) {
            amigos.push({ nombre: nombre, descripcion: descripcion, foto: foto });
            cargarAmigos();

            // Limpiar los campos del formulario
            document.getElementById("nombre-amigo").value = "";
            document.getElementById("descripcion-amigo").value = "";
            document.getElementById("foto-amigo").value = "";
        } else {
            alert("Por favor, completa todos los campos antes de agregar un amigo.");
        }
    }

    function eliminarAmigo(index) {
        amigos.splice(index, 1);
        cargarAmigos();
    }

    // Cargar amigos inicialmente
    cargarAmigos();

    // Asignar la función agregarAmigo al botón
    document.querySelector('.agregar-amigo button').addEventListener('click', agregarAmigo);
});

