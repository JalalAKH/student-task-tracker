# Student Task Tracker — UC-02: Add Assignment

**Team:** Jalal Akhoun and Saad Alqahtani  
**Course:** CS445 Software Engineering  
**Feature:** UC-02 — Add Assignment

## Steps 5–6: Rules and Concrete Examples

### R1 — Required Task Title
The system will not save a task if the title is empty. It will show **"Assignment or Task title is required."**

| Input | Result |
|---|---|
| Empty title (0 characters) | Error; task not saved |
| `A` (1 character) | Task saved |
| `Math homework` | Task saved |

**Boundary:** 0 characters = error; 1 character = accepted.

### R2 — Due Date
Students can only select today's date or a future date. Past dates are not allowed.

| Input | Result |
|---|---|
| October 22, 2026 (assuming today is October 23, 2026) | Error; task not saved |
| October 23, 2026 | Task saved |
| October 24, 2026 | Task saved |

**Boundary:** October 22 and October 23, 2026 (with October 23 as today's date).

### R3 — Task Title Length
The task title cannot be more than 100 characters. If it exceeds this limit, the system shows an error and does not save the task.

| Input | Result |
|---|---|
| 99 characters | Task saved |
| 100 characters | Task saved |
| 101 characters | Error; task not saved |

**Boundary:** 100 and 101 characters.

### R4 — Internet Connection
If the internet connection is lost during saving, the system shows an error. The student can try saving again when connected.

| Input | Result |
|---|---|
| Internet connected | Task saved |
| Internet disconnected during saving | Error; task not saved |
| Connection restored | Student can retry saving |

**Boundary:** Connected vs. disconnected.

### R5 — Same Task Title
Students can create more than one assignment with the same title. Each assignment is saved separately.

| Input | Result |
|---|---|
| Add `Math homework` once | 1 task saved |
| Add `Math homework` again as a new assignment | 2 separate tasks saved |

**Boundary example:** One assignment vs. two separate assignments with the same title.

### R6 — Multiple Save Clicks
If the student presses Save multiple times for the same submission, the system saves the assignment only once.

| Input | Result |
|---|---|
| Press Save once | 1 task saved |
| Press Save twice for the same submission | 1 task saved |
| Press Save three times for the same submission | 1 task saved |

**Boundary example:** One click vs. two clicks for the same submission.

### R7 — Titles Containing Only Spaces
A task title containing only spaces is considered empty. The system must show an error and must not save the task.

| Input | Result |
|---|---|
| `" "` (one space) | Error; task not saved |
| `"   "` (three spaces) | Error; task not saved |
| `"A"` (one non-space character) | Accepted if the other fields are valid |

**Boundary example:** Title with only spaces vs. a one-character title.

### R8 — Required Course Name
The course name is required when adding an assignment. If it is empty, the system shows an error and does not save the task.

| Input | Result |
|---|---|
| Empty course name | Error; task not saved |
| Course name = `CS445` | Accepted if the other fields are valid |

**Boundary example:** Empty course name vs. a provided course name.

## Step 7: Given / When / Then Acceptance Criteria

| ID | Given | When | Then | Traces to |
|---|---|---|---|---|
| F2-AC1 | Student is logged in and enters valid task information | Student clicks Save | Task is saved and shown in the task list | FR-04, UC-02 |
| F2-AC2 | Student leaves the task title empty | Student clicks Save | "Assignment or Task title is required." appears and the task is not saved | FR-04, R1 |
| F2-AC3 | Student enters a past due date | Student clicks Save | An error appears and the task is not saved | UC-02 alternative flow 2, R2 |
| F2-AC4 | Task title has 101 characters | Student clicks Save | An error appears and the task is not saved | UC-02, R3 |
| F2-AC5 | Student enters valid task information | Student clicks Save twice quickly for the same submission | Only one task is created | UC-02, R6 |

## Step 8: Interface (Proposed Pure JavaScript Functions)

These are function interfaces for testing, not completed JavaScript implementations. They should not depend on the DOM or storage.

```text
validateTitle(title) → true | false
validateDueDate(dueDate, today) → true | false
validateCourse(courseName) → true | false
validateTask(title, courseName, dueDate, today) → "valid" | "error"
addTask(tasks, task, requestId, processedIds, isOnline, today) → { tasks, processedIds, result }
```

**Verification still needed:** Confirm all criteria are testable with the functions; check names against the team's class diagram; verify any APIs or libraries used; and confirm implementations are pure functions.

## Step 9: Specification to Test Cases

**Acceptance criterion:** F2-AC4 — Task title length cannot exceed 100 characters.

| AC ID | Input | Expected result |
|---|---|---|
| F2-AC4 | `validateTitle("A".repeat(100))` | `true` |
| F2-AC4 | `validateTitle("A".repeat(101))` | `false` |
| F2-AC4 | `validateTitle("Math homework")` | `true` |
