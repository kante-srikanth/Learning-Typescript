// class DataStorage<T> {
//   private data: T[] = [];
//   addItem(item: T) {
//     this.data.push(item);
//   }
//   removeItem<U>(item: T) {
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItem() {
//     return [...this.data];
//   }
// }

// const stringStorage = new DataStorage<number>();
// stringStorage.addItem(1);
// stringStorage.addItem(2);
// stringStorage.removeItem<string>(2);

// console.log(stringStorage.getItem());

// function Logger(greeting: string) {
//   return function (constructor: any) {
//     let person = new constructor();
//     let header = document.getElementById("heading") as HTMLHeadingElement;
//     header.innerText = `${greeting} ${person.name}`;
//   };
// }

// @Logger("HELLO")
// class Personnnnn {
//   name: string = "KANTE";
//   constructor() {
//     console.log("creating person object");
//   }
// }

// /************ AUTO BINDING THIS USING DECORATORS */

// function Log(target: any, property: string | Symbol) {
//   console.log("property decorator");
//   console.log(target, property);
// }
// function Autobind(
//   target: any,
//   methodName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };
//   return adjDescriptor;
// }

// class Product1 {
//   title = "KANTE...";
//   constructor() {
//     console.log("creating product instance");
//   }

//   @Autobind
//   getTitle() {
//     console.log(this.title);
//   }
// }
// let p = new Product1();
// const button = document.querySelector("#button")!;
// button.addEventListener("click", p.getTitle);
