/**
 * WORDMASTER PRO - 10 LEVEL FUNDAMENTAL
 */

const levels = [
    {
        type: "quiz",
        title: "Tahap 1: Esensi Pengolah Kata",
        instruction: "Berdasarkan fungsinya dalam dunia kerja, apa keunggulan utama Microsoft Word dibandingkan aplikasi Spreadsheet (Excel)?",
        options: [
            { text: "Kemampuan mengolah database ribuan data", correct: false },
            { text: "Fleksibilitas dalam menyusun narasi dan tata letak teks", correct: true },
            { text: "Fungsi otomatisasi rumus matematika kompleks", correct: false },
            { text: "Pembuatan grafik 3D untuk presentasi", correct: false }
        ],
        confirm: "<b>Tepat!</b> MS Word berfokus pada pengolahan dokumen naratif dengan tata letak yang luwes.",
        success: "Bagus! Mari kenali antarmukanya."
    },
    {
        type: "quiz",
        title: "Tahap 2: Logika Grup Toolbar",
        instruction: "Tombol Bold (B), Italic (I), dan Underline (U) dikelompokkan dalam satu grup 'Font'. Apa alasan logis dibalik pengelompokan ini?",
        options: [
            { text: "Karena ketiganya merubah warna kertas", correct: false },
            { text: "Karena ketiganya mengatur atribut karakter huruf secara individu", correct: true },
            { text: "Karena ketiganya berfungsi meratakan baris kalimat", correct: false },
            { text: "Hanya karena urutan abjad saja", correct: false }
        ],
        confirm: "<b>Benar!</b> Font Group khusus mengelola tampilan fisik dari karakter teks.",
        success: "Siap untuk tantangan praktik pertama?"
    },
    {
        type: "practice",
        title: "Tahap 3: Visual Hierarchy",
        instruction: "<b>Tantangan Praktik:</b><br>Berikan penekanan visual yang kuat pada judul laporan ini agar terlihat tegas dan formal (Gunakan <b>Bold</b> dan <b>Underline</b>).",
        initialText: "LAPORAN EVALUASI AKHIR SEMESTER",
        requirements: ["bold", "underline"],
        success: "Sempurna! Judul sekarang memiliki hirarki yang jelas."
    },
    {
        type: "quiz",
        title: "Tahap 4: Etika Penulisan",
        instruction: "Dalam kaidah penulisan dokumen digital yang baik, kapan kita sebaiknya menggunakan format Italic (Miring)?",
        options: [
            { text: "Untuk menulis seluruh isi paragraf", correct: false },
            { text: "Untuk menandai istilah asing atau penekanan kata tertentu", correct: true },
            { text: "Untuk menulis nomor telepon instansi", correct: false },
            { text: "Sebagai pengganti tanda baca titik", correct: false }
        ],
        confirm: "<b>Tepat!</b> Sesuai standar, istilah asing atau kata teknis perlu dimiringkan.",
        success: "Lanjut ke praktik etika penulisan."
    },
    {
        type: "practice",
        title: "Tahap 5: Identitas Istilah Asing",
        instruction: "<b>Tantangan Praktik:</b><br>Identifikasi istilah asing pada teks di bawah dan berikan format <i>Italic</i> yang sesuai.",
        initialText: "Harap segera melakukan Update pada sistem Anda.",
        requirements: ["italic"],
        success: "Bagus! Anda memahami etika penggunaan bahasa dalam dokumen."
    },
    {
        type: "quiz",
        title: "Tahap 6: Analisis Perataan (Alignment)",
        instruction: "Apa risiko estetika jika Anda menggunakan fitur 'Justify' (Rata Kanan-Kiri) pada baris teks yang sangat pendek?",
        options: [
            { text: "Teks akan otomatis terhapus", correct: false },
            { text: "Munculnya celah kosong yang lebar antar kata (River of White)", correct: true },
            { text: "Teks akan berubah menjadi warna merah", correct: false },
            { text: "Ukuran huruf akan mengecil otomatis", correct: false }
        ],
        confirm: "<b>Analisis Tajam!</b> Justify memaksakan teks ke margin, sehingga spasi kata melebar tidak natural pada teks pendek.",
        success: "Pemahaman tata letak yang luar biasa!"
    },
    {
        type: "practice",
        title: "Tahap 7: Penataan Kepala Surat",
        instruction: "<b>Tantangan Praktik:</b><br>Posisikan teks identitas lokasi surat ini di <b>Tengah Halaman</b> agar terlihat simetris.",
        initialText: "PEMERINTAH PROVINSI BALI\nDinas Pendidikan Pemuda dan Olahraga",
        requirements: ["justifyCenter"],
        success: "Sangat rapi! Struktur surat mulai terbentuk."
    },
    {
        type: "quiz",
        title: "Tahap 8: Logika Toggle",
        instruction: "Jika teks sudah memiliki format Bold, apa yang terjadi jika Anda menyorotnya kembali dan mengklik ikon Bold sekali lagi?",
        options: [
            { text: "Teks menjadi dua kali lebih tebal", correct: false },
            { text: "Format tebal akan hilang (kembali ke normal)", correct: true },
            { text: "Teks akan berubah menjadi miring", correct: false },
            { text: "Teks akan dipindahkan ke halaman baru", correct: false }
        ],
        confirm: "<b>Benar!</b> Ini adalah sistem Toggle (sakelar) yang umum di Ms. Word.",
        success: "Logika perangkat lunak yang solid!"
    },
    {
        type: "quiz",
        title: "Tahap 9: Keterbacaan Dokumen",
        instruction: "Mengapa pemberian Garis Bawah (Underline) pada seluruh isi paragraf dianggap sebagai praktik yang buruk dalam desain dokumen?",
        options: [
            { text: "Karena tinta printer akan cepat habis", correct: false },
            { text: "Karena dapat mengaburkan ekor huruf dan mengganggu alur baca", correct: true },
            { text: "Karena membuat komputer menjadi lambat", correct: false },
            { text: "Karena garis bawah hanya boleh digunakan di Excel", correct: false }
        ],
        confirm: "<b>Sangat Akurat!</b> Underline yang berlebihan merusak keterbacaan (readability).",
        success: "Satu langkah terakhir menuju kelulusan!"
    },
    {
        type: "practice",
        title: "Tahap 10: Ujian Akhir Master",
        instruction: "<b>Ujian Akhir:</b><br>Susun area tanda tangan ini: Posisikan di sisi <b>Kanan</b>, berikan format <b>Tebal</b> dan <b>Garis Bawah</b>.",
        initialText: "( Nama Jelas Siswa )",
        requirements: ["justifyRight", "bold", "underline"],
        success: "LUAR BIASA! Anda telah menguasai seluruh aspek fundamental WordMaster Pro."
    }
];

