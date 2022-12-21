import { graphqlHTTP } from "express-graphql";
import express from "express";
import {getFruit, getFruits, createFruit, updateFruit} from "./resolver"
import { schema } from "./schema";

const root = {
    getFruit,
    getFruits,
    createFruit,
    updateFruit
}
    
const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    }))


    const PORT = 9000;
    app.listen(PORT)
    console.log(`Running server on http://localhost:${PORT}/graphql`)