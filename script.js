
const correctDate = "1st May 2023";

function validateDate() {
    const input = document.getElementById("anniv-input").value.trim();
    const error = document.getElementById("error-message");
    if (input === correctDate) {
        document.getElementById("access-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        playParagraphs();
    } else {
        error.textContent = "That’s not it, try again ☹️";
    }
}

const paragraphs = [
    "You’ve always been the peace my soul never knew it needed.",
    "Even in silence, your presence speaks louder than a thousand voices.",
    "The way you see the world… it’s beautiful, just like you.",
    "No distance, no time, no silence can fade what I feel for you.",
    "To Pichoune — the tiniest bundle of joy who carries the biggest piece of my heart.",
    "Even if my future is only built on your memories… it will still be worth everything. — FN27 lies in my heart forever. I love you♥️"
];

let current = 0;
function playParagraphs() {
    const container = document.getElementById("animation-container");
    const interval = setInterval(() => {
        if (current < paragraphs.length) {
            const p = document.createElement("p");
            p.textContent = paragraphs[current];
            p.classList.add("fade-in");
            container.appendChild(p);
            current++;
        } else {
            clearInterval(interval);
            document.getElementById("end-options").style.display = "block";
        }
    }, 5000); // 5 seconds delay
}

function restart() {
    window.location.reload();
}

function requestAnother() {
    alert("Request received! FN27 will know ❤️");
}

function endIt() {
    document.getElementById("main-content").innerHTML = "<h2>Goodbye, Bebe Noor♥️</h2>";
}
