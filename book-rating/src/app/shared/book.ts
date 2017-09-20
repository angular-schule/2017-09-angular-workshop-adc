export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public description: string,
    public rating: number = 0
  ) {

  }

  rateUp() {
    if (this.rating < 5) {
      this.rating++;
    }
  }

  rateDown() {
    if (this.rating > 0) {
      this.rating--;
    }
  }

  get rateUpAllowed() {
    return this.rating < 5;
  }

  get rateDownAllowed() {
    return this.rating > 0;
  }
}
