// if (window.location.pathname === '/detail/') {
//   window.addEventListener('DOMContentLoaded', () => {})}
window.addEventListener('DOMContentLoaded', () => {
  console.log(window.innerWidth < 992);
  console.log('Loaded');
  const mobileMenuToggle = document.querySelector('#navMobileToggle');
  const mobileMenuCont = document.querySelector('#navMobileMenuCont');
  let mobileMenu = false;

  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu = !mobileMenu;
    if (mobileMenu) {
      mobileMenuCont.style.display = 'flex';
    } else {
      mobileMenuCont.style.display = 'none';
    }

    console.log(mobileMenu);
  });
});
