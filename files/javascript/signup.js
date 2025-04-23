function login() {
    const mains = document.getElementsByClassName('main');
    const hidden = document.getElementsByClassName('hidden');
    for (let i = 0; i < mains.length; i++) {
        const element = mains[i];
        element.style.display = 'none';
    }
    for (let i = 0; i < hidden.length; i++) {
        const element = hidden[i];
        element.style.display = 'block';
    }
}