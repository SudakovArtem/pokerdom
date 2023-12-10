const initHoverBlocks = () => {
  const buttons = document.querySelectorAll('[data-hover="button"]');

  if (!buttons.length) {
    return;
  }

  buttons.forEach((button) => {
    const parent = button.closest('[data-hover="parent"]');
    const className = button.dataset.class;
    button.addEventListener('mouseenter', () => {
      parent.classList.add(className);
      button.addEventListener('mouseleave', () => {
        parent.classList.remove(className);
      }, {once: true});
    });
  });
};

export {initHoverBlocks};
