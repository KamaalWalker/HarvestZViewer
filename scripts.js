document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('mainVideo');
    const dropdown = document.getElementById('perspectiveDropdown');

    dropdown.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            videoElement.src = selectedValue;
        }
    });

    function loadVideos() {
        const perspectives = [
            { name: 'Rick', url: 'https://youtu.be/dQw4w9WgXcQ?feature=shared' },
            { name: 'Harvest Z', url: 'https://www.youtube.com/watch?v=A7S_G8Z23_M' },
            { name: 'Dutch', url: 'https://www.youtube.com/watch?v=QON5EM1xhoY' },
            // Add more perspectives as needed
        ];

        perspectives.forEach(perspective => {
            const option = document.createElement('option');
            option.value = perspective.url;
            option.text = perspective.name;
            dropdown.add(option);
        });
    }

    loadVideos();
});
