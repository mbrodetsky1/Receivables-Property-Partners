// nav.js
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.querySelector('header');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle the mobile menu visibility
            mobileMenu.classList.toggle('hidden');
            document.body.classList.toggle('menu-open');

            // Toggle between menu and close icons
            const icons = mobileMenuButton.querySelectorAll('svg');
            icons.forEach(icon => {
                icon.classList.toggle('hidden');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!header.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('menu-open');
                
                // Reset icons to initial state
                const icons = mobileMenuButton.querySelectorAll('svg');
                icons[0].classList.remove('hidden'); // Menu icon
                icons[1].classList.add('hidden');    // Close icon
            }
        });

        // Close mobile menu when clicking navigation links
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('menu-open');
                
                // Reset icons to initial state
                const icons = mobileMenuButton.querySelectorAll('svg');
                icons[0].classList.remove('hidden'); // Menu icon
                icons[1].classList.add('hidden');    // Close icon
            });
        });
    }
});
