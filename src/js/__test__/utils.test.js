import { positionPopover } from '../utils';

test('Позиционирование всплывающего окнарасположение под кнопкой(триггером)', () => {
  document.body.innerHTML = `
    <div class="trigger" style="width: 100px; height: 20px;"></div>
    <div class="popover" style="width: 50px; height: 30px;"></div>
  `;
  const trigger = document.querySelector('.trigger');
  const popover = document.querySelector('.popover');

  // Задаем координаты так, чтобы условие if (top < 0) выполнилось
  trigger.getBoundingClientRect = jest.fn(() => ({
    left: 100,
    top: 20,
    width: 100,
    height: 20,
  }));

  positionPopover(trigger, popover);
  expect(popover.style.top).toEqual('15px');
});

test('Позиционирование всплывающего окна: коррекция левой позиции', () => {
  document.body.innerHTML = `
    <div class="trigger" style="width: 20px; height: 20px;"></div>
    <div class="popover" style="width: 30px; height: 30px;"></div>
  `;
  const trigger = document.querySelector('.trigger');
  const popover = document.querySelector('.popover');

  // Задаем координаты так, чтобы условие if (left < 0) выполнилось
  trigger.getBoundingClientRect = jest.fn(() => ({
    left: -10,
    top: 0,
    width: 20,
    height: 20,
  }));

  positionPopover(trigger, popover);
  expect(popover.style.left).toEqual('0px');
});
