export interface Figure {
  shape: string;
  color: string;
  getArea: ()=> number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: string;

  a: number;

  b: number;

  c: number;

  constructor(
    color: string, a: number, b: number, c: number,
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
    // Oblicz połowę obwodu
    const s = (this.a + this.b + this.c) / 2;

    // wzór Herona
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return area;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: string;

  radius: number;

  constructor(
    color: string, radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('should be > 0');
    }
  }

  getArea(): number {
    // Oblicz
    const pi = Math.PI;
    const area = pi * this.radius ** 2;

    const answer = Math.floor(area * 100) / 100;

    return answer;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: string;

  width: number;

  height: number;

  constructor(
    color: string, width: number, height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('should be > 0');
    }
  }

  getArea(): number {
    // Oblicz
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
