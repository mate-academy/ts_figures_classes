export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    private readonly a: number,
    private readonly b: number,
    private readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All side lengths must be positive numbers.');
    }

    if (a + b <= c || c + b <= a || a + c <= b) {
      throw new Error('Os lados fornecidos não formam um triângulo válido.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    private readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    private readonly width: number,
    private readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers.');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return typeof figure;
}
