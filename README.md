# ToDoListAPI
### sebuah API todolist task yang mendemonstrasikan Basic CRUD

terdiri dari berbagai fungsi dan kelas, project sederhana yang bermuatkan aplikasi interface task yang dapat kita update, delete, insert dan lain lain nya dengan tujuan untuk membuat jadwal atau rencana yang akan kita lakukan

# Program yang digunakan

1. Express.js : sebuah library atau framework open source yang mempermudah pembangunan aplikasi CRUD dan RESTFUL API
2. Postgresql : database yang digunakan untuk menyimpan task
3. Sequelize : sebagai ORM untuk mengakses database melalui bahasa pemograman menggunakan javascript
4. Bcrypt : mengubah password untuk memastikan keamanan database
5. JSONWebtoken : untuk keamanan akses database
6. cookie-parser: sebagai informasi cookies dalam browser
7. nodemon : menghitung ulang program setiap kali melakukan perubahan dengan save file

# Features

## User 
* API yang menyediakan fungsi untuk melakukan authentikasi, pembuatan user, masuk dan keluar (login atau logout)
## Task 
* Api yang menyediakan fungsi untuk mengupdate badan atau body dalam task yang dapat dibuat, ubah dan dihapus
## TaskProp
* API yang menyediakan fungsi yang berupa informasi yang lebih detail mengenai Task body yang berisikan langkah task, beserta dengan informasinya dan juga status task, serta menyediakan fungsi untuk membuat, mengupdate dan menghapus database Task_inner

## Project Setup 
### yang dibutuhkan 
* Node JS v18.19.1 atau sebelumnya
* Postgresql & pgadmin 4

## Clone project

### Peringatan! projek komplit terdapat pada checkpoint ke 6 
```
 git clone --single-branch --branch checkpoint-6 https://github.com/Fazar1140/TodoList.git

```
## Navigasikan ke direktori proyek 
```
   cd mern-ecommerce 
```
## Jangan lupa untuk install dependensi dengan mengetik : 
``` 
  npm install
 ```

### Environtment variabel 
pada file .env tambahkan 
```
  # Koneksi database

  PORT = 5000

  # JWT secret key
  
  SECRET_KEY = secret-key-milikmu 

 # pengaturan cookie parser

  PRODUCTION = 'true'
  COOKIE_EXPIRATION_DAYS = 1 
```
## Config variabel 
* klik file config
* klik config.json

```
  {
  # Pasktikan akun postgres dan password seusai dengan akun postgresql server

  "development": {
    "username": "akun-postgres",
    "password": "password-postgres",
    "database": "TodoList",
    "host": "localhost",
    "dialect": "postgresql"
  },
  "test": {
    "username": "akun-postgres",
    "password": "password-postgres",
    "database": "TodoList",
    "host": "localhost",
    "dialect": "postgresql"
  },
  "production": {
    "username": "akun-postgres",
    "password": "password-postgres",
    "database": "TodoList",
    "host": "localhost",
    "dialect": "postgresql"
  }
}

```

## Buat database menggunakan sequelize-cli 
```
  npx sequelize-cli db:create
```

## Migrasi skema database sequelize-cli 
```
  npx sequelize-cli db:migrate
```

## Seed database 
input nama kedalam user 
```
  

const bcrypt = require('bcryptjs');
const SeedInitial = require('./SeedHelper/SeedInitial');

const SeedHelper = new SeedInitial();

//bisa menggunakan SeedHelper fungsi
SeedHelper.password('12345678')

//bisa menggunakan Seedhelper getter untuk getter manipulasi di kelas seedInitial dengan mengubah parameter yang diinginkan di get function
const password = SeedHelper.getPassword

const user = [{

  username:'Lee',
  email:'LeeGoldson@gmail.com',
  password:bcrypt.hashSync(password,10),
  createdAt:new Date(),
  updatedAt:new Date()
}]

module.exports = {
  

  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('users',user,{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

```


### Seed atau membuat data ke dalam sequelize-cli
```
  npx sequelize-cli db:seed:all
```

### jika sudah seeding data jalankan aplikasi 
```
 npm run start
```

### untuk menjalankan jest gunakan 
```
 npm test
```
