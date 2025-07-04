export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  constructor(public color: 'red' | 'green' | 'blue', public a: number, public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All triangle sides must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => x - y);
    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error('Triangle inequality violated: longest side must be less than the sum of the other two');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  constructor(public color: 'red' | 'green' | 'blue', public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  constructor(public color: 'red' | 'green' | 'blue', public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;
    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}

