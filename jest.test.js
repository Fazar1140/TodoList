const app = require('./index')
const request = require('supertest');
const Sequelize = require('sequelize');
const {users} = require('./models');
let token = '';
 
 
//definisikan username password dan email
let user = {
    username : 'Yemen',
    password : '2313212',
    email : 'yesmen@gmail.com',
   
}
 
 

describe('Auth Controller',()=>{
    beforeAll(async()=>{
        await new Sequelize('TodoList','postgres','25112002',{
            host:'localhost',
            dialect:'postgresql'
            }
        )
   
    })
    it('check if sequelize connect!',()=>{
        expect(Sequelize).toBeDefined()
    })
    afterAll(async()=>{
        await Sequelize.close;
        
    })
   
})

describe('Registration',()=>{

    it('should register a new user',async ()=>{
        const res = await request(app)
        .post('/Auth/signup')
        .send({
            username:user.username,
            email:user.email,
            password:user.password
        });

        expect(res.statusCode).toBe(201);
       
    })

    it('check if email already exist ',async ()=>{
        
        const res = await request(app)
        .post('/Auth/signup')
        .send({
            username:user.username,
            email:user.email,
            password:user.password
        })
        expect(res.statusCode).toBe(200);
    })

     

     
})

describe('Login',()=>{
    it('Should log in into database',async()=>{
        const res = await request(app)
        .post('/Auth/signin')
        .send({
            email:user.email,
            password:user.password
        })
      
        expect(res.statusCode).toBe(200);
        expect(res.body.email).toBeDefined()
        token = res.body.token;
       
         
    })

})

 
describe("GET /Task ",()=>{
    it("should return a task ",async()=>{
        const res = await request(app).get(
            '/Task/'
        );
     
        
        expect(res.statusCode).toBe(200)
      
    })
})
 
describe("POST /Task ",()=>{
    it('should post a task table ',async ()=>{
        const res = await request(app)
        .post('/Task/post')
        .send({
            user_id:10,
            task_title:'make a cocktail',
            task_status:'Optional',
        })
        expect(res.status).toBe(200)
      
        
    });
}) 
 

 
describe("GET /TaskProp ",()=>{
    it("should return all task properties",async()=>{
        const res = await request(app).get(
            '/TaskProp/all'
        );   
        expect(res.statusCode).toBe(200)
        expect(res.body).toBeDefined()
      
    })
})
 
describe("POST /TaskProp ",()=>{
    it('should post a task properties ',async ()=>{
        const res = await request(app)
        .post('/TaskProp/post')
        .send({
            user_id:10,
            task_step:'get some booze',
            task_status:'Important',
            task_info:'all kinds of alchol'
        })
        expect(res.status).toBe(200)
        expect(res.body.user_id).toBeDefined();
        
    });
}) 
 