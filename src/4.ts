class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  public abstract openDoor(key: Key): void;

  public comeIn(person: Person): void {
    this.door ? this.tenants.push(person) : console.log('Door is closed!');
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key) {
    key.getSignature() === this.key.getSignature()
      ? (this.door = true)
      : (this.door = false);
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
