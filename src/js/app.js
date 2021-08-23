export default class Validator {
  validateUsername(nickname) {
    if (!/[\d]{3,}/g.test(nickname) && !/[^\w-]/.test(nickname) && /^[a-z]+[\w]+/i.test(nickname) && /[^\d_-\W]+$/.test(nickname)) {
      this.nickname = nickname;
      return true;
    } return false;
  }
}
