var App = (function () {

  var instance = null;

  return {

    /**
     * The tasks groups
     * 
     * @type {Array}
     */
    tasksGroups: [],

    /**
     * The number of tasksGroups
     * That has been created
     * Since the app has been running
     * 
     * @type {Number}
     */
    totalTasksGroups: 0,


    /**
     * Create a single instance of the object
     * 
     * @return {this}
     */
    getInstance: function () {
      if (instance === null) {
        instance = new Object(this);
      }
      return instance;
    },

    /**
     * Create a new task group
     * 
     * @return {TasksGroup} The tasks group just created
     */
    createTasksGroup: function () {
      this.totalTasksGroups += 1;
      var tasksGroup = new TasksGroup();
      this.tasksGroups.push(tasksGroup);
      return tasksGroup;
    },

    /**
     * Delete a specific tasks group
     * 
     * @param  {TasksGroup} tasksGroup The tasks group to delete
     * @return {void}
     */
    deleteTasksGroup: function (tasksGroup) {
      this.tasksGroups.splice(this.getPositionOfTasksGroup(tasksGroup), 1);
    },

    /**
     * Clear all tasks group
     * 
     * @return {void}
     */
    clear: function () {
      this.tasksGroups = [];
    },

    /**
     * Get the position of a tasksGroup
     * In the tasksGroups array
     * 
     * @param  {TaskGroup} tasksGroup The taskGroup to get the positionof
     * @return {integer} The position of the tasksGroup
     */
    getPositionOfTasksGroup: function (tasksGroup) {
      return this.tasksGroups.indexOf(tasksGroup);
    },

    /**
     * Get a specific tasksGroup
     * 
     * @param  {integer} index The index of the tasksGroup
     * @return {TasksGroup}
     */
    getTasksGroup: function (tasksGroupId) {
      return this.tasksGroups.filter(function(tasksGroup){
        return tasksGroup.id == tasksGroupId
      })[0];
    },

    /**
     * Get all tasks group
     * 
     * @return {array} An array of the current app tasks group
     */
    getTasksGroups: function () {
      return this.tasksGroups;
    }
  }
})();