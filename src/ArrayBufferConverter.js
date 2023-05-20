export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  // Метод load загружает буффер
  load(buffer) {
    this.buffer = buffer;
  }

  // Преобразует содержимое загруженного буфера в строку
  toString() {
    // если ничего нет возвращаем пустую строку
    if (!this.buffer) {
      return '';
    }

    // Создаем переменную для отображения значений буффера
    const bufferView = new Uint16Array(this.buffer);
    let result = '';
    // В цикле еребираем каждое значение bufferView преобразуя в строку
    for (let i = 0; i < bufferView.length; i += 1) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}
