---
title: 'Application Programming Interface: Makhluk Apa Itu?'
metaTitle: 'Application Programming Interface: Makhluk Apa Itu?'
metaDesc: 'Penjelasan tentang apa itu API'
socialImage: images/apa-itu-api.jpeg
date: '2022-03-21'
tags:
  - api
  - programming
---

Dapat dilihat dari judulnya yang agak sedikit *sok asik,* tulisan ini memang ditujukan untuk orang awam yang belum pernah mendengar istilah ini. Sebenarnya apa *sih* API atau Application Programming Interface itu? Kenapa kok bisa ada istilah itu? Hubungannya apa dengan kehidupanku? *anjay* 😎. Tanpa basa-basi lagi, langsung saja *sat-set-sat-set,* kita bahas bersama.

![Illustration by [JJ Ying](https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)](https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)

Illustration by [JJ Ying](https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)

## 💁🏻 Apa itu Application Programming Interface?

API atau Application Programming Interface merupakan sebuah *interface* atau antarmuka untuk sebuah aplikasi agar dapat terhubung dengan aplikasi lainnya. Jadi API ini mempunyai tugas untuk menghubungkan sistem dengan sistem lainnya agar dapat terintegrasi dengan baik.

Hal ini tentu sangat memudahkan developer aplikasi dalam mengembangkan sistem tanpa perlu memulainya dari nol, selain itu dapat mempermudah proses kolaborasi antar developer walaupun teknologi yang digunakan berbeda satu sama lainnya.

Agar mudah dipahami, mari kita analogikan dalam kehidupan sehari-hari. Bayangkan saja kalau API itu adalah seorang pelayan restoran. Anda sedang memesan sebuah ~~minyak goreng~~ spagetti, pelayan akan mencatat pesanan anda dan menyampaikannya ke koki, lalu setelah selesai dimasak  makanan tersebut akan diantarkan ke meja anda.

Nah, jadi seperti itulah perumpamaan tugas API nantinya dalam sistem, API akan menerima perintah dan meneruskannya ke sistem lainnya lalu mengembalikan respons ke *user* berupa apa yang diminta.

