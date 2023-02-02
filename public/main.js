// run `node index.js` in the terminal

console.info('Buku Tamu');

const isiBukuTamu = () => {
  // Tangkap element tbody
  let tbody = document.getElementById('tbody');

  // Input Buku Tamu
  let nama = prompt('Masukkan nama :');
  let alamat = prompt('Masukkan alamat :');
  let ket = prompt('Masukkan keterangan :');

  // console.log(nama, alamat, ket);

  // mendapatkan total dari child tbody
  let totalData = tbody.childElementCount;

  // render String to HMTL
  tbody.innerHTML += `
  <tr>
    <td>${totalData + 1}</td>
    <td>${nama}</td>
    <td>${alamat}</td>
    <td style="text-align: center">${ket}</td>
  </tr>
  `;
};
