const getData = () => {
    return[
        {
            id: 1,
            title: 'Babel',
            body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
            archived: false,
            createdAt: '2022-04-14T04:27:34.572Z'
        },
        {
            id: 2,
            title: 'Webpack',
            body: 'Webpack adalah bundler modul sumber terbuka dan gratis untuk JavaScript. Ini dibuat terutama untuk JavaScript, tetapi dapat mengubah aset front-end seperti HTML, CSS, dan gambar jika pemuat yang sesuai disertakan. Webpack mengambil modul dengan dependensi dan menghasilkan aset statis yang mewakili modul tersebut.',
            archived: false,
            createdAt: '2022-04-14T04:27:34.572Z'
        },
        {
            id: 3,
            title: 'ESLint',
            body: 'ESLint adalah alat analisis kode statis untuk mengidentifikasi pola bermasalah yang ditemukan dalam kode JavaScript. Itu dibuat oleh Nicholas C. Zakas pada 2013. Aturan dalam ESLint dapat dikonfigurasi, dan aturan khusus dapat didefinisikan dan dimuat. ESLint mencakup kualitas kode dan masalah gaya pengkodean.',
            archived: false,
            createdAt: '2022-04-14T04:27:34.572Z'
        },
    ];
}

export { getData };