import { ArrayBufferConverter, getBuffer } from '../index';

describe('ArrayBufferConverter', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = getBuffer(data);
  const converter = new ArrayBufferConverter();

  it('Загруженного значения в ArrayBufferConverter нет', () => {
    expect(converter.buffer).toBeNull();
  });

  it('Загружаем значения в ArrayBufferConverter', () => {
    converter.load(buffer);
    expect(converter.buffer).toBeTruthy();
  });

  it('Проверяем работу метода toString возвращающий объект json', () => {
    const result = converter.toString();
    expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
});
