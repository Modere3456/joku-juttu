function login() {
    const mains = document.getElementsByClassName('main');
    const seconds = document.getElementsByClassName('second');
    for (let i = 0; i < mains.length; i++) {
        const element = mains[i];
        element.style.display = 'none';
    }
    for (let i = 0; i < seconds.length; i++) {
        const element = seconds[i];
        element.style.display = 'block';
    }
}