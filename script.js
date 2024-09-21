function createPostHTML(post) {
    return `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `;
}

// Функция для добавления HTML-разметки в контейнер
function addPostsToContainer(posts, container) {
    posts.forEach(post => {
        const postHTML = createPostHTML(post);
        container.innerHTML += postHTML; // Добавляем разметку
    });
}

// Функция для получения постов с сервера
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Сеть не отвечает');
        }
        const posts = await response.json();
        
        // Получаем контейнер и добавляем посты
        const postsContainer = document.getElementById('postsContainer');
        addPostsToContainer(posts, postsContainer);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Вызываем функцию для получения постов при загрузке страницы
fetchPosts();
