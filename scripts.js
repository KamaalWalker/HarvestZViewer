document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('mainVideo');
    const dropdown = document.getElementById('perspectiveDropdown');

    dropdown.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            videoElement.src = selectedValue;
            videoElement.load();
            videoElement.play();
        }
    });

    function loadVideos() {
        // This will be replaced with actual data fetching logic
        const perspectives = [
            { name: 'Player 1', url: 'https://your-google-drive-link/video1.mp4' },
            { name: 'Player 2', url: 'https://your-google-drive-link/video2.mp4' },
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
