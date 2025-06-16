
    // Animación de aparición para header y main
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('header');
        const main = document.querySelector('main');
        if (header) header.style.opacity = 0;
        if (main) main.style.opacity = 0;
        setTimeout(() => {
            if (header) header.style.transition = 'opacity 0.8s';
            if (main) main.style.transition = 'opacity 0.8s';
            if (header) header.style.opacity = 1;
            if (main) main.style.opacity = 1;
        }, 100);

        // Botón volver arriba
        let btn = document.createElement('button');
        btn.textContent = '↑';
        btn.setAttribute('id', 'btn-top');
        btn.style.position = 'fixed';
        btn.style.bottom = '30px';
        btn.style.right = '30px';
        btn.style.padding = '12px 16px';
        btn.style.borderRadius = '50%';
        btn.style.border = 'none';
        btn.style.background = '#6366f1';
        btn.style.color = '#fff';
        btn.style.fontSize = '1.5rem';
        btn.style.cursor = 'pointer';
        btn.style.boxShadow = '0 2px 8px rgba(79,70,229,0.13)';
        btn.style.display = 'none';
        btn.style.zIndex = 1000;
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Scroll suave para enlaces internos (si los hay)
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            const id = e.target.getAttribute('href').slice(1);
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });