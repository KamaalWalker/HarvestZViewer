document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('mainVideo');
    const dropdown = document.getElementById('perspectiveDropdown');
    const perspectiveList = document.getElementById('perspectiveList');

    dropdown.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            videoElement.src = selectedValue;
        }
    });

    function loadVideos() {
        const perspectives = [
            { name: 'Rick', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?feature=shared' },
            { name: 'Harvest Z', url: 'https://www.youtube.com/embed/A7S_G8Z23_M' },
            { name: 'Dutch', url: 'https://www.youtube.com/embed/QON5EM1xhoY' },
            { name: 'Lilit Highlight', url: 'https://streamable.com/0x9ro7' },
            { name: 'War Highlight', url: 'https://youtube.com/clip/UgkxmIeqP0H6Y0e5S-3IJMYgbe81cWZjc-Nm?feature=shared' },
            { name: 'Harvest A', url: 'https://www.youtube.com/embed/A7S_G8Z23_M' },
            { name: 'Harvest B', url: 'https://www.youtube.com/embed/A7S_G8Z23_M' },
            { name: 'Harvest C', url: 'https://www.youtube.com/embed/A7S_G8Z23_M' },
            { name: 'Harvest D', url: 'https://www.youtube.com/embed/A7S_G8Z23_M' },
            { name: 'Harvest E', url: 'https://www.youtube.com/embed/A7S_G8Z23_M' },
            { name: 'Harvest F', url: 'https://www.youtube.com/embed/A7S_G8Z23_M' },
            { name: 'Harvest G', url: 'https://www.youtube.com/embed/A7S_G8Z23_M' },
            { name: 'Harvest H', url: 'https://www.youtube.com/embed/A7S_G8Z23_M' },
            { name: 'Harvest I', url: 'https://www.youtube.com/embed/A7S_G8Z23_M' },
        ];

        perspectives.forEach(perspective => {
            const option = document.createElement('option');
            option.value = perspective.url;
            option.text = perspective.name;
            dropdown.add(option);

            const listItem = document.createElement('li');
            listItem.textContent = perspective.name;
            perspectiveList.appendChild(listItem);
        });
    }

    loadVideos();
});
