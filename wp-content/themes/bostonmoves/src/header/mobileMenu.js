// if (window.location.pathname === '/detail/') {
//   window.addEventListener('DOMContentLoaded', () => {})}
window.addEventListener('DOMContentLoaded', () => {
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
  });
});
