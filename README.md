# Node Express PostgresSQL MVC

Projek ini dikerjakan menggunakan Nodejs serta express js untuk postgresSQL silahkan didownload atau di clone.

Apabila ingin menge-clone dan memiliki git library bisa dilakukan dengan 
`git clone https://github.com/elgaridlo/node-express-postgresSQL-MVC.git`

## Pertama lakukan Instalation

Install node package manager di `https://nodejs.org/en/download/` pilih package yang paling stabil (direkomendasikan)

1. Setelah didownload 
2. Lakukan `npm install` digunakan untuk mendownload semua module yang digunakan di folder ini

3. Install PostgresSQL di `https://www.postgresql.org/download/` pilih juga yang paling stabil

## Lakukan Configurasi di PostgresSQL
Anda harus menginstall serta tolong diingat usernam dan password postgresSQL anda. Setelah selesai bisa dilakukan import table. Untuk file sudah ada yaitu `discoundDB.sql`, 
1. Anda hanya perlu membuat database baru
2. klik kanan 
3. Pilih restore, kemudian pilih file tadi kemudian restore 

## Setting configurasi DB di node

1. Lihat di file `configureDB.js`
2. `user: "postgres",
    host: "localhost",
    database: 'postgres',
    password: 'password',
    port: '5432'`

    sesuaikan configurasi ini

## run node js
run node js dengan menulis `node index.js` didalam directory folder ini.

## untuk megecek discount / job 1
Silahkan buka postman kemudian GET `localhost:3000/discount/id` ganti id dengan user_id yang ada di database. Ini digunakan untuk mengecek grand total serta apa saja yang dibeli user tersebut.

Kemudian PUT `localhost:3000/discount` 
Create body `{ name: 'nama_anda', discount_code: 'discound_code', price: 'harga', user_id: 'isi_id' }`
user_id wajib diisi !!!

## untuk mengeeck conver time / job 2
Silahkan buka postman kemudian GET `localhost:3000/convert/time`
time bisa diganti dengan format hh:mm:ssAM/PM , 

contoh GET `localhost:3000/convert/00:13:23PM`

## Further help

To get more help on the install this project please contact me by email elgaridlosinatriya@gmail.com