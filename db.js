//mockDB

const STUDENTS = [
  { id: 1, name: "Dan", hasGraduated: true },
  { id: 2, name: "Laura", hasGraduated: true },
  { id: 3, name: "John", hasGraduated: false },
  { id: 4, name: "Jenny", hasGraduated: true },
  { id: 5, name: "Stuart", hasGraduated: true },
  { id: 6, name: "Yusuf", hasGraduated: false },
  { id: 7, name: "Joe", hasGraduated: true },
  { id: 8, name: "Amber", hasGraduated: true },
  { id: 9, name: "Nicole", hasGraduated: false },
  { id: 10, name: "Bamdad", hasGraduated: true },
  { id: 11, name: "Steve", hasGraduated: true },
  { id: 12, name: "Felicia", hasGraduated: false },
  { id: 13, name: "Kate", hasGraduated: true },
  { id: 14, name: "Max", hasGraduated: false },
  { id: 15, name: "Rahman", hasGraduated: true },
  { id: 16, name: "Rene", hasGraduated: true }
];

const PROJECTS = [
  { id: 1, name: "Food App", studentIds: [1, 2] },
  { id: 2, name: "Finance App", studentIds: [3, 4] },
  { id: 3, name: "Pet App", studentIds: [5, 6] },
  { id: 4, name: "Barber App", studentIds: [7, 8] },
  { id: 5, name: "Charity App", studentIds: [9, 10] },
  { id: 6, name: "Meme App", studentIds: [11, 12] },
  { id: 7, name: "Egg App", studentIds: [13, 14] },
  { id: 8, name: "Charity App", studentIds: [15, 16] }
];

const COHORTS = [
  {
    id: 1,
    startDate: "Jan 2017",
    endDate: "Mar 2017",
    studentIds: [1, 2, 3, 4],
    projectIds: [1, 2]
  },
  {
    id: 2,
    startDate: "Apr 2017",
    endDate: "July 2017",
    studentIds: [5, 6, 7, 8],
    projectIds: [3, 4]
  },
  {
    id: 3,
    startDate: "Aug 2017",
    endDate: "Oct 2017",
    studentIds: [9, 10, 11, 12],
    projectIds: [5, 6]
  },
  {
    id: 4,
    startDate: "Nov 2017",
    endDate: "Jan 2018",
    studentIds: [13, 14, 15, 16],
    projectIds: [7, 8]
  }
];

const EMPLOYERS = [
  { id: 1, name: "Viable Start Up ", studentIds: [1, 6, 8, 9, 10] },
  { id: 2, name: "Big Corporate Inc.", studentIds: [2, 3, 4, 5] },
  { id: 3, name: "Friend exploiter LLC", studentIds: [7, 12, 14] }
];

const getAllStudents = () => STUDENTS;
const getStudentById = id => STUDENTS.find(student => student.id === id);
const getAllProjects = () => PROJECTS;
const getAllCohorts = () => COHORTS;
const getAllEmployers = () => EMPLOYERS;

const getProjectsByStudent = studentId =>
  PROJECTS.filter(project => project.studentIds.includes(studentId));

const getEmployerByStudent = studentId =>
  EMPLOYERS.filter(employer => employer.studentIds.includes(studentId));

const getCohortByStudent = studentId =>
  COHORTS.filter(cohort => cohort.studentIds.includes(studentId));

module.exports = {
  getAllStudents,
  getStudentById,
  getAllProjects,
  getProjectsByStudent,
  getCohortByStudent,
  getEmployerByStudent
};
