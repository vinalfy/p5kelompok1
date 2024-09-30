// Daftar pelanggaran dan poinnya
const pelanggaran = [
    { nama: 'Rok Ngatung', poin: 10 },
    { nama: 'Membawa Make Up', poin: 20 },
    { nama: 'Memakai Aksesoris', poin: 15 },
    { nama: 'Celana Ngatung', poin: 5 },
    { nama: 'Pesan GoFood', poin: 3 },
    { nama: 'Telat Datang', poin: 10 },
    { nama: 'Merusak Fasilitas', poin: 20 },
    { nama: 'Membully Teman', poin: 15 },
    { nama: 'Bolos Pelajaran', poin: 15 },
    { nama: 'Bolos Upacara', poin: 20 }
];

const MAX_POIN = 100; // Batas maksimal poin

// Fungsi untuk memilih pelanggaran secara acak dengan batasan 3-6 pelanggaran
function getRandomPelanggaran() {
    const pelanggaranDipilih = [];
    let totalPoin = 0;

    // Tentukan jumlah pelanggaran yang akan dipilih, antara 3 hingga 6
    const jumlahPelanggaran = Math.floor(Math.random() * 4) + 3;

    while (pelanggaranDipilih.length < jumlahPelanggaran) {
        const index = Math.floor(Math.random() * pelanggaran.length);
        const pelanggaranTerpilih = pelanggaran[index];

        // Cek apakah pelanggaran sudah ada di daftar
        if (!pelanggaranDipilih.includes(pelanggaranTerpilih)) {
            if (totalPoin + pelanggaranTerpilih.poin <= MAX_POIN) {
                pelanggaranDipilih.push(pelanggaranTerpilih);
                totalPoin += pelanggaranTerpilih.poin;
            }
        }
    }

    return pelanggaranDipilih;
}

// Fungsi untuk menampilkan pelanggaran dan menghitung total poin
function generatePelanggaran() {
    const namaSiswa = document.getElementById("namaSiswa").value;
    const kelasSiswa = document.getElementById("kelasSiswa").value;
    
    if (namaSiswa === "" || kelasSiswa === "") {
        alert("Masukkan nama dan kelas siswa terlebih dahulu!");
        return;
    }

    const hasilNama = document.getElementById("hasilNama");
    hasilNama.textContent = `${namaSiswa} dari kelas ${kelasSiswa} mendapatkan total poin pelanggaran:`;

    const pelanggaranDipilih = getRandomPelanggaran();
    const listPelanggaran = document.getElementById("listPelanggaran");
    listPelanggaran.innerHTML = ""; // Kosongkan list sebelumnya

    let totalPoin = 0;

    // Tambahkan pelanggaran ke dalam list
    pelanggaranDipilih.forEach(pelanggaran => {
        const li = document.createElement("li");
        li.textContent = `${pelanggaran.nama} - Poin ${pelanggaran.poin}`;
        listPelanggaran.appendChild(li);

        totalPoin += pelanggaran.poin;
    });

    // Tampilkan total poin
    const totalPoinElement = document.getElementById("totalPoin");
    totalPoinElement.textContent = "Total Poin: " + totalPoin + " / " + MAX_POIN;
}