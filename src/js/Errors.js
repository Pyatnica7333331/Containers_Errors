export default class ErrorRepository {
  constructor(errors = []) {
    this.errors = new Map();
    errors.forEach(
      (error) => {
        const { code, text } = error;
        this.add(code, text);
      },
    );
  }

  add(code, text) {
    this.errors.set(code, text);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