![Ilustrasi REST API by [Blog Iron](https://blog.iron.io/wp-content/uploads/2020/11/REST-API.jpg)](/images/REST-API.jpg)

Ilustrasi REST API by [Blog Iron](https://blog.iron.io/wp-content/uploads/2020/11/REST-API.jpg)

Dengan API, bahkan sebuah sistem yang dikembangkan dengan dua bahasa pemrograman yang berbeda dapat berkomunikasi satu sama lainnya. Misalnya seorang pengembang web *front-end* yang menggunakan *JavaScript,* membutuhkan sebuah data penerbangan untuk ditampilkan ke dalam aplikasinya, maka ia tinggal menggunakan *third-party* API yang telah dikembangkan oleh developer lainnya walau API tersebut dibuat dengan bahasa *Python*.

Contoh penggunaannya di dunia nyata adalah misalnya anda ingin mengunggah foto baru di Instagram. Tanpa sadar anda telah memanggil API milik Instagram yang berisi perintah untuk menggunggah foto anda ke file server milik Instagram.

## 👉🏻 Jenis-jenis API

Berdasarkan lingkup hak aksesnya, ada empat macam API yang umum digunakan, yaitu:

1. Public API
    
    Seperti namanya, Public API (disebut juga Open API) adalah jenis API yang dapat bebas dan terbuka digunakan oleh siapapun. Penggunaannya juga mudah dengan minimum konfigurasi yang dibutuhkan. Anda hanya perlu mendaftar (jika diharuskan) atau bisa langsung menghubungkannya dengan aplikasi yang dibuat.
    
    Contoh: [API Covid-19 Indonesia](https://covid19.go.id/dokumentasi-api)
    
2. Private API
    
    Ini adalah jenis API yang berkebalikan dengan Public API. Sesuai namanya, API ini hanya diperuntukkan untuk kalangan internal suatu tim developer atau perusahaan, dan bahkan bisa jadi suatu hal yang berbahaya jika terekspos ke publik. Contohnya API untuk pengoperasian database suatu bank.
    
3. Composite API
    
    Tipe API ini biasa digunakan untuk menyimpan data di berbagai server di berbagai tempat, seperti CDN (Content Delivery Network). Hal ini sangat menguntungkan para developer saat membutuhkan akses terhadap suatu file seperti gambar, video, suara tanpa harus menguploadnya sendiri di aplikasi mereka.
    
4. Partner API
    
    Partner API hanya bisa digunakan untuk pihak-pihak yang sudah mendapatkan izin penggunaannya. Seperti Public API tetapi calon pengguna harus mendaftarkan dirinya untuk mendapatkan akses. Contoh: [API Pinterest](https://developers.pinterest.com/docs/api/v5/)
    

## 🌈 Manfaat Penggunaan API

- ↗️ Dapat Mempermudah dalam Membangun Sebuah Aplikasi
    
    Jika anda mengembangkan sebuah aplikasi tanpa API, anda harus membuat satu-persatu komponen aplikasi dari awal. Jika aplikasi yang dikembangkan adalah aplikasi sederhana, mungkin tidak jadi masalah, akan tetapi masalah akan muncul jika aplikasi yang dikembangkan adalah sebuah aplikasi yang kompleks. 
    
    Misalnya aplikasi penampil cuaca, anda harus repot-repot membuat sebuah sub-program untuk menyimpan data-data cuaca secara manual. Dengan API dari penyedia data cuaca, anda bisa hanya berfokus dengan tampilan aplikasi tanpa harus bersusah payah melakukan *research* data cuaca untuk ditampilkan.
    
- ⚡ Pengembangan Aplikasi Menjadi Lebih Cepat
    
    Dengan memanfaatkan API, developer menjadi lebih cepat dalam mengembangkan sebuah sistem. Anda hanya perlu menghubungkan kedua aplikasi dengan API, maka dapat membuat sebuah aplikasi menjadi lebih lengkap. Hal ini tentu mempercepat proses pengembangan aplikasi tanpa membuatnya satu persatu. 
    
    Sebagai contoh, anda ingin membuat sebuah aplikasi pemesanan taksi online. Tentu anda membutuhkan data peta untuk membantu proses navigasi. Tentunya, anda tidak mungkin harus membuat peta sendiri lalu menambahkannya ke aplikasi anda. Anda tinggal mengintegrasikan *third-party* API seperti [Google Maps API](https://developers.google.com/maps) dan *voila* aplikasi anda siap untuk digunakan. Tentu ini akan mempercepat pengembangan aplikasi kan?
    
- 🖥️ Beban Server Berkurang
    
    Karena dengan menggunakan API anda tidak harus menyimpan semua *resource* di server anda sendiri, *ya iyalah* kan data yang diperoleh didapat dari server sumber API-nya. Dengan begini, server tempat anda menyimpan aplikasi tidak terlalu terbebani oleh permintaan berlebih dari *client.* Hal ini tentu dapat mengatasi masalah *server down* yang sering sekali terjadi di *website-website* ~~pemerintah~~. Mungkin tinggal masalah koneksi internet yang harus dalam keadaan baik agar komunikasi dengan API menjadi lancar.
    

## 🏗️ Macam-macam Arsitektur API

Umumnya hanya ada tiga macam arsitektur API yang digunakan secara luas oleh developer aplikasi dalam pengembangannya. Ketiga arsitektur ini berfokus pada jenis data yang dikirim. Berikut adalah ketiga arsitektur tersebut:

1. REST
    
    REST adalah singkatan dari Representational State Transfer, yaitu suatu arsitektur API yang paling sering digunakan oleh developer. Arsitektur ini menggunakan pola *request-response,* karenanya ia menggunakan protokol HTTP. Penggunaannya memisahkan antara *client* dan *server* serta tidak peduli perubahan yang terjadi diantara keduanya tidak akan mengganggu proses komunikasi. Pola arsitektur ini menggunakan format data JSON.
    
2. RPC
    
    RPC merupakan singkatan dari Remote Procedure Call, yaitu sebuah protokol yang bekerja dengan mekanisme komunikasi yang mengizinkan suatu aplikasi untuk dijalankan di komputer jarak jauh (remote) tanpa harus tahu bahwa adanya eksekusi kode disana. Pola ini bisa menggunakan format data XML maupun JSON.
    
3. SOAP
    
    SOAP atau Simple Object Access Protocol merupakan sebuah protokol standar untuk pertukaran data berbasis XML dan dengan protokol komunikasi HTML (mirip dengan REST) tetapi SOAP hanya menerima data dalam format XML.
    

## 🧑🏻‍🔧 Memahami Cara Kerja API

![Illustration by [Amanda Kothalawala](https://medium.com/@ama.thanu/what-is-an-api-how-does-it-work-f4ea552d741f)](/images/1_3h95bN2_xe-eitwHh_Ygvw.png)

Illustration by [Amanda Kothalawala](https://medium.com/@ama.thanu/what-is-an-api-how-does-it-work-f4ea552d741f)

Agar mudah dalam memahaminya, mari kita bahas secara *step-by-step*:

**Pertama**: Aplikasi memanggil alamat API

Sebagai contoh anda sedang membuka sebuah aplikasi *e-commerce* Rukopedia. Nah, pada proses ini dibalik layar, aplikasi Rukopedia telah memanggil API untuk menampilkan data produk-produk yang akan ditampilkan di aplikasi Rukopedia.

**Kedua**: API meneruskan *request* ke *server*

Seusai aplikasi mengirimkan *request* ke API, API akan menerima dan mengirimkan *request* tersebut ke *server* agar diproses, dalam hal ini server akan mengakses database untuk mendapatkan data produk yang diinginkan.

**Ketiga**: Pengembalian *response*

Setelah data berhasil didapatkan, *server* akan mengembalikan sebuah *response* yang akan dikirimkan melalui API yang diakses tadi ke *client.* Lalu aplikasi akan menerima *response* tersebut dan ditampilkan dengan mekanisme tertentu (*front-end programming*).

## ✨ Contoh-contoh Public API

Nah, setelah mendapatkan penjelasannya, kurang lengkap dong kalau *ngga* ada contohnya. Berikut contoh API yang umum dipakai oleh *programmer*:

1. weatherapi
    
    Terkadang anda mungkin ingin mendapatkan informasi cuaca untuk bersiap jika ingin keluar rumah untuk bekerja atau yang lainnya. Nah, tentu kamu akan membuka aplikasi prakiraan cuaca kan. 
    
    Developer yang ingin membuat aplikasi cuaca bisa menggunakan Open API cuaca dari [weatherapi](https://www.weatherapi.com/) ini. Disini, developer dapat mendapatkan informasi berupa cuaca dari berbagai kota diseluruh dunia dalam format JSON maupun XML.
    
    ![Tampilan website [weatherapi](https://www.weatherapi.com/)](/images/Screenshot_from_2022-03-21_20.45.43.png)
    
    Tampilan website [weatherapi](https://www.weatherapi.com/)
    
2. Covid-19 API dari Pemerintah
    
    Pemerintah juga menyediakan sebuah API untuk melayani kebutuhan informasi seputar Covid-19 di Indonesia. Di dalam API ini kamu akan mendapatkan informasi kasus Covid-19 harian, list fasilitas kesehatan vaksinasi, list rumah sakit rujukan, list laboratorium, dan lain sebagainya.
    
    Tentunya ini merupakan sebuah API yang sangat penting yang mana ini menyangkut nyawa manusia. Berterimakasihlah kepada bapak presiden kita **Jokowi** yang telah bekerja keras dalam menangani pandemi Covid-19 sampai sekarang. Lanjut 3 perio...eh 😮
    
    ![Tampilan website [Covid-19 API](https://covid19.go.id/dokumentasi-api)](/images/Screenshot_from_2022-03-21_21.08.13.png)
    
    Tampilan website [Covid-19 API](https://covid19.go.id/dokumentasi-api)
    
3. TheSportsDB
    
    Jika kamu ingin mengetahui informasi seputar olahraga, seperti jadwal pertandingan, informasi tim, *live score,* informasi pemain dan lain sebagainya, maka [TheSportsDB](https://www.thesportsdb.com/) mungkin adalah solusinya. [TheSportsDB](https://www.thesportsdb.com/) menyediakan informasi itu semua dengan berbagai macam jenis olahraga seperti basket, sepakbola, bisbol, dan banyak lagi dengan tim dari seluruh dunia.
    
    Bahkan bisa dibilang TheSportsDB merupakan situs Open API paling lengkap yang pernah ada serta sering kali digunakan oleh developer untuk belajar mengembangkan sebuah website atau  aplikasi termasuk penulis.
    
    ![Tampilan [TheSportsDB](https://www.thesportsdb.com/)](/images/Screenshot_from_2022-03-21_21.10.56.png)
    
    Tampilan [TheSportsDB](https://www.thesportsdb.com/)
    

## ✍🏻 Conclussion

Jadi, *gimana*? pasti sudah cukup paham *dong* apa itu API? bagi kalian developer aplikasi yang membaca ini tentunya sudah paham, sekaligus menjadi refresh ingatan mengenai definisinya dan bagi kalangan non-tech gimana? jadi tertarik belajar pemrograman agar bisa ikut praktek pengembangan aplikasi dengan API?

Dengan API, pengembangan aplikasi menjadi semakin mudah dan cepat, dengan penjelasan dan contoh yang penulis jabarkan diatas tentunya (semoga) dapat menjadi inspirasi untuk anda jika ingin mengembangkan sebuah aplikasi.

Yah, semoga artikel ini dapat bermanfaat bagi kalian semua, sampai jumpa lagi 👋🏻

![Photo by [Hello i’m nik](https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)](https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)

Photo by [Hello i’m nik](https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb)