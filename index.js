var textElement = document.getElementById("text");
var text = textElement.innerText;
var currentIndex = 0;

function changeWord() {
    if (currentIndex >= text.length) {
        currentIndex = 0;
    }

    while (currentIndex < text.length && text[currentIndex] === " ") {
        currentIndex++;
    }

    var wordEnd = currentIndex;
    while (wordEnd < text.length && text[wordEnd] !== " ") {
        wordEnd++;
    }

    var word = text.slice(currentIndex, wordEnd);
    var before = text.slice(0, currentIndex);
    var after = text.slice(wordEnd);

    textElement.innerHTML = `${before}<span class="highlight">${word}</span>${after}`;

    currentIndex = wordEnd + 1;
    setTimeout(changeWord, 1000);
}

changeWord();
