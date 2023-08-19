enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(public color: Color,
    public a: number, public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(s * (s - this.a)
     * (s - this.b) * (s - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(public color: Color,
    public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}

// enum Color {
//   Red = 'red',
//   Green = 'green',
//   Blue = 'blue',
// }

// enum Shape {
//   Triangle = 'triangle',
//   Circle = 'circle',
//   Rectangle = 'rectangle',
// }

// export interface Figure {
//   shape: Shape;
//   color: Color;
//   getArea(): number;
// }

// export class Triangle implements Figure {
//   shape: Shape = Shape.Circle;

//   constructor(public color: Color, public radius: number) {
//   if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
//       throw new Error('Invalid sides for a triangle');
//     }

//     this.color = color;
//     this.sides = [a, b, c];
//   }

//   getArea(): number {
//     const [a, b, c] = this.sides;
//     const s = (a + b + c) / 2;

//     return +(Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2);
//   }
// }

// export class Circle implements Figure {
//   shape = 'circle';

//   color: string;

//   radius: number;

//   constructor(color: string, radius: number) {
//     if (radius <= 0) {
//       throw new Error('Invalid radius for a circle');
//     }
//     this.color = color;
//     this.radius = radius;
//   }

//   getArea(): number {
//     return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
//   }
// }

// export class Rectangle implements Figure {
//   shape = 'rectangle';

//   color: string;

//   width: number;

//   height: number;

//   constructor(color: string, width: number, height: number) {
//     if (width <= 0 || height <= 0) {
//       throw new Error('Invalid dimensions for a rectangle');
//     }
//     this.color = color;
//     this.width = width;
//     this.height = height;
//   }

//   getArea(): number {
//     return +(this.width * this.height).toFixed(2);
//   }
// }

// export function getInfo(figure: Figure): string {
//   return `A ${figure.color} ${figure.shape}`
//   + ` - ${figure.getArea()}`;
// }
