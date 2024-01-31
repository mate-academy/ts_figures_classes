export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue';
  getArea: () => number
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' | 'circle' | 'rectangle',
    public getArea = (): number => {
      // const { a, b, c } = this;
      const semiP = (a + b + c) / 2;
      const area = Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));

      return Math.floor(area * 100) / 100;
    },
  ) {
    this.shape = 'triangle';

    if (
      a <= 0
      || b <= 0
      || c <= 0
      || (a + c <= b)
      || (a + b <= c)
      || (b + c <= a)
    ) {
      throw new Error('error');
    }
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape: 'triangle' | 'circle' | 'rectangle',
    public getArea = (): number => Math.floor(
      Math.PI * this.radius ** 2 * 100,
    ) / 100,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('error');
    }
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public height: number,
    public width: number,
    public shape: 'triangle' | 'circle' | 'rectangle',
    public getArea = (): number => this.width * this.height,
  ) {
    this.shape = 'rectangle';

    if (height <= 0 || width <= 0) {
      throw new Error('error');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
