document.addEventListener('DOMContentLoaded', () => {
    const hoverAudio = document.getElementById('hoverAudio');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModalButton = document.getElementById('closeModal');
    const scrollTopButton = document.getElementById('scrollTopButton');

    document.querySelectorAll('.hover-trigger').forEach((img) => {
        img.addEventListener('mouseenter', () => {
            const audioSrc = img.getAttribute('data-audio');
            hoverAudio.src = audioSrc;
            hoverAudio.play().catch(error => {
                console.log('No se pudo reproducir el audio automáticamente:', error.message);
            });
        });

        img.addEventListener('mouseleave', () => {
            hoverAudio.pause();
            hoverAudio.currentTime = 0;
        });

        img.addEventListener('click', () => {
            const videoSrc = img.getAttribute('data-video');
            modalVideo.src = videoSrc;
            videoModal.classList.remove('hidden');
            modalVideo.play().catch(error => {
                console.log('No se pudo reproducir el video automáticamente:', error.message);
                modalVideo.controls = true; 
            });
        });
    });


    closeModalButton.addEventListener('click', () => {
        videoModal.classList.add('hidden');
        modalVideo.pause();
        modalVideo.currentTime = 0;
    });


    scrollTopButton.addEventListener('click', () => {
        window.location.reload();
    });
    
});
