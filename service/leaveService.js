const Leave = require('../model/leave');

exports.deleteLeave = async (employeeId) => {
  try {
    const removedLeave = await Leave.findByIdAndDelete(employeeId);
    return removedLeave;
  } catch (error) {
    throw error;
  }
};

