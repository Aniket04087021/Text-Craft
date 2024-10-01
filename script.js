const textarea = document.getElementById("textarea");
let isDragging = false;
let offsetX, offsetY;
let history = [];
let historyIndex = -1;

textarea.addEventListener('input', () => {
    if (historyIndex < history.length - 1) {
        history.splice(historyIndex + 1);
    }
    history.push(textarea.value);
    historyIndex = history.length - 1;
});

document.getElementById('undo-btn').addEventListener('click', () => {
    if (historyIndex > 0) {
        historyIndex--;
        textarea.value = history[historyIndex];
    }
});

document.getElementById('redo-btn').addEventListener('click', () => {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        textarea.value = history[historyIndex];
    }
});

textarea.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - textarea.offsetLeft;
    offsetY = e.clientY - textarea.offsetTop;
    textarea.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    textarea.style.cursor = 'move';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;
        const maxX = window.innerWidth - textarea.offsetWidth;
        const maxY = window.innerHeight - textarea.offsetHeight;
        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));
        textarea.style.left = newX + 'px';
        textarea.style.top = newY + 'px';
    }
});

function changeFontFamily(e) {
    textarea.style.fontFamily = e.value;
}

function f1(e) {
    let value = e.value;
    textarea.style.fontSize = value + 'px';
}

function f2() {
    if (textarea.style.fontWeight === "bold") {
        textarea.style.fontWeight = "normal";
    } else {
        textarea.style.fontWeight = "bold";
    }
}

function f3() {
    if (textarea.style.fontStyle === "italic") {
        textarea.style.fontStyle = "normal";
    } else {
        textarea.style.fontStyle = "italic";
    }
}

function f4() {
    if (textarea.style.textDecoration === "underline") {
        textarea.style.textDecoration = "none";
    } else {
        textarea.style.textDecoration = "underline";
    }
}

function f5() {
    textarea.style.textAlign = "left";
}

function f6() {
    textarea.style.textAlign = "center";
}

function f7() {
    textarea.style.textAlign = "right";
}

function f8() {
    if (textarea.style.textTransform === "uppercase") {
        textarea.style.textTransform = "none";
    } else {
        textarea.style.textTransform = "uppercase";
    }
}

function f9() {
    if (textarea.style.textDecoration === "line-through") {
        textarea.style.textDecoration = "none";
    } else {
        textarea.style.textDecoration = "line-through";
    }
}

function f10(e) {
    textarea.style.color = e.value;
}
