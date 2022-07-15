export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: 'red',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('Error haha');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error haha');
    }
  }

  public getArea(): number {
    const semi = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semi
      * (semi - this.a) * (semi - this.b) * (semi - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: 'red',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error haha');
    }
  }

  getArea(): number {
    const resultCircle = (Math.PI
      * (this.radius * this.radius)).toFixed(3).toString().slice(0, -1);

    return +resultCircle;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: 'red',
    public width: number,
    public height: number,
  ) {
    if (this.shape.length <= 0 || color.length <= 0
      || width <= 0 || height <= 0) {
      throw new Error('Error haha');
    }
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
