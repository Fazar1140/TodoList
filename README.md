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