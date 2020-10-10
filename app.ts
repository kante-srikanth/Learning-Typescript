interface validatorsOption {
  [property: string]: {
    [validatorProp: string]: string[];
  };
}

const registeredValidators: validatorsOption = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...registeredValidators[target.constructor.name][propName],
      "positive",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const validatorsObj = registeredValidators[obj.constructor.name];
  if (!validatorsObj) {
    return true;
  }
  let isValid = true;
  for (const prop in validatorsObj) {
    for (const validator of validatorsObj[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Product {
  @Required
  title: string;

  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const form = document.querySelector("form")!;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value;

  const createdProduct = new Product(title, price);
  if (!validate(createdProduct)) {
    alert("invalid");
    return;
  }
  console.log(createdProduct);
});
