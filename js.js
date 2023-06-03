const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git').exports;
const git = gitExtension.getAPI(1);

const burgerMenu = document.querySelector('.burger-menu');
const menuOverlay = document.querySelector('.menu-overlay');

burgerMenu.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

menuOverlay.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
});
//-----------------------------------------------//
