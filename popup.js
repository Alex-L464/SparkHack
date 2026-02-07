document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['trackedList'], (result) => {
        const list = result.trackedList || [];
        const ul = document.getElementById('list');
        ul.innerHTML = list.map(item => `<li>${item}</li>`).join('');
    });
});

