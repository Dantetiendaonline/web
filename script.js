document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('comments');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');
        const imageInput = document.getElementById('image');

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();
        const image = imageInput.files[0];

        if (name && message) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');

            const commentContent = document.createElement('p');
            commentContent.textContent = `${name}: ${message}`;

            if (image) {
                const imageElement = document.createElement('img');
                imageElement.src = URL.createObjectURL(image);
                imageElement.alt = 'Imagen de comentario';
                commentDiv.appendChild(imageElement);
            }

            commentDiv.appendChild(commentContent);
            commentsContainer.appendChild(commentDiv);

            nameInput.value = '';
            messageInput.value = '';
            imageInput.value = '';
        }
    });
});
