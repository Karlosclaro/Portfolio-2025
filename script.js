function changeColorScheme(scheme) {
    const root = document.documentElement;

    if (scheme === 'scheme1') {
        root.style.setProperty('--cor-primaria', '#000000');
        root.style.setProperty('--cor-secundaria', '#F6F6F6');
        root.style.setProperty('--cor-terciaria', '#22D4FD');
        root.style.setProperty('--cor-hover', '#272727');
    } else if (scheme === 'scheme2') {
        root.style.setProperty('--cor-primaria', '#2c3639');
        root.style.setProperty('--cor-secundaria', '#dcd7c9');
        root.style.setProperty('--cor-terciaria', '#a27b5c');
        root.style.setProperty('--cor-hover', '#3f4e4f');
    } else if (scheme === 'scheme3') {
        root.style.setProperty('--cor-primaria', '#0f0e0e');
        root.style.setProperty('--cor-secundaria', '#eeeeee');
        root.style.setProperty('--cor-terciaria', '#8b9a46');
        root.style.setProperty('--cor-hover', '#541212');
    }
}