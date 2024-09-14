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
      throw new Error(
        'Each side of the triangle must be a positive number greater than 0',
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `The provided dimensions ${a}, ${b}, and ${c} do not meet the triangle inequality theorem and can't form a triangle.`,
      );
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
    return `${this.color} triangle with sides ${this.a}, ${this.b}, and ${this.c} - Area: ${this.getArea()}`;
  }
}

class Circle implements Figure {
  constructor(
    private color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'The radius of a circle must be a positive number greater than zero.',
      );
    }
  }

  getArea(): number {
    return Math.round(Math.PI * this.radius * this.radius * 100) / 100;
  }

  getInfo(): string {
    return `${this.color} circle with radius ${this.radius} - Area: ${this.getArea()}`;
  }
}

class Rectangle implements Figure {
  constructor(
    private color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Width,height of a rectangle must be positive numbers greater than 0',
      );
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }

  getInfo(): string {
    return `${this.color} rectangle with dimensions ${this.width}x${this.height} - Area: ${this.getArea()}`;
  }
}

const triangle = new Triangle('red', 3, 4, 5);
const circle = new Circle('blue', 10);
const rectangle = new Rectangle('green', 5, 10);

console.log(triangle.getInfo());
console.log(circle.getInfo());
console.log(rectangle.getInfo());
