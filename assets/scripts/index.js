document.addEventListener("DOMContentLoaded", e => {
    // return;
    fetch("https://raw.githubusercontent.com/SMR76/SMR76/main/README.md")
    .then(res => res.text())
    .then(text => {
        const bio = document.getElementById('bio');
        text = text.replaceAll('src="', 'src="https://raw.githubusercontent.com/SMR76/SMR76/main/');
        bio.innerHTML = text;
    });
});