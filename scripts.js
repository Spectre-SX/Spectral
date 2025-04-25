// This function loads the new page content with a fade-out/in effect
function loadPage(page) {
  const contentDiv = document.getElementById('content');
  
  // Fade-out the current content
  contentDiv.style.opacity = 0;

  setTimeout(() => {
    // Fetch the new content from the page and load it
    fetch(page)
      .then(response => response.text())
      .then(data => {
        contentDiv.innerHTML = data;  // Load new page content into the div
        contentDiv.style.opacity = 1; // Fade-in effect
      });
  }, 500); // Wait for fade-out effect to finish (500ms)

  // Apply smooth fade transition to content
  contentDiv.style.transition = 'opacity 1s ease-in-out';
}

// Add event listener to trigger fade-in effect after page load
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});
