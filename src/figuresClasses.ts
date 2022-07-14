// enum Shape {
//   triangle = 'triangle',
//   circle = 'circle',
//   rectangle = 'rectangle',
// }

// enum Color {
//   red = 'red',
//   blue = 'blue',
//   green = 'green',
// }

// export interface Figure {
//   shape: Shape;
//   color: Color;
//   getArea(): number;
// }

// export class Triangle implements Figure {
//   public shape = Shape.triangle;
//   constructor (
//     public color: Color,
//     public a: number,
//     public b: number,
//     public c: number,
//   ) {

//     if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
//       throw new Error ('incorrect value');
//     }
//     const max: number = Math.max(this.a, this.b, this.c);

//     if (max >= (this.a + this.b + this.c - max))  {
//       throw new Error (`sides 1, 2 and 3 can't form a triangle`);
//     }
//   }
//     return +s.toFixed(2);
//    }
// }

// export class Circle implements Figure {
//   public shape = Shape.circle;

//   constructor (
//     public color: Color,
//     public radius: number,
//   ) {

//     if (this.radius <= 0) {
//       throw new Error('incorrect value');
//     }
//   }
//   getArea(): number {
//     const s: number =  Math.PI * this.radius * this.radius;

//     return Math.floor(s * 100) / 100;
//   }
// }

// export class Rectangle implements Figure {
//   public shape = Shape.rectangle;

//   constructor (
//     public color: Color,
//     public width: number,
//     public height: number,
//   ) {

//     if (this.width <= 0 || this.width <= 0) {
//       throw new Error('incorrect value');
//     }
//   }
//   getArea(): number {
//     const s: number =  this.width * this.height;

//     return +s.toFixed(2);
//   }
// }

// export function getInfo(figure: Figure): string {
//   return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
// }

enum Shape {
  triangle = 'triangle',
  rectangle = 'rectangle',
  circle = 'circle'
}
enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Incorrect value');
    }

    const max: number = Math.max(this.a, this.b, this.c);

    if (max >= (this.a + this.b + this.c - max)) {
      throw new Error('Sides of triangle not correct');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const s: number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +s.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Incorrect value');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Incorrect value');
    }
  }

  getArea(): number {
    const s: number = this.width * this.height;

    return +s.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
