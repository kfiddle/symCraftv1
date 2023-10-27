export class Part {
  constructor(instId, rank) {
    this.rank = rank ? +rank : null;
    this.inst = instId;
  }
}
export class Chair {
  constructor(part) {
    this.gig = '12';
    this.pieceNum = '3';
    this.parts = [part];
  }

  add(part) {
    this.parts.push(part);
  }
}
