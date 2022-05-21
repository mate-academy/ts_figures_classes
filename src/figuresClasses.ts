type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function validation(key: string, value: number) {
  if(value <= 0) {
    throw new Error(`Entered value of ${key} is not valid`);
  }
};

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';
  color: Color;
  a: number;
  b: number;
  c: number;
  
  constructor(a: number, b: number, c: number, color: Color) {
    validation('a', a);
    validation('b', b);
    validation('c', c);

    const triangleSides: number[] = [a, b, c];
    triangleSides.sort((num1, num2) => num1 - num2);

    if (triangleSides[2] >= triangleSides[0] + triangleSides[1]) {
      throw new Error(`sides ${triangleSides[0]}, ${triangleSides[1]} 
        and ${triangleSides[2]} can't form a triangle`);
    };

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  };

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const squareRoot = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(squareRoot);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';
  color: Color;
  radius: number;

  constructor(radius: number, color: Color) {
    validation('radius', radius);

    this.radius = radius;
    this.color = color;
  };

  getArea(): number {
    const circleArea = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(circleArea);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';
  color: Color;
  height: number;
  width: number;
  
  constructor(height: number, width: number, color: Color) {
    validation('height', height);
    validation('width', width);

    this.height = height;
    this.width = width;
    this.color = color;
  };

  getArea(): number {
    return Math.round(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
};
