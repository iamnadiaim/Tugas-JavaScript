class Kendaraan {
    constructor(nama, tipe) {
        this.nama = nama;
        this.tipe = tipe;
    }
    deskripsi() {
        return `${this.nama} dengan tipe ${this.tipe}`;
    }
}

class Mobil extends Kendaraan {
    constructor(nama, tipe, merk) {
        super(nama, tipe);
        this.merk = merk;
    }
    deskripsi() {
        return ` Mobil ${this.nama} yang memiliki tipe ${this.tipe} dengan merek ${this.merk}`;
    }
}

class Motor extends Kendaraan {
    constructor(nama, tipe, warnaBody) {
        super(nama, tipe);
        this.warnaBody = warnaBody;
    }
    deskripsi() {
        return ` Motor ${this.nama} dengan tipe ${this.tipe} berwarna ${this.warnaBody}`;
    }
}

class Pelanggan {
    constructor(nama, nomorTelepon, sewaKendaraan) {
        this.nama = nama; 
        this.nomorTelepon = nomorTelepon;
        this.sewaKendaraan = sewaKendaraan;
    }
}

class Penyewaan {
    constructor() {
        this.daftarPelanggan = [];
    }

    Kendaraandisewa(nama, nomorTelepon, sewaKendaraan) {
        const penyewa = new Pelanggan(nama, nomorTelepon, sewaKendaraan);
        this.daftarPelanggan.push(penyewa);
        console.log(`===>> ${nama} telah menyewa ${sewaKendaraan.deskripsi()}✅ `);
    }

    menampilkanDaftarPelanggan() {
        console.log("Daftar Pelanggan yang Dalam Status Menyewa Kendaraan:");
        this.daftarPelanggan.forEach((penyewa, index) => {
            console.log(`
                ${index + 1}. Nama: ${penyewa.nama} 
                Nomor Telepon: ${penyewa.nomorTelepon} 
                Kendaraan yang disewa: ${penyewa.sewaKendaraan.deskripsi()}`);
        });
    }
}

const sistemManajemenTransportasi = new Penyewaan();

const mobil = new Mobil("Brio", "RS CVT", "Honda");
const motor = new Motor("Stylo", "ABS", "Merah");

sistemManajemenTransportasi.Kendaraandisewa("Nadia Intan Muziza", "089678456234", mobil);
sistemManajemenTransportasi.Kendaraandisewa("Melati Mawar", "081234567890", motor);

sistemManajemenTransportasi.menampilkanDaftarPelanggan();
