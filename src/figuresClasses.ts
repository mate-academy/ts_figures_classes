type ShapeType = `triangle` | `circle` | `rectangle`;
type ColorType = `red` | `green` | `blue`;

function checkSidesLength(...sides: number[]): boolean {
  for (const side of sides) {
    if (side <= 0) {
      return false;
    }
  }

  return true;
}

function roundToHundr(n: number): number {
  return Number(parseInt(`${n * 100}`) / 100);
}

export interface Figure {
  shape: ShapeType;
  color: ColorType;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const validSidesLength: boolean = checkSidesLength(this.a, this.b, this.c);
    let validSides: boolean;
    const maxSide = Math.max(this.a, this.b, this.c);

    switch (maxSide) {
      case this.a:
        validSides = maxSide < this.b + this.c;
        break;

      case this.b:
        validSides = maxSide < this.a + this.c;
        break;

      case this.c:
        validSides = maxSide < this.a + this.b;
        break;
    }

    if (!validSidesLength) {
      throw new Error('One of the sides is <= 0');
    }

    if (!validSides) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  public shape: ShapeType = 'triangle';

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return roundToHundr(area);
  }
}

export class Circle implements Figure {
  constructor(
    public color: ColorType,
    public r: number,
  ) {
    const validLength: boolean = checkSidesLength(this.r);

    if (!validLength) {
      throw new Error('The radius is <= 0');
    }
  }

  public shape: ShapeType = 'circle';

  getArea(): number {
    const area: number = Math.PI * (this.r * this.r);

    return roundToHundr(area);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
  ) {
    const validLength: boolean = checkSidesLength(this.a, this.b);

    if (!validLength) {
      throw new Error('One of the sides is <= 0');
    }
  }

  public shape: ShapeType = 'rectangle';

  getArea(): number {
    const area: number = this.a * this.b;

    return roundToHundr(area);
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
