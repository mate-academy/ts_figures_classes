type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    const arrayOfSides = [a, b, c];
    const filtered = arrayOfSides.filter((el) => el <= 0);
    const IndexOfTheBiggest = arrayOfSides
      .indexOf(Math.max.apply(true, arrayOfSides));
    const newArray = arrayOfSides.splice(IndexOfTheBiggest, 1);
    const sumOfTheRest = arrayOfSides.reduce((sum, el) => sum + el, 0);

    if (sumOfTheRest === newArray[0] || filtered.length) {
      throw new Error('Error: this triangle is impossible');
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(semiP * (semiP - this.a)
    * (semiP - this.b) * (semiP - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Error: this circle is impossible');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error: this Rectangle is impossible');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
