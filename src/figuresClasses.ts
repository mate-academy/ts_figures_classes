// Типи можливих фігур та кольорів
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

// Інтерфейс Figure — загальний контракт для всіх фігур
export interface Figure {
  shape: Shape; // тип фігури
  color: Color; // колір
  getArea(): number; // метод для обчислення площі
}

// Перевірка, що значення додатне (наприклад, довжина сторони > 0)
const mustBePositive = (name: string, value: number): void => {
  if (value <= 0) {
    throw new Error(`${name} must be > 0`);
  }
};

// Допоміжна функція для округлення числа до сотих (2 знаки після коми)
const roundDownToHundredths = (value: number): number => {
  return Math.floor(value * 100) / 100;
};

// Клас для фігури "трикутник"
export class Triangle implements Figure {
  readonly shape: Shape = 'triangle'; // фіксований тип фігури

  constructor(
    public color: Color, // колір трикутника
    public a: number, // сторона a
    public b: number, // сторона b
    public c: number, // сторона c
  ) {
    // перевіряємо, що всі сторони > 0
    mustBePositive('a', a);
    mustBePositive('b', b);
    mustBePositive('c', c);

    // перевірка, що з цих сторін реально можна побудувати трикутник
    const maxSide = Math.max(a, b, c);
    const sum = a + b + c;

    if (maxSide >= sum - maxSide) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  // Обчислення площі за формулою Герона
  getArea(): number {
    const s = (this.a + this.b + this.c) / 2; // півпериметр
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundDownToHundredths(area);
  }
}

// Клас для фігури "коло"
export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color, // колір кола
    private radius: number, // радіус кола
  ) {
    mustBePositive('radius', radius);
  }

  // Формула площі кола: π * r²
  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundDownToHundredths(area);
  }
}

// Клас для фігури "прямокутник"
export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color, // колір прямокутника
    private width: number, // ширина
    private height: number, // висота
  ) {
    mustBePositive('width', width);
    mustBePositive('height', height);
  }

  // Площа прямокутника: ширина * висота
  getArea(): number {
    const area = this.width * this.height;

    return roundDownToHundredths(area);
  }
}

// Допоміжна функція для зручного виведення інформації про фігуру
export function getInfo(figure: Figure): string {
  // Наприклад: "A red triangle - 15.25"
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}

// -----------------------------------------------------------------------------

// type Shape = 'triangle' | 'circle' | 'rectangle';
// type Color = 'red' | 'green' | 'blue';

// export interface Figure {
//   shape: Shape;
//   color: Color;
//   getArea(): number;
// }

// const mustBePositive = (name: string, value: number): void => {
//   if (value <= 0) {
//     throw new Error(`${name} must be > 0`);
//   }
// };

// export class Triangle implements Figure {
//   shape: Shape = 'triangle';

//   constructor(
//     public color: Color,
//     public a: number,
//     public b: number,
//     public c: number,
//   ) {
//     mustBePositive('a', a);
//     mustBePositive('b', b);
//     mustBePositive('c', c);

//     const maxSide = Math.max(a, b, c);
//     const sum = a + b + c;

//     if (maxSide >= sum - maxSide) {
//       throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
//     }
//   }

//   getArea(): number {
//     const s = (this.a + this.b + this.c) / 2;

//     const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

//     return Math.floor(area * 100) / 100;
//   }
// }

// export class Circle implements Figure {
//   shape: Shape = 'circle';

//   constructor(
//     public color: Color,
//     private radius: number,
//   ) {
//     mustBePositive('radius', radius);
//   }

//   getArea(): number {
//     const area = Math.PI * this.radius * this.radius;

//     return Math.floor(area * 100) / 100;
//   }
// }

// export class Rectangle implements Figure {
//   shape: Shape = 'rectangle';

//   constructor(
//     public color: Color,
//     private width: number,
//     private height: number,
//   ) {
//     mustBePositive('width', width);
//     mustBePositive('height', height);
//   }

//   getArea(): number {
//     const area = this.width * this.height;

//     return Math.floor(area * 100) / 100;
//   }
// }

// export function getInfo(figure: Figure): string {
//   return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
// }
