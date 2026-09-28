// Data 20 Soal PJOK Kelas 2 SD
const questionsData = [
    {
        id: 1,
        question: "1. Berjalan, berlari, dan melompat termasuk dalam contoh gerak...",
        options: { A: "Lokomotor", B: "Non-lokomotor", C: "Manipulatif" },
        answer: "A"
    },
    {
        id: 2,
        question: "2. Gerakan memutar lengan di tempat tanpa berpindah posisi disebut gerak...",
        options: { A: "Lokomotor", B: "Non-lokomotor", C: "Manipulatif" },
        answer: "B"
    },
    {
        id: 3,
        question: "3. Memukul bola kasti dan menendang bola termasuk contoh gerak...",
        options: { A: "Lokomotor", B: "Non-lokomotor", C: "Manipulatif" },
        answer: "C"
    },
    {
        id: 4,
        question: "4. Saat berlari cepat, pandangan mata kita harus mengarah ke...",
        options: { A: "Depan", B: "Bawah", C: "Samping" },
        answer: "A"
    },
    {
        id: 5,
        question: "5. Sebelum memulai aktivitas olahraga, kita harus melakukan...",
        options: { A: "Pendinginan", B: "Pemanasan", C: "Makan kenyang" },
        answer: "B"
    },
    {
        id: 6,
        question: "6. Pemanasan sebelum berolahraga berguna untuk mencegah terjadinya...",
        options: { A: "Lapar", B: "Cedera otot", C: "Mengantuk" },
        answer: "B"
    },
    {
        id: 7,
        question: "7. Gerakan menekuk lutut dilakukan di tempat termasuk contoh gerak...",
        options: { A: "Non-lokomotor", B: "Lokomotor", C: "Manipulatif" },
        answer: "A"
    },
    {
        id: 8,
        question: "8. Setelah selesai berolahraga, sebaiknya kita melakukan kegiatan...",
        options: { A: "Pemanasan", B: "Pendinginan", C: "Lari maraton" },
        answer: "B"
    },
    {
        id: 9,
        question: "9. Menendang bola ke arah gawang menggunakan anggota tubuh bagian...",
        options: { A: "Tangan", B: "Kaki", C: "Kepala" },
        answer: "B"
    },
    {
        id: 10,
        question: "10. Agar tangan kita bersih dari kuman, kita harus mencuci tangan memakai air dan...",
        options: { A: "Sabun", B: "Tanah", C: "Minyak" },
        answer: "A"
    },
    {
        id: 11,
        question: "11. Menggosok gigi sebaiknya dilakukan minimal sehari sebanyak...",
        options: { A: "1 kali", B: "2 kali", C: "5 kali" },
        answer: "B"
    },
    {
        id: 12,
        question: "12. Olahraga yang dilakukan di dalam air dan menggerakkan seluruh tubuh dinamakan...",
        options: { A: "Renang", B: "Basket", C: "Sepak bola" },
        answer: "A"
    },
    {
        id: 13,
        question: "13. Pakaian yang basah terkena keringat setelah berolahraga harus segera...",
        options: { A: "Dipakai tidur", B: "Diganti dan dicuci", C: "Disimpan di lemari" },
        answer: "B"
    },
    {
        id: 14,
        question: "14. Menjaga kebersihan kuku jari dapat dilakukan dengan cara...",
        options: { A: "Memotong kuku yang panjang", B: "Mewarnai kuku", C: "Membiarkan kuku kotor" },
        answer: "A"
    },
    {
        id: 15,
        question: "15. Makanan yang sehat dan bergizi akan membuat tubuh kita menjadi...",
        options: { A: "Sakit-sakitan", B: "Sehat dan kuat", C: "Lemah" },
        answer: "B"
    },
    {
        id: 16,
        question: "16. Berjalan di atas garis lurus tanpa jatuh dapat melatih...",
        options: { A: "Keseimbangan", B: "Kecepatan", C: "Kekuatan" },
        answer: "A"
    },
    {
        id: 17,
        question: "17. Istirahat yang paling baik setelah lelah beraktivitas adalah...",
        options: { A: "Tidur", B: "Bermain game", C: "Nonton TV" },
        answer: "A"
    },
    {
        id: 18,
        question: "18. Sikap badan yang benar saat berdiri tegak adalah posisi dada...",
        options: { A: "Bungkuk", B: "Busung/Tegak", C: "Miring" },
        answer: "B"
    },
    {
        id: 19,
        question: "19. Saat melempar bola kasti, kita menggunakan gerakan otot...",
        options: { A: "Kaki", B: "Lengan dan Tangan", C: "Leher" },
        answer: "B"
    },
    {
        id: 20,
        question: "20. Posisi badan saat melakukan gerakan berbaring telentang adalah pandangan menghadap ke...",
        options: { A: "Bawah", B: "Samping", C: "Atas" },
        answer: "C"
    }
];

// Variable Global
let currentStudentName = "";
let resultsData = JSON.parse(localStorage.getItem('pjok_kelas2a_results')) || [];

// DOM Elements
const dashboardSection = document.getElementById('dashboard-section');
const identitySection = document.getElementById('identity-section');
const quizSection = document.getElementById('quiz-section');

