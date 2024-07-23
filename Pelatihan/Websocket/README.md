# Websockets ⭐

<img src="https://miro.medium.com/v2/resize:fit:800/1*_6Zt1h5jopuP9syi-VDoMg.jpeg">

WebSocket adalah protokol komunikasi client-server yang berjalan di atas TCP (Transmission Control Protocol) Anda. Ini mendukung pertukaran pesan full-duplex bi-direksional antara klien (biasanya sebuah peramban web) dan server web dengan overhead yang sedikit dibandingkan dengan HTTP. Hal ini membuatnya menjadi protokol yang ideal untuk aplikasi yang membutuhkan pertukaran pesan “real-time” dan pembaruan asinkron.

## Instalasi

-   **Node.js 20.x.x**: Node.js merupakan runtime JavaScript yang dibangun di atas mesin JavaScript V8 milik Chrome. Pastikan untuk menginstal versi 20.x.x. [NodeJs](https://nodejs.org/en)
-   **Unduh Berkas Awal dari Github**: Dapatkan berkas awal dari repositori GitHub yang disediakan. Berkas ini akan menjadi dasar untuk proyek Anda. [Repositori GitHub](https://github.com/amccamikom/amcc-iot-2023)
-   **Websockets di Arduino IDE oleh Markus Sattler**: Perpustakaan Websockets untuk Arduino IDE yang dikembangkan oleh Markus Sattler. [Library](https://www.arduino.cc/reference/en/libraries/websockets/)

## Cara Kerja (Langkah penggunaan)

1. **Instal Node.js**: Pastikan Node.js terinstal di sistem Anda.
2. **Unduh Berkas Awal**: Unduh berkas awal dari repositori GitHub yang disediakan.
3. **Buka Folder Berkas Awal di VSCode**: Gunakan Visual Studio Code (VSCode) untuk membuka folder berkas awal yang telah diunduh.
4. **Instal Dependensi**: Buka terminal di VSCode dan jalankan `npm install` untuk menginstal dependensi proyek.
5. **Jalankan Server**: Mulai server dengan menjalankan `npm run dev` di terminal.
6. **Dapatkan Alamat IPv4**: Buka cmd dan ketik `ipconfig` untuk menemukan alamat IPv4 Anda.
7. **Konfigurasi Index.html**: Modifikasi alamat IP dalam file index.html sesuai dengan setup Anda.
8. **Konfigurasi Berkas Arduino**: Perbarui sandi WiFi dan alamat server dalam file .ino, pastikan tidak bertabrakan dengan alamat IP.
9. **Unggah Sketch Arduino**: Unggah file .ino yang telah dimodifikasi ke ESP8266.
10. **Akses Antarmuka Web**: Buka peramban web dan arahkan ke alamat IP bersama dengan port yang ditentukan (misalnya, `http://172.20.10.4:3002/`).
