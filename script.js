// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
// Contact Form Interactivity
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
form.addEventListener('submit', (e) => 
      
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        darkbg: '#1a1a1a',
                        cardbg: '#242424',
                        accent: '#e5a000',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        heading: ['Montserrat', 'sans-serif'],
                    }
                }
            }
        }
    </script>