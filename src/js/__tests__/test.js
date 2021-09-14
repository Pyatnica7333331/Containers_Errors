import ErrorRepository from '../Errors';

test('Неизвестная ошибка', () => {
  const errorRepository = new ErrorRepository();
  const received = errorRepository.translate(404);
  expect(received).toBe('Unknown error');
});

test('Получение текста ошибки', () => {
  const errorRep = new ErrorRepository();
  errorRep.add(100, 'Something');
  const received = errorRep.translate(100);
  expect(received).toBe('Something');
});

test('Заполнение реппозитория', () => {
  const errorRep = new ErrorRepository([
    { code: 404, text: 'Hero is not found' },
  ]);
  const received = errorRep.translate(404);
  expect(received).toBe('Hero is not found');
});
