export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  constructor(
    color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be a positive numbers');
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(`Sides ${a}, ${b} and ${c} cannot form a triangle`);
    }

    this.color = color;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  constructor(
    color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be positive number.');
    }
    this.color = color;
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  constructor(
    color: string,
    private a: number,
    private b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Rectangle sides must be a positive numbers');
    }
    this.color = color;
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  const colorMap: Record<string, string> = {
    red: 'A red',
    green: 'A green',
    blue: 'A blue',
  };

  const shapeMap: Record<string, string> = {
    triangle: 'triangle',
    circle: 'circle',
    rectangle: 'rectangle',
  };

  const colorPrefix = colorMap[figure.color.toLowerCase()] || 'A';
  const shapeName = shapeMap[figure.shape.toLowerCase()] || 'shape';

  return `${colorPrefix} ${shapeName} - ${figure.getArea()}`;
}
