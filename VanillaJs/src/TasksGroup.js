var TasksGroup = function () {
  this.tasks = [];
  this.id = Math.random().toString(16).slice(2) + this.tasks.length;
}


/**
 * Get the id of the current TasksGroup
 * 
 * @param {Task} task The task to add
 */
 TasksGroup.prototype.getId = function () {
  return this.id;
}

/**
 * Add a task to a task group
 * 
 * @param {Task} task The task to add
 */
TasksGroup.prototype.addTask = function (task) {
  this.tasks.push(task);
}

/**
 * Get the position of a sepicific task
 * In the tasks array
 * 
 * @param  {Task} task The task to get the position of
 * @return {integer} The position of the task
 */
TasksGroup.prototype.getPositionOfTask = function (task) {
  return this.tasks.indexOf(task);
}

/**
 * Delete a task from a task group
 * 
 * @param  {Task} task The task to delete
 * @return {void} 
 */
TasksGroup.prototype.deleteTask = function (task) {
  this.tasks.splice(this.getPositionOfTask(task), 1);
}

/**
 * Get a specific task
 * 
 * @param  {integer} index The position of the task
 * @return {Task}
 */
TasksGroup.prototype.getTask = function (index) {
  return this.tasks[index];
}

/**
 * Get the list of tasks of the current tasks group
 * 
 * @return {array} The list of tasks
 */
TasksGroup.prototype.getTasks = function () {
  return this.tasks;
}