let currentLevel = 0;
let canAnswer = true;
let userStats = [];

function shuffleOptions(options) {
    const shuffled = options.map(opt => ({ ...opt }));
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// --- NAVIGASI ---
function startGame() {
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    currentLevel = 0;
    userStats = [];
    loadLevel();
}

function backToMenu() {
    document.getElementById('recap-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('menu-screen').classList.remove('hidden');
    userStats = [];
    currentLevel = 0;
}

// --- LOGIKA GAME ---
function loadLevel() {
    canAnswer = true;
    const level = levels[currentLevel];
    
    document.getElementById('lvl-num').innerText = currentLevel + 1;
    document.getElementById('lvl-title').innerText = level.title;
    document.getElementById('lvl-instr').innerHTML = level.instruction;
    document.getElementById('feedback-msg').innerText = "";
    document.getElementById('quiz-confirm').classList.add('hidden');
    
    const paper = document.getElementById('document-paper');
    const quizArea = document.getElementById('quiz-area');
    const checkBtn = document.getElementById('check-btn');
    checkBtn.disabled = false;

    if (level.type === "quiz") {
        paper.innerHTML = `<div style="text-align:center; color:#ccc; margin-top:120px;">
                            <i class="fas fa-brain" style="font-size:50px; margin-bottom:15px;"></i><br>
                            Selesaikan Kuis di Samping</div>`;
        paper.setAttribute('contenteditable', 'false');
        quizArea.classList.remove('hidden');
        checkBtn.classList.add('hidden');
        renderQuiz(shuffleOptions(level.options), level.confirm);
    } else {
        paper.innerText = level.initialText;
        paper.setAttribute('contenteditable', 'true');
        quizArea.classList.add('hidden');
        checkBtn.classList.remove('hidden');
    }
}

function renderQuiz(options, confirmText) {
    const container = document.getElementById('quiz-options');
    const confirmBox = document.getElementById('quiz-confirm');
    container.innerHTML = "";
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.className = "opt-btn";
        btn.onclick = () => {
            if(!canAnswer) return;
            
            if(opt.correct) {
                btn.classList.add('opt-correct');
                confirmBox.innerHTML = confirmText;
                confirmBox.className = "confirm-box opt-correct";
                confirmBox.classList.remove('hidden');
                canAnswer = false;
                setTimeout(() => nextLevel("Berhasil"), 3000);
            } else {
                btn.classList.add('opt-wrong');
                confirmBox.innerHTML = "<b>Salah.</b> Baca kembali soal dengan teliti.";
                confirmBox.className = "confirm-box opt-wrong";
                confirmBox.classList.remove('hidden');
                canAnswer = false;
                setTimeout(() => nextLevel("Gagal"), 2000);
            }
        };
        container.appendChild(btn);
    });
}

