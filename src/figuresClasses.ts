export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

class Triangle implements Figure {
  shape = 'triangle';
  color: string;
  a: number;
  b: number;
  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => x - y);
    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(`Sides ${a}, ${b}, and ${c} can't form a triangle`);
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
  shape = 'circle';
  color: string;
  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;
    return Math.floor(area * 100) / 100;
  }
}

class Rectangle implements Figure {
  shape = 'rectangle';
  color: string;
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
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
  const area = figure.getArea();
  return `A ${figure.color} ${figure.shape} - ${area}`;
}

const redRectangle = new Rectangle('red', 3, 5);
getInfo(redRectangle) === 'A red rectangle - 15';

const greenCircle = new Circle('green', 1);
getInfo(greenCircle) === 'A green circle - 3.14';