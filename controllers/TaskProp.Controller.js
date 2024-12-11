const {task_inner,task} = require('../models');
class TaskPropController {

    static async getEveryTaskProp (req,res){
        
        const getTaskProp = await task.findAll()
        res.status(200).send(getTaskProp);
    }
    static async makeTaskProp (req,res){
        const {user_id,task_step,task_info,task_status} = req.body;
        const createPost = await task.create({
            user_id,task_step,task_info,task_status
        })
        res.status(200).send(createPost);
    }
    static async getAllTaskProp (req,res){  
        //mengambil keselurahan properti dalam task table berdasarkan user id 
        const user_id = req.user.id;      

        const getTaskProp = await task.findAll({where:{user_id:user_id},attributes:{exclude:['id','user_id','task_title','task_status','createdAt','updatedAt']},include:{model:task_inner}});
        
        res.send(getTaskProp)
        
    }
    static async createTaskProp (req,res){
        //membuat properti atau isi didalam task yang telah kita buat 
        const {task_id,task_step,task_info,task_status} = req.body;
        const user_Id = req.user.id;

        const getTaskTable = await task.findAll({where:{user_id:user_Id}});
        console.log(task_id)

        const checkTableId = [];
        Object.keys(getTaskTable).forEach((key)=>{
             checkTableId.push(getTaskTable[key].id)
        })
        
        let i = 0 ;
        
        while(i<=checkTableId.length){
            
            
            if(i == checkTableId.length){
                return res.status(200).send({message:'error! table doesnt exist!'})
            }

            if(checkTableId[i] == task_id){
                const createTaskProp = await task_inner.create(
                    {
                        task_id,task_step,task_info,task_status
                    }
                )
                res.send(createTaskProp)
                break;
            }
            
             
            i++;    
        }
        
    }
    static async PatchTaskProp (req,res){
        //mengupdate task yang telah properti misalnya kita ingin mengubah status dalam task
        const user_id = req.user.id;

        const id = req.params.id; 

        const findTask = await task.findOne({where:{user_id:user_id,id:id}}) 
        
        const getId = findTask.id;

        const {taskPropId,task_step,task_info,task_status} = req.body;

      
        const patchTaskProp = await task_inner.update(
            {task_step,task_status,task_info},
            
            {where:{task_id:getId,id:taskPropId}});

        if(patchTaskProp == 1){
            res.send('task property is successfully updated on id = ' + `${taskPropId}`);
        }else{
            res.send('error something wrong when updating a task property');
        }
    }
    static async deleteTaskProp (req,res){

        //menghapus langkah task properti yang tidak kita inginkan 
        const user_id = req.user.id;

        const id = req.params.id; 

        const findTask = await task.findOne({where:{user_id:user_id,id:id}}) 
        
        const getId = findTask.id;

        const {taskPropId} = req.body;

 
        const patchTaskProp = await task_inner.destroy(
            {where:{task_id:getId,id:taskPropId}});

        if(patchTaskProp == 1){
            res.send('task property is successfully updated on id = ' + `${taskPropId}`);
        }else{
            res.send('error something wrong when updating a task property');
        }
    }

}
     

module.exports = TaskPropController