function format(cmd) {
    document.execCommand(cmd, false, null);
    document.getElementById('document-paper').focus();
}

function validateAction() {
    const level = levels[currentLevel];
    const passed = level.requirements.every(req => document.queryCommandState(req));
    const checkBtn = document.getElementById('check-btn');

    if (passed) {
        showFeedback(true, level.success);
        checkBtn.disabled = true;
        setTimeout(() => nextLevel("Berhasil"), 2000);
    } else {
        showFeedback(false, "Konfigurasi dokumen belum memenuhi kriteria formal.");
        checkBtn.disabled = true;
        setTimeout(() => nextLevel("Gagal"), 2000);
    }
}

function getAnswerKey(level) {
    if (level.type === "quiz") {
        const correct = level.options.find(opt => opt.correct);
        return correct ? correct.text : "";
    }

    const requirementLabels = {
        bold: "Bold",
        italic: "Italic",
        underline: "Underline",
        justifyLeft: "Rata Kiri",
        justifyCenter: "Rata Tengah",
        justifyRight: "Rata Kanan"
    };

    return level.requirements
        .map(req => requirementLabels[req] || req)
        .join(", ");
}

function nextLevel(status = "Berhasil") {
    const levelTitle = levels[currentLevel].title;
    const titleParts = levelTitle.split(":");
    const level = levels[currentLevel];

    userStats.push({
        level: currentLevel + 1,
        title: titleParts[1] ? titleParts[1].trim() : levelTitle,
        status: status,
        answerKey: getAnswerKey(level)
    });

    currentLevel++;
    if (currentLevel < levels.length) {
        loadLevel();
    } else {
        showRecap();
    }
}

function showRecap() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('recap-screen').classList.remove('hidden');

    const listContainer = document.getElementById('recap-list');
    listContainer.innerHTML = "";

    const passedCount = userStats.filter(stat => stat.status === "Berhasil").length;
    const score = Math.round((passedCount / levels.length) * 100);
    document.getElementById('final-score').innerText = score;

    userStats.forEach(stat => {
        const row = document.createElement('tr');
        const statusClass = stat.status === "Berhasil" ? "status-badge-win" : "status-badge-lose";
        const statusIcon = stat.status === "Berhasil" ? "fa-check-circle" : "fa-times-circle";
        row.innerHTML = `
            <td>${stat.level}</td>
            <td>${stat.title}</td>
            <td><span class="${statusClass}"><i class="fas ${statusIcon}"></i> ${stat.status}</span></td>
            <td>${stat.answerKey}</td>
        `;
        listContainer.appendChild(row);
    });
}

function showFeedback(isSuccess, message) {
    const msgEl = document.getElementById('feedback-msg');
    msgEl.style.color = isSuccess ? "#28a745" : "#dc3545";
    msgEl.style.marginTop = "15px";
    msgEl.style.fontWeight = "bold";
    msgEl.innerHTML = `<i class="fas ${isSuccess ? 'fa-check-circle' : 'fa-times-circle'}"></i> ${message}`;
}

/**
 * FUNGSI EKSPOR PDF
 */
function exportToPDF() {
    const btn = document.querySelector('.btn-export');
    const originalText = btn ? btn.innerHTML : '';

    if (btn) {
        btn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Mengolah...";
        btn.disabled = true;
    }

    const { jsPDF } = window.jspdf || {};
    if (!jsPDF) {
        if (btn) {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
        alert('Gagal memuat library PDF. Silakan coba lagi.');
        return;
    }

    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Laporan Kompetensi - WordMaster Pro', pageWidth / 2, 18, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text('Hasil Belajar Fundamental', pageWidth / 2, 26, { align: 'center' });

    const passedCount = userStats.filter(stat => stat.status === "Berhasil").length;
    const score = Math.round((passedCount / levels.length) * 100);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(`Skor Akhir: ${score}`, 14, 36);

    const tableRows = userStats.map(stat => [
        stat.level,
        stat.title,
        stat.status,
        stat.answerKey
    ]);

    doc.autoTable({
        startY: 42,
        head: [["Tahap", "Topik", "Status", "Kunci Jawaban"]],
        body: tableRows,
        styles: { fontSize: 10, cellPadding: 3 },
        headStyles: { fillColor: [43, 87, 154], textColor: 255 },
        columnStyles: {
            0: { cellWidth: 12 },
            1: { cellWidth: 80 },
            2: { cellWidth: 28 },
            3: { cellWidth: 140 }
        }
    });

    doc.save('Laporan_WordMaster_Pro.pdf');

    if (btn) {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
    alert('Laporan berhasil diunduh!');
}

function toggleModal(id) {
    document.getElementById(id).classList.toggle('hidden');
}