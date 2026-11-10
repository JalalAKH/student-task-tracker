const {
  validateTitle,
  validateDueDate,
  validateCourse
} = require("./validation");

function addTask(tasks, task, requestId, processedIds, isOnline, today) {
  if (processedIds.includes(requestId)) {
    return { tasks, processedIds, result: "already saved" };
  }

  if (!isOnline) {
    return { tasks, processedIds, result: "error" };
  }

  if (
    !validateTitle(task.title) ||
    !validateCourse(task.courseName) ||
    !validateDueDate(task.dueDate, today)
  ) {
    return { tasks, processedIds, result: "error" };
  }

  const updatedTasks = [...tasks, task];
  const updatedIds = [...processedIds, requestId];

  return {
    tasks: updatedTasks,
    processedIds: updatedIds,
    result: "saved"
  };
}

module.exports = { addTask };