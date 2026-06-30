function pesan(){

    let nama = document.getElementById("nama").value;
    let tanggal = document.getElementById("tanggal").value;
    let jam = document.getElementById("jam").value;
    let orang = document.getElementById("orang").value;
    let meja = document.getElementById("meja").value;

    if(nama=="" || tanggal=="" || jam=="" || orang=="" || meja==""){

        alert("Silakan lengkapi semua data!");

        return;
    }

    let tabel = document.getElementById("hasil");

    let baris = tabel.insertRow();

    baris.insertCell(0).innerHTML = nama;
    baris.insertCell(1).innerHTML = tanggal;
    baris.insertCell(2).innerHTML = jam;
    baris.insertCell(3).innerHTML = orang;
    baris.insertCell(4).innerHTML = meja;

    document.getElementById("nama").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("jam").value = "";
    document.getElementById("orang").value = "";
    document.getElementById("meja").value = "";

    alert("Reservasi berhasil dibuat!");
}
