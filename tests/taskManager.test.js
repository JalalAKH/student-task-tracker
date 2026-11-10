const { addTask } = require("../src/taskManager");

const task = {
  title: "Math homework",
  courseName: "MATH101",
  dueDate: "2026-11-10"
};

const result = addTask(
  [],
  task,
  "request1",
  [],
  true,
  "2026-11-09"
);

console.log(result);

const invalidTask = {
  title: "",
  courseName: "MATH101",
  dueDate: "2026-11-10"
};

const invalidResult = addTask(
  [],
  invalidTask,
  "request2",
  [],
  true,
  "2026-11-09"
);

console.log("Invalid task test:", invalidResult);


const pastDateTask = {
  title: "Science homework",
  courseName: "SCI101",
  dueDate: "2026-11-08"
};

const pastDateResult = addTask(
  [],
  pastDateTask,
  "request3",
  [],
  true,
  "2026-11-09"
);

console.log("Past date test:", pastDateResult);


const firstSave = addTask(
  [],
  task,
  "request4",
  [],
  true,
  "2026-11-09"
);

const secondSave = addTask(
  firstSave.tasks,
  task,
  "request4",
  firstSave.processedIds,
  true,
  "2026-11-09"
);

console.log("Duplicate save test:", secondSave);


const offlineResult = addTask(
  [],
  task,
  "request5",
  [],
  false,
  "2026-11-09"
);

console.log("Offline test:", offlineResult);


const retryResult = addTask(
  offlineResult.tasks,
  task,
  "request5",
  offlineResult.processedIds,
  true,
  "2026-11-09"
);

console.log("Retry after connection:", retryResult);


const longTitleTask = {
  title: "A".repeat(101),
  courseName: "MATH101",
  dueDate: "2026-11-10"
};

const longTitleResult = addTask(
  [],
  longTitleTask,
  "request6",
  [],
  true,
  "2026-11-09"
);

console.log("Long title test:", longTitleResult);

 // Test a task title with exactly 100 characters
const maxTitleTask = {
  title: "A".repeat(100),
  courseName: "MATH101",
  dueDate: "2026-11-10"
};

// Try to save the task with a valid 100-character title
const maxTitleResult = addTask(
  [],
  maxTitleTask,
  "request7",
  [],
  true,
  "2026-11-09"
);

// Display the result to check if the task was saved
console.log("100 character test:", maxTitleResult);

 // Test 9: Check if a title containing only spaces is rejected
const spacesTask = {
  title: "   ",
  courseName: "MATH101",
  dueDate: "2026-11-10"
};

// Try to save the task with an invalid title
const spacesResult = addTask(
  [],
  spacesTask,
  "request8",
  [],
  true,
  "2026-11-09"
);

// Display the test result
console.log("Spaces title test:", spacesResult);

 // Test 10: Check if an empty course name is rejected
const emptyCourseTask = {
  title: "Math homework",
  courseName: "",
  dueDate: "2026-11-10"
};

// Try to save a task without a course name
const emptyCourseResult = addTask(
  [],
  emptyCourseTask,
  "request9",
  [],
  true,
  "2026-11-09"
);

// Display the result to verify the task was rejected
console.log("Empty course test:", emptyCourseResult);

 // Test 11: Check if two tasks can have the same title
const duplicateTitleTask = {
  title: "Math homework",
  courseName: "MATH101",
  dueDate: "2026-11-10"
};

// Save the first assignment
const firstTask = addTask(
  [],
  duplicateTitleTask,
  "request10",
  [],
  true,
  "2026-11-09"
);

// Save another assignment with the same title
const secondTask = addTask(
  firstTask.tasks,
  duplicateTitleTask,
  "request11",
  firstTask.processedIds,
  true,
  "2026-11-09"
);

// Display the result to check that both tasks were saved
console.log("Duplicate title test:", secondTask);

 // Test 12: Check if a task due today can be saved
const todayTask = {
  title: "Science homework",
  courseName: "CHEM101",
  dueDate: "2026-11-09"
};

// Try to save a task with today's date
const todayResult = addTask(
  [],
  todayTask,
  "request12",
  [],
  true,
  "2026-11-09"
);

// Display the result to verify the task was saved
console.log("Today's due date test:", todayResult);

 // Test 13: Check if a one-character title is accepted
const shortTitleTask = {
  title: "A",
  courseName: "MATH101",
  dueDate: "2026-11-10"
};

// Try to save a task with a one-character title
const shortTitleResult = addTask(
  [],
  shortTitleTask,
  "request13",
  [],
  true,
  "2026-11-09"
);

// Display the result to verify the task was saved
console.log("One-character title test:", shortTitleResult);


 // Test 14: Check if a missing due date is rejected
const missingDateTask = {
  title: "Math homework",
  courseName: "MATH101",
  dueDate: ""
};

// Try to save a task without a due date
const missingDateResult = addTask(
  [],
  missingDateTask,
  "request14",
  [],
  true,
  "2026-11-09"
);

// Display the result to verify the task was rejected
console.log("Missing due date test:", missingDateResult);
