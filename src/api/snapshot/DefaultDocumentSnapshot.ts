import { DocumentSnapshot } from './DocumentSnapshot';

export class DefaultDocumentSnapshot implements DocumentSnapshot {
  shouldSave(_objectNumber: number): boolean {
    return true;
  }
}

export const defaultDocumentSnapshot = new DefaultDocumentSnapshot();
