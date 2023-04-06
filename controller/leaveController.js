const mongoose = require("mongoose");
const leave = require("../model/leave");
const {getAllLeaves,getLeaveDetails} = require('../helper/leaveHelper')
const leaveService = require('../service/leaveService');

// controllers/leave.js

const leaveHelpers = require('../helper/leaveHelper');

const leave_all = async (req, res) => {
  try {
    const leave_varall = await leaveHelpers.getAllLeaves();
    res.json(leave_varall);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const leave_details = async (req, res) => {
  try {
    const leave_varSingle = await leaveHelpers.getLeaveDetails(req.params.employeeId);
    res.json(leave_varSingle);
  } catch (error) {
    res.json({ message: error.message });
  }
};





// to get all leave

// const leave_all = async (req,res) =>{
//     try{
//         const leave_varall = await leave.find();
//         res.json(leave_varall);
//     }catch(error){
//         res.json({message:error});
//     }
// }

// single employee leave

// const leave_details = async (req,res) =>{
//     try{
//        const leave_varSingle = await leave.findById(req.params.employeeId); 
//         res.json(leave_varSingle);
//     }catch(error){
//         res.json({message:error})
//     }
// };

//add leave

const leave_create = async(req,res)=>{
    const leave_var = new leave({
        employeeId : req.body.employeeId,
        employeeName : req.body.employeeName,
        reason: req.body.reason,
        action:req.body.action,
        from : req.body.from,
        to: req.body.to,

    });
    const saveLeave = await leave_var.save();
    console.log(saveLeave)
    try{
        // const saveLeave = await leave_var.save();
        // res.send(saveLeave);
        res.send("created")
    }
    catch(error){
        console.log(error)
        res.status(400).send(error);
    }
};
// update_leave

const leave_update = async(req,res)=>{
    try{
        const leave_var = {
          employeeId : req.body.employeeId,
          employeeName : req.body.employeeName,
          reason : req.body.reason,
          action: req.body.action,
          from : req.body.from,
          to : req.body.to
        };

        const updated_leave = await leave.findByIdAndUpdate(
            {
                _id: req.params.employeeId

            },
            leave_var
        );

        res.json(updated_leave);
    }catch(error){
       res.json({message:error});
    }
};

//delete leave

// const leave_delete = async (req,res) =>{
   
//     try{
//         const removeLeave = await leave.findByIdAndDelete(req.params.employeeId);
//         res.json(leave_delete)
//     }
//     catch(error){
//         res.json({message:eror});
//     }



// }


const leave_delete = async (req,res) =>{
   try{
        const removedLeave = await leaveService.deleteLeave(req.params.employeeId);
        res.json(removedLeave)
    }
    catch(error){
        res.json({message:error});
    }
};

module.exports = {
    leave_all,
    leave_create,
    leave_delete,
    leave_details,
    leave_update,
   
      
}