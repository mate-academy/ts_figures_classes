// src/figuresClasses.ts

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    if (
      !Number.isFinite(a) || a <= 0 ||
      !Number.isFinite(b) || b <= 0 ||
      !Number.isFinite(c) || c <= 0
    ) {
      throw new Error('Triangle sides must be finite positive numbers');
    }

    const longest = Math.max(a, b, c);

    if (longest >= a + b + c - longest) {
      throw new Error(`Sides ${a}, ${b}, ${c} can't form a triangle`);
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  private radius: number;

  constructor(color: Color, radius: number) {
    if (!Number.isFinite(radius) || radius <= 0) {
      throw new Error('Circle radius must be a finite positive number');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  private width: number;

  private height: number;

  constructor(color: Color, width: number, height: number) {
    if (!Number.isFinite(width) || width <= 0 || !Number.isFinite(height) || height <= 0) {
      throw new Error('Rectangle width and height must be finite positive numbers');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}

export { Figure, Triangle, Circle, Rectangle, getInfo };
