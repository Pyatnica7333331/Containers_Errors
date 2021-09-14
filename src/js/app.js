export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Персонаж ${character.name} уже в команде.`);
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const character of characters) {
      if (!this.members.has(character)) {
        this.members.add(character);
      }
    }
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}
