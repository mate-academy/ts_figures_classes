type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  checkTriangle(): boolean {
    return this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.checkTriangle()) {
      throw new Error(
        `sides ${this.a}, ${this.b}, ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.floor(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
    ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius <= 0');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * this.radius * this.radius * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and Height should be > 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return +(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
