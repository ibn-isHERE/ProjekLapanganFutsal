// Data untuk menyimpan jadwal booking dengan durasi
const schedule = [
/*  
    { time: '10:00-12:00', field: 'Lapangan Besar', name: 'Andi' },
    { time: '12:00-13:00', field: 'Lapangan Kecil', name: 'Rendy' },
    { time: '14:00-15:00', field: 'Lapangan Besar', name: 'Joko' },
    { time: '15:00-16:00', field: 'Lapangan Kecil', name: 'Fahri' },
    { time: '17:00-18:00', field: 'Lapangan Besar', name: 'Dian' },
    { time: '19:00-20:00', field: 'Lapangan Kecil', name: 'Ali' },
    { time: '21:00-22:00', field: 'Lapangan Besar', name: 'aril' }*/
];

// Fungsi untuk menampilkan jadwal booking di halaman
function displayBookings() {
    const bookingList = document.getElementById('booking-list');
    bookingList.innerHTML = ''; // Clear existing list

    // Menampilkan jadwal dari jam 9 pagi hingga 10 malam
    for (let hour = 9; hour <= 22; hour++) {
        const hourStr = (hour < 10 ? '0' : '') + hour + ':00';
        const nextHourStr = (hour + 1 < 10 ? '0' : '') + (hour + 1) + ':00';

        // Membuat rentang waktu (1 jam atau lebih)
        const timeRange = `${hourStr}-${nextHourStr}`;

        // Mencari booking yang cocok dengan rentang waktu
        const booking = schedule.find(item => item.time === timeRange);

        const status = booking ? `${booking.name} (Booked)` : 'Tersedia';

        // Membuat elemen untuk menampilkan jadwal
        const bookingItem = document.createElement('div');
        bookingItem.classList.add('booking-item');
        bookingItem.innerHTML = `<p><strong>${timeRange}</strong> - ${status}</p>`;
        bookingList.appendChild(bookingItem);
    }
}

// Memanggil fungsi untuk menampilkan jadwal booking saat halaman dimuat
displayBookings();
