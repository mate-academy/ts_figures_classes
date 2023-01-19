export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
  a?: number;
  b?: number;
  c?: number;
  radius?: number;
  width?: number;
  height?: number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sortSide = [this.a, this.b, this.c].sort((acc, prev) => acc - prev);

    if (a <= 0
      || b <= 0
      || c <= 0
      || sortSide[2] >= sortSide[0] + sortSide[1]
    ) {
      throw new Error('incorrect sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const areaTriangle = Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +areaTriangle.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('incorrect sides');
    }
  }

  getArea(): number {
    const areaCircle = Math.PI * this.radius * this.radius;

    return Math.floor(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('incorrect sides');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
