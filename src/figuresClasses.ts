export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle {
  shape: 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a >= (b + c) || b >= (a + c) || c >= (a + b)) {
      throw new Error('invalid side length for triangle');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(p * (p - this.a)
      * (p - this.b) * (p - this.c)) * 100) / 100;
  }
}

export class Circle {
  shape: 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be > 0');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width must be > 0, height must be > 0');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
//   shape: 'triangle' | 'circle' | 'rectangle';
//   color: 'red' | 'green' | 'blue';
//   getArea(): number;
// }

// class Triangle {
//   shape: 'triangle';

//   color: 'red' | 'green' | 'blue';

//   a: number;

//   b: number;

//   c: number;

//   constructor(color: 'red' | 'green' | 'blue',
//     a: number, b: number, c: number) {
//     if (a >= (b + c) || b >= (a + c) || c >= (a + b)) {
//       throw new Error('invalid side length for triangle');
//     }

//     this.shape = 'triangle';
//     this.color = color;
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }

//   getArea(): number {
//     const p = (this.a + this.b + this.c) / 2;

//     return Math.floor(Math.sqrt(p * (p - this.a)
//       * (p - this.b) * (p - this.c)) * 100) / 100;
//   }
// }

// class Circle {
//   shape: 'circle';

//   color: 'red' | 'green' | 'blue';

//   radius: number;

//   constructor(color: 'red' | 'green' | 'blue', radius: number) {
//     if (radius <= 0) {
//       throw new Error('radius must be > 0');
//     }

//     this.shape = 'circle';
//     this.color = color;
//     this.radius = radius;
//   }

//   getArea(): number {
//     return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
//   }
// }

// class Rectangle {
//   shape: 'rectangle';

//   color: 'red' | 'green' | 'blue';

//   width: number;

//   height: number;

//   constructor(color: 'red' | 'green' | 'blue',
//     width: number, height: number) {
//     if (width <= 0 || height <= 0) {
//       throw new Error('width must be > 0, height must be > 0');
//     }

//     this.shape = 'rectangle';
//     this.color = color;
//     this.width = width;
//     this.height = height;
//   }

//   getArea(): number {
//     return Math.floor(this.width * this.height * 100) / 100;
//   }
// }

// function getInfo(figure: Figure): string {
//   return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
// }

// const redRectangle = new Rectangle('red', 3, 5);

// console.log(getInfo(redRectangle));
