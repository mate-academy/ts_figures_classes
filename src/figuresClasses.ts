export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'blue' | 'green';
  getArea(): number;
}

export class Triangle implements Figure {
  color: 'red' | 'blue' | 'green';
  shape: 'triangle' = 'triangle';
  a: number;
  b: number;
  c: number;

  constructor(color: 'red' | 'blue' | 'green', a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Sides must be positive numbers: a= ${a}, b= ${b}, c= ${c}`);
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}

export class Circle implements Figure {
  radius: number;
  color: 'red' | 'blue' | 'green';
  shape: 'circle' = 'circle';

  constructor(color: 'red' | 'blue' | 'green', radius: number) {
    this.radius = radius;
    this.color = color;
    if (radius <= 0) {
      throw new Error(`Radius must be > 0 (got ${radius})`);
    }
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

export class Rectangle implements Figure {
  width: number;
  height: number;
  color: 'red' | 'blue' | 'green';
  shape: 'rectangle' = 'rectangle';

  constructor(color: 'red' | 'blue' | 'green' , width: number, height: number) {
    this.width = width;
    this.height = height;
    this.color = color;
    if (width <= 0 || height <= 0) {
      throw new Error(`Width and height must be > 0 (got width=${width}, height=${height})`);
    }
  }
  
  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  let area: number;
  if (figure.shape === 'triangle') {
    area = (figure as Triangle).getArea();
  } else if (figure.shape === 'circle') {
    area = (figure as Circle).getArea();
  } else if (figure.shape === 'rectangle') {
    area = (figure as Rectangle).getArea();
  } else {
    throw new Error('Unknown figure shape');
  }

  const formattedArea = parseFloat(area.toFixed(2));
  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
