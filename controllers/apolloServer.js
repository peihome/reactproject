// Connect to MongoDB
require('../controllers/mongoDBConnect');

module.exports = (app) => {

    const {ApolloServer} = require("apollo-server-express");
    const Employee = require('../models/employee');

    const { GraphQLScalarType } = require('graphql');
    const GraphQLDate = new GraphQLScalarType({
        name: 'GraphQLDate',
        description: '',
        serialize(value) {
            return value.toISOString().split('T')[0];
        }
    });

    //Apollo server
    const mySchema = `
        scalar GraphQLDate

        type Employee {
            id: String!
            FirstName: String!
            LastName: String!
            Age: Int!
            DateOfJoining: GraphQLDate!
            Title: String!
            Department: String!
            EmployeeType: String!
            CurrentStatus: Boolean!
        }

        type Query {
            getAllEmployees: [Employee]
        }
    
        type Mutation {
            createEmployee(
                FirstName: String!,
                LastName: String!,
                Age: Int!,
                DateOfJoining: GraphQLDate!,
                Title: String!,
                Department: String!,
                EmployeeType: String!
            ): Employee
        }      
    `;

    const resolvers = {
        GraphQLDate,
        Query: {
            getAllEmployees: async (_) => {
                return await Employee.find({});
            }
        },
        Mutation: {
            createEmployee: async (_, args) => {
                const newEmployee = {
                    FirstName: args.FirstName,
                    LastName: args.LastName,
                    Age: args.Age,
                    DateOfJoining: args.DateOfJoining,
                    Title: args.Title,
                    Department: args.Department,
                    EmployeeType: args.EmployeeType
                }
                return (await Employee.create(newEmployee));
            }
        }
    };
    
    const server = new ApolloServer({typeDefs : mySchema, resolvers : resolvers});
    server.start().then(() => {
        server.applyMiddleware({app, path:'/graphql'});
    });
}