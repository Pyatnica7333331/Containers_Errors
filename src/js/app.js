export default class Validator {
  validateUsername(nickname) {
    if (!/[\d]{3,}/g.test(nickname) && !/[^\w-]/.test(nickname) && /^[a-z]+/i.test(nickname) && /[\w-]+[^\d_-]*$/.test(nickname)) {
      this.nickname = nickname;
      return true;
    } return false;
  }
}
