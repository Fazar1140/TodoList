const app = require('./index')
const request = require('supertest');
const Sequelize = require('sequelize');
const {users} = require('./models');
const Token = require('./middleware/Token');

//definisikan username password dan email
const username = 'jacquack';
const password = '2313212'
const email = 'jackquack@gmail.com'
let getToken = '';


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
            username:username,
            email:email,
            password:password
        });

        expect(res.statusCode).toBe(201);
       
    })

    it('check if email already exist ',async ()=>{
        
        const res = await request(app)
        .post('/Auth/signup')
        .send({
            username:username,
            email:email,
            password:password
        })
        expect(res.statusCode).toBe(200);
    })

     

     
})

describe('Login',()=>{
    it('Should log in into database',async()=>{
        const res = await request(app)
        .post('/Auth/signin')
        .send({
            email:email,
            password:password
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeDefined()
        token = res.body.token;
    })
})

// Without authorization
 
describe("GET /Task/ without authorization",()=>{
    it("should return a task ",async()=>{
        const res = await request(app).get(
            '/Task/'
        );
        
        expect(res.statusCode).toBe(200)
        
    })
})
 
// describe("POST /Task/post without authorization",()=>{
//     it('should post a task table ',async ()=>{
//         const res = await request(app)
//         .post('/Task/post')
//         .send({
//             user_id:10,
//             task_title:'make a cocktail',
//             task_status:'Optional',
//         })
//         expect(res.status).toBe(201)
//         expect(res.body.user_id).toBeDefined();
        
//     });
// })

// describe("Get /Task/ with authentication",()=>{
//     it("should return a product with token authentication", async()=>{
//         const token = getToken;
//         const res = await request(app).get(
//             '/Task/myTask'
//         ).set('Authorization',`Bearer ${token}`)
//         expect(res.statusCode).toBe(200)
    
//     })
// })
