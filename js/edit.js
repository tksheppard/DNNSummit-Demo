window.editTask = {
  taskSvc: null,

  init: function({ moduleId }) {
    console.log("Initializing with moduleId:", moduleId);
    if (!moduleId) {
        console.error("Module ID is missing!");
        return;
    }

    const sxc = $2sxc(moduleId);
    this.taskSvc = sxc.data('Task');
    
    if (!this.taskSvc) {
        console.error("Failed to initialize taskSvc.");
    } else {
        console.log("taskSvc initialized successfully!");
    }
  },
  
  delete: function(id) {
    if (confirm("Are you sure you want to delete this item?")) {
      taskSvc.delete(id).then(() => { location.reload(); });
    }
  },

  update: function(id, isChecked) {
    const completeStatus = Boolean(isChecked);

    if (this.taskSvc) {
      this.taskSvc.update(id, { Complete: completeStatus })
        .then(() => console.log(`Task ${id} marked as ${completeStatus ? "Complete" : "Incomplete"}`))
        .catch(error => console.error("Update error:", error));
    } else {
      console.error("taskSvc is not initialized.");
    }
  }
}