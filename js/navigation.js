function showPage(pageId, btnId){
    const pages = document.querySelectorAll('.page');
    const btns = document.querySelectorAll('.menu__link');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    btns.forEach(btn => {
        btn.classList.remove('menu__link--active');
    });

    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');

    const activeBtn = document.getElementById(btnId);
    activeBtn.classList.add('menu__link--active')
}