import { NumbersCollection } from './NumbersCollection';
export class Sorter {
  constructor(public collection: NumbersCollection) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
