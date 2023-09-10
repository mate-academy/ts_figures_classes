
export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: string;

  sides: [number, number, number];

  constructor(color: string, ...sides: [number, number, number]) {
    if (sides.some((side) => side <= 0) || this.isNotTriangle(sides)) {
      throw new Error('Invalid triangle');
    }
    this.color = color;
    this.sides = sides;
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  private isNotTriangle = (sides: [number, number, number]): boolean => {
    const [a, b, c] = sides;

    return a + b <= c || a + c <= b || b + c <= a;
  };
}

export class Circle implements Figure {
  shape = 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * (this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = Number(figure.getArea().toFixed(2));

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
