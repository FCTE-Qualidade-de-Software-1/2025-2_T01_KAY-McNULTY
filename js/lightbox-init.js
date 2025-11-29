// Initialize baguetteBox for image galleries
document.addEventListener('DOMContentLoaded', function() {
    // Initialize baguetteBox for all images
    if (typeof baguetteBox !== 'undefined') {
        baguetteBox.run('.md-content', {
            animation: 'fadeIn',
            captions: true
        });
    }
});
