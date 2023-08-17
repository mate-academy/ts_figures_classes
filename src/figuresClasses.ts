export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'blue' | 'green';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Figure['shape'] = 'triangle';

  color: Figure['color'];

  a: number;

  b: number;

  c: number;

  constructor(
    color: Figure['color'], a: number, b: number, c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('should be > 0');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b) {
      throw new Error('impossible rectangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    //  Heron
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return area;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'] = 'circle';

  color: Figure['color'];

  radius: number;

  constructor(
    color: Figure['color'], radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('should be > 0');
    }
  }

  getArea(): number {
    const pi = Math.PI;
    const area = pi * this.radius ** 2;

    const answer = Math.floor(area * 100) / 100;

    return answer;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'] = 'rectangle';

  color: Figure['color'];

  width: number;

  height: number;

  constructor(
    color: Figure['color'], width: number, height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('should be > 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  if (figure.shape === 'rectangle') {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea().toFixed(0)}`;
  }

  return `A ${figure.color} ${figure.shape} - ${figure.getArea().toFixed(2)}`;
}
