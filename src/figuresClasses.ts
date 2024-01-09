export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(
    public color: Figure['color'],
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Values is not entered correctly');
    }

    const sortSide: number[] = [this.a, this.b, this.c]
      .sort((side1, side2) => side1 - side2);

    if (sortSide[0] + sortSide[1] <= sortSide[2]) {
      throw new Error('Values is not entered correctly');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const a: number = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(a * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(
    public color: Figure['color'],
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Values is not entered correctly');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(
    public color: Figure['color'],
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Values is not entered correctly');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
