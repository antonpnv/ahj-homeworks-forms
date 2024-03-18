import { positionPopover } from './utils';

let popoverOpen = false;

export function setupClickEvent() {
  document.addEventListener('click', (event) => {
    const { target } = event;
    const popoverHtml = target.getAttribute('data-popover');
    const existingPopover = document.querySelector('.popover');

    if (popoverOpen) {
      if (existingPopover) {
        existingPopover.remove();
        popoverOpen = false;
      }
      return;
    }

    if (!popoverHtml) return;

    const popoverElem = document.createElement('div');
    popoverElem.className = 'popover';
    popoverElem.innerHTML = popoverHtml;
    document.body.append(popoverElem);
    positionPopover(target, popoverElem);

    popoverOpen = true;
  });
}

export function setupMouseOutEvent() {
  document.addEventListener('mouseout', (e) => {
    const { relatedTarget } = e;
    const popoverElem = document.querySelector('.popover');
    if (popoverElem && !relatedTarget.classList.contains('popover')) {
      popoverElem.remove();
    }
  });
}
