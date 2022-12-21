import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Query {
        getFruit(id: Int!): Fruit
        getFruits: [Fruit]
    }

    type Fruit {
        id: Int!
        name: String!
        category: String!
    }
    
    input FruitInput {
        name: String!
        category: String!
    }

    type Mutation {
        createFruit(input: FruitInput): Fruit
        updateFruit(id: Int!, input: FruitInput): Fruit
    }
`);


export type Fruit = {
    id: number;
    name: string;
    category: string;
}

export type FruitInput = 
    Pick<Fruit, 'name' | 'category'>