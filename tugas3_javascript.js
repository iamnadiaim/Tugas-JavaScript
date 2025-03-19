//array produkToko
let produkToko = [
    { 
        id: 1, 
        nama: "Laptop", 
        harga: 7000000, 
        stok: 5 
    },
    { 
        id: 2, 
        nama: "Mouse", 
        harga: 200000, 
        stok: 10 
    },
    { 
        id: 3, 
        nama: "Keyboard", 
        harga: 350000, 
        stok: 7 
    }
];

function tampilkanProduk() {
    console.log("\n====================================");
    console.log("Daftar Produk Toko:");
    console.log("====================================");

    if (produkToko.length === 0) {
        console.log("Tidak ada produk yang tersedia.");
    } else {
        produkToko.forEach(produk => {
            console.log(`
            ID: ${produk.id}
            Nama: ${produk.nama}
            Harga: Rp${produk.harga}
            Stok: ${produk.stok}`);
        });
    }
    console.log("====================================\n");
}

function tambahProduk(nama, harga, stok) {
    let IdMax = produkToko[0].id; 
        for (let i = 1; i < produkToko.length; i++) {
            if (produkToko[i].id > IdMax) {
                IdMax = produkToko[i].id; // Update jika ditemukan ID yang lebih besar
            }
        }
        idProduk = IdMax + 1; // ID baru adalah ID terbesar + 1

        produkToko.push({ id: idProduk, nama, harga, stok }); //menambahkan data produk
        console.log(`✅ Produk ${nama} berhasil ditambahkan.`);
        tampilkanProduk();
}

function hapusProduk(id) {
    let index = produkToko.findIndex(produk => produk.id === id); // Mencari indeks pertama dari elemen yang memenuhi kondisi
    //dan membanding produk id dengan id yang dicari
    if (index !== -1) {
        let namaProduk = produkToko[index].nama;
        produkToko.splice(index, 1); // mengahapus satu elemen dari array berdasarkan index yang ditemukan

        produkToko.forEach((produk, i) => {
            produk.id = i + 1; // ID baru dimulai dari 1
        });

        console.log(`✅ Produk ${namaProduk} berhasil dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
    tampilkanProduk();
}

//menampilkan
tampilkanProduk(); // Menampilkan produk awal
tambahProduk("Memory Card", 200000, 10); // Menambahkan produk baru
hapusProduk(1); // Menghapus produk dengan ID 1
