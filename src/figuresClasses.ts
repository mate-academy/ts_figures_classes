export interface Figure {
  shape: 'triangle' | 'rectangle' | 'circle';
  getArea(): number;
  color: 'green' | 'red' | 'blue';
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  color: Figure['color'];

  side1: number;

  side2: number;

  side3: number;

  constructor(color: 'red' | 'green' | 'blue',
    side1: number, side2: number,
    side3: number) {
    this.color = color;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    if (side1 + side2 <= side3
      || side1 + side3 <= side2
      || side2 + side3 <= side1
      || side1 <= 0
      || side2 <= 0
      || side3 <= 0) {
      throw new Error('side 1, 2, 3 cannot form a triangle');
    }
  }

  getArea(): number {
    const s = (this.side1 + this.side2 + this.side3) / 2;

    return Math.floor(Math.sqrt(s * (s - this.side1)
    * (s - this.side2) * (s - this.side3)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  color: Figure['color'];

  radius: number;

  constructor(color: 'red' | 'green' | 'blue',
    radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('can not create circle with this radius');
    }
  }

  getArea(): number {
    const s = Math.PI * this.radius * this.radius;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  color: Figure['color'];

  side1: number;

  side2: number;

  constructor(color: 'red' | 'green' | 'blue',
    side1: number,
    side2: number) {
    this.color = color;
    this.side1 = side1;
    this.side2 = side2;

    if (side1 <= 0 || side2 <= 0) {
      throw new Error('can not create rectangle with this sides');
    }
  }

  getArea(): number {
    const s = this.side1 * this.side2;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
