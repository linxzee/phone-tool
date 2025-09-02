document.addEventListener('DOMContentLoaded', () => { 
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement;

    // Function to apply the theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
    };

    // Safe localStorage access with error handling
    const safeLocalStorage = {
        getItem: (key) => {
            try {
                return localStorage.getItem(key);
            } catch (error) {
                console.warn('localStorage access failed:', error.message);
                return null;
            }
        },
        setItem: (key, value) => {
            try {
                localStorage.setItem(key, value);
                return true;
            } catch (error) {
                console.warn('localStorage set failed:', error.message);
                return false;
            }
        }
    };

    // Check for saved theme in localStorage or system preference
    const savedTheme = safeLocalStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        safeLocalStorage.setItem('theme', newTheme);
    });

    // Log environment info for debugging
    console.log('Theme switcher initialized:', {
        protocol: window.location.protocol,
        hostname: window.location.hostname,
        localStorageAvailable: typeof localStorage !== 'undefined'
    });
});
