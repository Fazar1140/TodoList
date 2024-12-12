const {task,task_inner} = require('../models');

class TaskController {

    static async getAllTask(req,res){
        //mengeluarkan semua task yang ada di dalam databse
        const user_id = req.user.id;

        const findAllTask = await task.findAll({where:{user_id:user_id}});
        res.status(200).send({findAllTask});

    }
    static async getAllTaskWithProp(req,res){
        //mengeluarkan table task beserta dengan langkah langkah 
       

        const getTaskProp = await task.findAll();
        res.status(200).send(getTaskProp)
    }
    static async postTaskTable(req,res){
        //membuat task table tanpa token
        const {user_id,task_title,task_status} = req.body;
     

        const makeTaskTable = await task.create(
            {
                user_id,task_title,task_status
            }
        )
        res.status(200).send(makeTaskTable);
    }

    static async createTaskTable(req,res){
        //membuat task table dengan token
        const {task_title,task_status} = req.body;
        const user_id = req.user.id ;

        const makeTaskTable = await task.create(
            {
                user_id,task_title,task_status
            }
        )
        res.status(200).send(makeTaskTable);
    }
    static async getTaskById(req,res){
        //mengambil task berdasarkan id parameter
        const id = req.params.id;
        const user_id = req.user.id
        const findTaskTableById = await task.findByPk(id);
        if(findTaskTableById.user_id == user_id){
            res.status(200).send(findTaskTableById);
        }else{
            res.status(400).send('task id doesnt exist on user ');
        }
      

    }
    static async patchTaskTable(req,res){
        //mengupdate task table berdasarkan params id 
        const {task_title,task_status} = req.body;
        const id = req.params.id;
        const user_id = req.user.id;

        const patchTaskTable = await task.update({
            user_id,task_title,task_status
        },{where:{id:id,user_id:user_id}})
            
        if(patchTaskTable == 1){
            res.send('Task table is successfully patched!')
        }else{
            res.send('Something wrong with updating the task, try again!')
        }
        
    }
    static async deleteTaskTable(req,res){
        //menghapus task table dalam database beserta dengan properti di dalamnya 
        const id = req.params.id; 
        const user_id = req.user.id;

        const deleteTaskProps = await task_inner.destroy({where:{task_id:id}});

        const deleteTaskTable = await task.destroy({where:{id:id,user_id:user_id}})
 

        if(deleteTaskTable == 1 && deleteTaskProps){
            res.send('Task table is successfully deleted!')
        }else{
            res.send('Something wrong with deleting the task, try again!')
        }
    }
}

module.exports = TaskController