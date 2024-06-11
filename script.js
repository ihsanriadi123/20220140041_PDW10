document.getElementById("peminatanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.getElementById("peminatan").value;
    var alamat = document.getElementById("alamat").value;

    var hasilTemplate = `
        <h2>Hasil Pendaftaran</h2>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>NIM:</strong> ${nim}</p>
        <p><strong>Peminatan:</strong> ${peminatan}</p>
        <p><strong>Alamat:</strong> ${alamat}</p>
    `;

    document.getElementById("result").innerHTML = hasilTemplate;
});
