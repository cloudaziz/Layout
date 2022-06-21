const tabs = document.querySelectorAll('[data-package-target]');
const tabContents = document.querySelectorAll('[data-package-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove('active'); //
    });

    const target = document.querySelector(tab.dataset.packageTarget); // 1
    tabContents.forEach((content) => {
      content.classList.remove('active'); // 3
    });

    target.classList.add('active'); // 2
    tab.classList.add('active'); //
  });
});
