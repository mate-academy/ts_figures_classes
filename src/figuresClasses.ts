type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (!this.isValid()) {
      throw new Error('Not a valid triangle');
    }
  }

  isValid(): boolean {
    const { a, b, c } = this;

    return a > 0
      && b > 0
      && c > 0
      && a < b + c
      && b < a + c
      && c < a + b;
  }

  getArea(): number {
    const { a, b, c } = this;

    const p: number = (a + b + c) / 2;
    const area: number = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: Shapes = 'circle';

  constructor(public color: Colors, public radius:number) {
    if (this.radius <= 0) {
      throw new Error('Not a valid circle');
    }
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor((Math.PI * (radius ** 2)) * 100) / 100;
  }
}

export class Rectangle {
  public shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Not a valid rectangle');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Number((width * height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
