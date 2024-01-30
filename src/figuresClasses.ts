type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red'| 'green' | 'blue';

export interface Figure {
  shape: ShapeType,
  color: ColorType,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: ShapeType = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('side must not be < 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return (Math.floor(area * 100)) / 100;
  }
}

export class Circle implements Figure {
  shape: ShapeType = 'circle';

  constructor(
    public color: ColorType,
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error('radius must not be < 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.a ** 2);

    return (Math.floor(area * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapeType = 'rectangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('side must not be < 0');
    }
  }

  getArea():number {
    const area = this.a * this.b;

    return (Math.floor(area * 100)) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
