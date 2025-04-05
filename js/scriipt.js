fetch('partials/nav.html')
    .then(response => response.text())
    .then(html => {
        nav = document.getElementById("navbar").innerHTML = html;
    })
    .catch(error => console.error('Error loading HTML file:', error))

fetch('partials/footer.html')
    .then(response => response.text())
    .then(html => {
        nav = document.getElementById("footer").innerHTML = html;
    })
    .catch(error => console.error('Error loading HTML file:', error))