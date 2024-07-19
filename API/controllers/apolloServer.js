// Connect to MongoDB
require('../controllers/mongoDBConnect');
const handleValidation = require('./validationModule.js');

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
            id: String
            empId: Int
            FirstName: String
            LastName: String
            Age: Int
            DateOfJoining: GraphQLDate
            Title: String
            Department: String
            EmployeeType: String
            CurrentStatus: Boolean
        }

        type Response {
            code: Int!
            message: String!
        }

        type Query {
            getEmployeeById(empId: Int!): Employee,
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

            updateEmployee(
                empId: Int!,
                FirstName: String,
                LastName: String,
                Age: Int,
                DateOfJoining: String,
                Title: String,
                Department: String,
                EmployeeType: String,
                CurrentStatus: Boolean
            ): Employee

            deleteEmployee(empId: Int!): Response
        }      
    `;

    const resolvers = {
        GraphQLDate,
        Query: {
            getEmployeeById: async (_, { empId }) => {
                return await Employee.findOne({empId :empId});
            },

            getAllEmployees: async (_) => {
                return await Employee.find({});
            }
        },
        Mutation: {
            createEmployee: async (_, args) => {

                const validationErrors = handleValidation(args);
                if (validationErrors.length > 0) {
                    throw new Error(validationErrors);
                }

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
            },
            
            updateEmployee: async (_, args) => {
                const updateEmployee = {
                    Title: args.Title,
                    Department: args.Department,
                    EmployeeType: args.EmployeeType,
                    CurrentStatus: args.CurrentStatus
                }

                return await Employee.findOneAndUpdate({empId: args.empId}, updateEmployee, { new: true });
            },

            deleteEmployee:  async (_, args) => {
                let Response = {
                    code: 500,
                    message: "Error"
                };

                try {
                    const deletedEmployee = await Employee.findOneAndDelete({empId: args.empId});
                    if (!deletedEmployee) {
                        Response.code = 404;
                        Response.message = "Employee not found";
                    } else {
                        Response.code = 200;
                        Response.message = "Successfully deleted";
                    }
                }catch(e){
                    console.log(e);
                }

                return Response;
            }
        }
    };
    
    const server = new ApolloServer({typeDefs : mySchema, resolvers : resolvers});
    server.start().then(() => {
        server.applyMiddleware({app, path:'/graphql'});
    });
}