type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape= 'triangle';

  constructor(public color: Color, public a: number,
    public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('length has to be a positive number');
    }

    if (!this.isValidTriangle()) {
      throw new Error('highest side needs to be lower than sum of other sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }

  private isValidTriangle(): boolean {
    const [a, b, c] = [this.a, this.b, this.c].sort((x, y) => x - y);

    return a + b > c;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, public r: number) {
    if (r <= 0) {
      throw new Error('length has to be a positive number');
    }
  }

  getArea(): number {
    return Math.floor(this.r * this.r * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(public color: Color, public a: number, public b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('length has to be a positive number');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
