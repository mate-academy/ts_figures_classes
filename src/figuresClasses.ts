export interface Figure {
  color: 'red' | 'green' | 'blue';
  getArea(): number | Error
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public aSide: number,
    public bSide: number,
    public cSide: number,
  ) {
    const a: number = aSide;
    const b: number = bSide;
    const c: number = cSide;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('one of sides is equal 0 or less');
    }

    if (a >= b + c || b >= c + a || c >= b + a) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number | Error {
    const a: number = this.aSide;
    const b: number = this.bSide;
    const c: number = this.cSide;

    const s: number = (a + b + c) / 2;
    const area: number = s * (s - a) * (s - b) * (s - c);

    return Math.floor(Math.sqrt(area) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(public color: 'red' | 'green' | 'blue', public radius: number) {
    if (radius <= 0) {
      throw new Error('radius is equal 0 or less');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public aSide: number,
    public bSide: number,
  ) {
    if (aSide <= 0 || bSide <= 0) {
      throw new Error('one of sides is equal 0 or less');
    }
  }

  getArea(): number | Error {
    return this.aSide * this.bSide;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