const btnStartTask = document.getElementById('btn-start-task');
const btnBackDash = document.getElementById('btn-back-dash');
const identityForm = document.getElementById('identity-form');
const studentNameInput = document.getElementById('student-name');

const quizStudentName = document.getElementById('quiz-student-name');
const questionsContainer = document.getElementById('questions-container');
const btnSubmitQuiz = document.getElementById('btn-submit-quiz');
const tableBody = document.getElementById('table-body');

// --- INISIALISASI SAAT HALAMAN DIMUAT ---
document.addEventListener('DOMContentLoaded', () => {
    renderResultsTable();
});

// Navigation: Klik Menu "Mengerjakan Tugas"
btnStartTask.addEventListener('click', () => {
    studentNameInput.value = "";
    dashboardSection.classList.add('hidden');
    identitySection.classList.remove('hidden');
});

// Navigation: Batal dari Form Identitas
btnBackDash.addEventListener('click', () => {
    identitySection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
});

// Form Identitas Submitted
identityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputName = studentNameInput.value.trim();

    if (!inputName) {
        alert("Silakan masukkan nama murid terlebih dahulu!");
        return;
    }

    // Pengecekan pengerjaan 1 kali berdasarkan nama (Case-insensitive)
    const alreadySubmitted = resultsData.some(item => item.nama.toLowerCase() === inputName.toLowerCase());

    if (alreadySubmitted) {
        alert(`⚠️ Murid dengan nama "${inputName}" SUDAH pernah mengerjakan tugas ini!\n\nSetiap murid hanya boleh mengerjakan 1 kali.`);
        return;
    }

    // Set nama murid aktif
    currentStudentName = inputName;
    quizStudentName.textContent = `Nama: ${currentStudentName}`;

    // Render Soal Kuis
    renderQuestions();

    // Pindah Tampilan ke Kuis
    identitySection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    window.scrollTo(0, 0);
});

// Render Daftar Soal Ke HTML
function renderQuestions() {
    questionsContainer.innerHTML = "";

    questionsData.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';

        questionDiv.innerHTML = `
            <div class="question-text">${item.question}</div>
            <div class="options-group">
                <label class="option-label">
                    <input type="radio" name="question_${item.id}" value="A" required>
                    A. ${item.options.A}
                </label>
                <label class="option-label">
                    <input type="radio" name="question_${item.id}" value="B">
                    B. ${item.options.B}
                </label>
                <label class="option-label">
                    <input type="radio" name="question_${item.id}" value="C">
                    C. ${item.options.C}
                </label>
            </div>
        `;

        questionsContainer.appendChild(questionDiv);
    });
}

// Kirim Jawaban & Hitung Nilai
btnSubmitQuiz.addEventListener('click', () => {
    // Memastikan seluruh soal terisi
    let totalQuestions = questionsData.length;
    let answeredCount = 0;

    questionsData.forEach((q) => {
        const selected = document.querySelector(`input[name="question_${q.id}"]:checked`);
        if (selected) answeredCount++;
    });

    if (answeredCount < totalQuestions) {
        alert(`Kamu baru menjawab ${answeredCount} dari ${totalQuestions} soal.\nSilakan jawab semua soal terlebih dahulu!`);
        return;
    }

    // Hitung Nilai (20 Soal, tiap soal bernilai 5 poin. Maksimal 100)
    let score = 0;
    questionsData.forEach((q) => {
        const selected = document.querySelector(`input[name="question_${q.id}"]:checked`);
        if (selected && selected.value === q.answer) {
            score += 5;
        }
    });

    // Tentukan Keterangan
    let status = "";
    if (score >= 80) {
        status = "Sangat Baik (Lulus)";
    } else if (score >= 70) {
        status = "Baik (Lulus)";
    } else {
        status = "Perlu Belajar Lagi";
    }

    // Simpan Data Hasil Ke Array & LocalStorage
    const newRecord = {
        nama: currentStudentName,
        nilai: score,
        keterangan: status
    };

    resultsData.push(newRecord);
    localStorage.setItem('pjok_kelas2a_results', JSON.stringify(resultsData));

    // Tampilkan Notifikasi Selesai
    alert(`🎉 Selamat ${currentStudentName}!\nTugas PJOK kamu berhasil dikirim.\n\nNilai Kamu: ${score}\nKeterangan: ${status}`);

    // Update Tabel & Kembalikan Tampilan ke Dashboard
    renderResultsTable();
    quizSection.classList.add('hidden');
    dashboardSection.classList.remove('hidden');
    window.scrollTo(0, 0);
});

// Render Tabel Hasil Nilai
function renderResultsTable() {
    tableBody.innerHTML = "";

    if (resultsData.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; color: #888;">Belum ada murid yang mengerjakan tugas.</td>
            </tr>
        `;
        return;
    }

    resultsData.forEach((item, index) => {
        const tr = document.createElement('tr');

        let badgeClass = "badge-success";
        if (item.nilai < 70) {
            badgeClass = "badge-danger";
        } else if (item.nilai < 80) {
            badgeClass = "badge-warning";
        }

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${item.nama}</strong></td>
            <td>${item.nilai}</td>
            <td><span class="badge ${badgeClass}">${item.keterangan}</span></td>
        `;

        tableBody.appendChild(tr);
    });
}
