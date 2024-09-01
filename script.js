document.getElementById('khodamForm').addEventListener('submit', function(event) {

    event.preventDefault();


    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    const result = document.getElementById('result');

    if (name.trim() === '') {
        result.textContent = 'Nama tidak boleh kosong!';
        result.style.color = 'red';
        return;
    }

    // Simulasi hasil cek khodam
    const khodamList = [
        'Khodam Macan Kumbang',
        'Khodam Kelinci',
        'Khodam kosong',
        'Khodam Pendamping',
        'Khodam Misterius',
        'Khodam Harimau',
        'Khodam Kosong',
        'Khodam Harimau Putih',
        'Khodam Macan Tutul',
        'Khodam Kosong',
        'Khodam Siluman Gajah Tobrut',
        'Khodam Siluman Ular',
        'Khodam Kosong',
        'Khodam Siluman Naga',
        'Khodam Siluman Kera',
        'Khodam Kosong',
        'Khodam Siluman Maklampir',
        'Khodam Siluman Buaya',
        'Khodam Kosong',
        'Khodam Kuntilanak',
        'Khodam Pocong',
        'Khodam Kosong',
        'Khodam Tuyul Botak',
        'Khodam Kakek Berjubah Putih',
        'Khodam Kosong',
        'Khodam kakek Berjubah Hitam',
        'Khodam Ratu Pantai Selatan',
        'Khodam Kosong',
        'Khodam Dewi Sima',
        'Khodam Perabu Siliwangi',
        'Khodam Kosong',
        'Khodam Siluman Babi',
        'Khodam Nyiblorong',
        'Khodam Kosong',
        'Khodam Buto ijo',
        'Khodam Kosong',
        'Khodam Leluhur'
    ];

    const randomIndex = Math.floor(Math.random() * khodamList.length);
    const khodamResult = khodamList[randomIndex];

    result.textContent = `Hasil cek khodam untuk nama ${name} adalah: ${khodamResult}`;
    result.style.color = 'yellow';

    // Mengosongkan input nama setelah form disubmit
    nameInput.value = '';
});

