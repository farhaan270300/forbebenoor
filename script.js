
const paragraphs = [
    "Paragraph 1: The journey begins...",
    "Paragraph 2: The laughter we shared...",
    "Paragraph 3: The memories that shaped us...",
    "Paragraph 4: The promises whispered in silence...",
    "Paragraph 5: Pichoune’s precious moments...",
    "Even if my future is only built on your memories… It will still be worth everything. — FN27 lies in my heart forever. I love you♥️"
];

const images = [
    "media/img1.jpg",
    "media/img2.jpg",
    "media/img3.jpg",
    "media/img4.jpg",
    "media/pichoune1.jpg",
    "media/holdinghands.jpg"
];

let i = 0;
const textEl = document.getElementById("tribute-text");
const imageEl = document.getElementById("tribute-image");

function showNext() {
    if (i < paragraphs.length) {
        textEl.innerText = paragraphs[i];
        imageEl.src = images[i];
        i++;
        setTimeout(showNext, 3000);
    } else {
        document.body.innerHTML = `
            <div id="tribute-container">
                <p>Even if my future is only built on your memories… it will still be worth everything.<br>— FN27 lies in my heart forever. I love you♥️</p>
                <button onclick="location.reload()">Restart Animation</button>
                <button onclick="alert('Request received. FN27 has been notified.')">Request Another Tribute</button>
                <button onclick="window.close()">End It</button>
            </div>
        `;
    }
}

setTimeout(showNext, 3000);
