/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/prefer-default-export
export function positionPopover(trigger, popover) {
  const coords = trigger.getBoundingClientRect();
  let left = coords.left + (trigger.offsetWidth - popover.offsetWidth) / 2;
  if (left < 0) left = 0;
  let top = coords.top - popover.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + trigger.offsetHeight + 5;
  }

  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
}
