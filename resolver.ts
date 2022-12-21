import { fruits } from './data';
import { Fruit, FruitInput } from './schema';

// resolver:
export const getFruit = (args: { id: number }): Fruit | undefined =>
  fruits.find((fruit) => fruit.id === args.id);

export const getFruits = (): Fruit[] => fruits;

export const createFruit = (args: { input: FruitInput }): Fruit => {
  const fruit = {
    id: fruits.length + 1,
    ...args.input,
  };
  fruits.push(fruit);
  return fruit;
};

export const updateFruit = (args: { fruit: Fruit }): Fruit => {
  const index = fruits.findIndex((fruit) => fruit.id === args.fruit.id);
  const targetFruit = fruits[index];

  if (targetFruit) fruits[index] = args.fruit;

  return targetFruit;
};
