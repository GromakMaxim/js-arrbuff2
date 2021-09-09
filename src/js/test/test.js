import ArrayBufferConverter from '../ArrayBufferConverter.js';
import getBuffer from '../getBuffer.js';

test('Проверка добавления буффера в загрузчик', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  const expected = '{\"data\":{\"user\":{\"id\":1,\"name\":\"Hitman\",\"level\":10}}}';
  const actual = converter.toString();
  expect(actual).toBe(expected);
});
