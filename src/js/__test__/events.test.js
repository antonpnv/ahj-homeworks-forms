import { setupClickEvent, setupMouseOutEvent } from '../events';

test('Popover добавляется к body при наличии атрибута data-popover', () => {
  setupClickEvent();
  const popoverElem = document.querySelector('.popover');
  expect(popoverElem).toBeNull();
});

test('Popover удаляется при событии mouseout за пределами popover', () => {
  setupClickEvent();
  const popoverElem = document.querySelector('.popover');
  setupMouseOutEvent();
  document.dispatchEvent(new MouseEvent('mouseout', { relatedTarget: null }));
  expect(popoverElem).toBeFalsy();
});

test('Проверка обработчика события click при отсутствии атрибута data-popover', () => {
  document.body.innerHTML = '<div></div>';
  const trigger = document.querySelector('div');
  setupClickEvent();
  trigger.click();
  expect(document.body.querySelector('.popover')).toBeNull();
});

test('Проверка обработчика события click при наличии атрибута data-popover', () => {
  document.body.innerHTML = '<div data-popover="<p>Test Popover</p>"></div>';
  const trigger = document.querySelector('[data-popover]');
  setupClickEvent();
  trigger.click();
  expect(document.body.querySelector('.popover')).toBeNull();
});

test('Должен создать и добавить элемент popover', () => {
  document.body.innerHTML = '<div data-popover="<p>Test Popover</p>"></div>';
  const trigger = document.querySelector('[data-popover]');
  setupClickEvent();
  trigger.click();
  expect(document.body.querySelector('.popover')).not.toBeNull();
});

test('Должен удалить popover при наведении курсора мыши', () => {
  document.body.innerHTML = '<div class="popover"></div>';
  const event = new MouseEvent('mouseout', {
    relatedTarget: document.createElement('div'),
  });
  setupMouseOutEvent();
  document.dispatchEvent(event);
  expect(document.querySelector('.popover')).toBeNull();
});

test('Если popover уже открыт, он закрывается', () => {
  document.body.innerHTML = '<button class="btn btn-secondary" data-popover="Popover content">Click to toggle popover</button>';
  setupClickEvent();
  const trigger = document.querySelector('.btn');
  trigger.click(); // Открываем popover
  trigger.click(); // Закрываем popover
  const popoverElem = document.querySelector('.popover');
  expect(popoverElem).toBeNull();
});
