export interface Figure {
  shape: 'triangle' | 'rectangle' | 'circle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Shape implements Figure {
  shape: Figure['shape'];

  color: Figure['color'];

  getArea = ():number => 0;

  constructor(shape:Figure['shape'], color: Figure['color']) {
    this.shape = shape;
    this.color = color;
  }
}

export class Triangle extends Shape {
  sideA: number;

  sideB: number;

  sideC: number;

  constructor(color: Figure['color'], a: number, b: number, c: number) {
    super('triangle', color);

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('Side sizes cant form a triangle.');
    }

    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }

  getArea = ():number => {
    const semi = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(semi * (semi - this.sideA)
      * (semi - this.sideB) * (semi - this.sideC));

    return Math.floor(area * 100) / 100;
  };
}

export class Circle extends Shape {
  radius: number;

  constructor(color: Figure['color'], radius: number) {
    super('circle', color);

    if (radius <= 0) {
      throw new Error('Negative radius cant form a circle');
    }

    this.radius = radius;
  }

  getArea = ():number => {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle extends Shape {
  width: number;

  height: number;

  constructor(color: Figure['color'], width: number, height: number) {
    super('rectangle', color);

    if (width <= 0 || height <= 0) {
      throw new Error('Negative width or height cant form a rectangle');
    }

    this.width = width;
    this.height = height;
  }

  getArea = ():number => Math.floor(this.height * this.width * 100) / 100;
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
