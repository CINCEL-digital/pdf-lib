import { DocumentSnapshot } from './DocumentSnapshot';

export class IncrementalDocumentSnapshot implements DocumentSnapshot {
  private lastObjectNumber: number;
  private indirectObjects: number[];

  constructor(lastObjectNumber: number, indirectObjects: number[]) {
    this.lastObjectNumber = lastObjectNumber;
    this.indirectObjects = indirectObjects;
  }

  shouldSave(objectNumber: number): boolean {
    if (objectNumber > this.lastObjectNumber) {
      return true;
    }
    if (this.indirectObjects.includes(objectNumber)) {
      return true;
    }

    return false;
  }
}
