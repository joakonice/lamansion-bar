document.addEventListener('DOMContentLoaded', () => {
    // Menu Data is loaded from menu_data.js

    const menuGrid = document.getElementById('menu-grid');
    const categoryBtns = document.querySelectorAll('.filter-btn');

    // Initial Render
    renderMenu('all');

    // Category Filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            renderMenu(category);
        });
    });

    function renderMenu(category) {
        menuGrid.innerHTML = '';

        const itemsToRender = category === 'all'
            ? menuItems
            : menuItems.filter(item => item.category.toLowerCase() === category.toLowerCase());

        if (itemsToRender.length === 0) {
            menuGrid.innerHTML = '<p class="no-items">No hay items en esta categoría.</p>';
            return;
        }

        itemsToRender.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'menu-item';
            itemEl.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="item-content">
                    <div class="item-header">
                        <h3 class="item-title">${item.name}</h3>
                        <span class="item-price">${item.price}</span>
                    </div>
                    <p class="item-desc">${item.description}</p>
                </div>
            `;
            menuGrid.appendChild(itemEl);
        });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'rgba(10,10,10,0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.textAlign = 'center';
            }
        });
    }
});
