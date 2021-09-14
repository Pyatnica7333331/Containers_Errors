import Team from '../app';

const zombie1 = {
  name: 'zombie1',
  health: 100,
  level: 1,
  type: 'Zombie',
};

const daemon2 = {
  name: 'daemon2',
  health: 100,
  level: 1,
  type: 'Daemon',
};

test('выброс ошибки при дублировании персонажа', () => {
  function testError() {
    const test = new Team();
    test.add(zombie1);
    test.add(zombie1);
  }
  expect(testError).toThrowError('Персонаж zombie1 уже в команде.');
});

test('добавление неповторяющихся персонажей в Set', () => {
  function test() {
    const team = new Team();
    team.add(zombie1);
    team.addAll(zombie1, daemon2);
    return team;
  }
  const testAddAll = new Set();
  expect(test().members).toEqual(testAddAll.add(zombie1).add(daemon2));
});

test('добавление нескольких персонажей в Set', () => {
  const testAddAll = new Set();
  const team = new Team();
  team.addAll(zombie1, daemon2);
  expect(team.members).toEqual(testAddAll.add(zombie1).add(daemon2));
});

test('конвертирование Set в массив', () => {
  const testArrSet = new Set();
  const team = new Team();
  team.toArray();
  expect(team.members).toEqual(Array.from(testArrSet));
});
