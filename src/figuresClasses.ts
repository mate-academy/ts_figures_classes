export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(public color: string, private a: number,
    private b: number, private c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw Error('Wrong dimensions');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(public color: string, private radius: number) {
    if (radius <= 0) {
      throw new Error('Wrong radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    const areaString = area.toFixed(3);
    const roundedArea = areaString.slice(0, -1);

    return parseFloat(roundedArea);
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(public color: string, private width: number,
    private height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wrong dimensions');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return parseFloat(area.toFixed(2));
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
