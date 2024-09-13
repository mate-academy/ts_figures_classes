import { get } from 'http';

interface Figure {
  getArea(): number;
  getInfo(): string;
}

class Triangle implements Figure {
  constructor(
    private color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length cannot be zero or negative');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b}, and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.round(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }

  getInfo(): string {
    return `${this.color} triangle - ${this.getArea()}`;
  }
}

class Circle implements Figure {
  constructor(
    private color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be zero or negative');
    }
  }

  getArea(): number {
    return Math.round(Math.PI * this.radius * this.radius * 100) / 100;
  }

  getInfo(): string {
    return `${this.color} circle - ${this.getArea()}`;
  }
}

class Rectangle implements Figure {
  constructor(
    private color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }

  getInfo(): string {
    return `${this.color} rectangle - ${this.getArea()}`;
  }
}

function getInfo(figure: Figure): string {
  return figure.getInfo();
}
