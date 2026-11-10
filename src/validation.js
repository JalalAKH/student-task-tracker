
function validateTitle(title) {
  return typeof title === "string" &&
    title.trim().length > 0 &&
    title.length <= 100;
}

console.log(validateTitle(""));
console.log(validateTitle("Math homework"));
console.log(validateTitle("   "));
console.log(validateTitle("A".repeat(100)));
console.log(validateTitle("A".repeat(101)));

function validateDueDate(dueDate, today) {
  if (!dueDate || !today) return false;

  const due = new Date(dueDate);
  const current = new Date(today);

  if (isNaN(due.getTime()) || isNaN(current.getTime())) {
    return false;
  }

  due.setHours(0, 0, 0, 0);
  current.setHours(0, 0, 0, 0);

  return due >= current;
}

console.log(validateDueDate("2026-11-08", "2026-11-09"));
console.log(validateDueDate("2026-11-09", "2026-11-09"));
console.log(validateDueDate("2026-11-10", "2026-11-09"));


function validateCourse(courseName) {
  return typeof courseName === "string" &&
    courseName.trim().length > 0;
}

console.log(validateCourse(""));
console.log(validateCourse("   "));
console.log(validateCourse("CS445"));
console.log(validateCourse("Math"));

function validateTask(title, courseName, dueDate, today) {
  if (
    validateTitle(title) &&
    validateCourse(courseName) &&
    validateDueDate(dueDate, today)
  ) {
    return "valid";
  }

  return "error";
}

console.log(validateTask(
  "Math homework", "MATH101", "2026-11-10", "2026-11-09"
));

console.log(validateTask(
  "", "MATH101", "2026-11-10", "2026-11-09"
));

console.log(validateTask(
  "Math homework", "", "2026-11-10", "2026-11-09"
));

console.log(validateTask(
  "Math homework", "MATH101", "2026-11-08", "2026-11-09"
));


module.exports = {
  validateTitle,
  validateDueDate,
  validateCourse,
  validateTask
};
