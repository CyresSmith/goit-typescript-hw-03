class Key {
  private signature: number = Math.random();

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
  protected door: boolean = false;
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
    this.door = key.getSignature() === this.key.getSignature();
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
