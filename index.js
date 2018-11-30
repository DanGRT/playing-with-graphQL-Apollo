const { ApolloServer, gql } = require("apollo-server");
const db = require("./db");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Student {
    id: ID!
    name: String!
    hasGraduated: Boolean!
    projects: [Project]
    cohort: [Cohort]
    employer: [Employer]
  }

  type Project {
    id: ID!
    name: String!
    studentIds: [ID]!
    students: [Student]!
  }

  type Cohort {
    id: ID!
    startDate: String!
    endDate: String!
    studentIds: [ID]!
    students: [Student]!
  }

  type Employer {
    id: ID!
    name: String!
    students: [Student]!
  }

  type Query {
    students: [Student]
    projects: [Project]
    cohorts: [Cohort]
    employers: [Employer]
  }


`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    students: () => db.getAllStudents(),
    projects: () => db.getAllProjects(),
    cohorts: () => db.getAllCohorts(),
    employers: () => db.getAllEmployers()
  },
  Student: {
    projects: student => db.getProjectsByStudent(student.id),
    cohort: student => db.getCohortByStudent(student.id),
    employer: student => db.getEmployerByStudent(student.id)
  },
  Project: {
    students: project =>
      project.studentIds.map(studentId => db.getStudentById(studentId))
  },
  Cohort: {
    students: cohort => cohort.studentIds.map(studentId =>  db.getStudentById(studentId))

  },
  Employer: {
    students: employer => employer.studentIds.map(studentId => db.getStudentById(studentId))
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
