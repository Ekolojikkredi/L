// İçeriği açma ve kapama işlevi
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((sec) => {
        if (sec !== section) {
            sec.classList.remove('show');
        }
    });
    section.classList.toggle('show');
}

// Bilgilendirme içeriklerini gösterme
function toggleInfo(infoId) {
    const infoContent = document.getElementById(infoId);
    infoContent.classList.toggle('show');
}

// Öğrenci kaydını ve okul kaydını localStorage'a kaydetme işlemleri
document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const studentData = {
        name: document.getElementById('studentName').value,
        email: document.getElementById('studentMail').value,
        school: document.getElementById('studentSchool').value,
    };
    localStorage.setItem('studentData', JSON.stringify(studentData));
    alert('Öğrenci Kaydınız Tamamlandı!');
});

document.getElementById('schoolForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const schoolData = {
        name: document.getElementById('schoolName').value,
        city: document.getElementById('schoolCity').value,
        district: document.getElementById('schoolDistrict').value,
        code: document.getElementById('schoolCode').value,
    };
    localStorage.setItem('schoolData', JSON.stringify(schoolData));
    alert('Okul Kaydınız Tamamlandı!');
});

// Atık girişini ve kredi hesaplamasını yapma
document.getElementById('wasteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const wasteType = document.getElementById('wasteType').value;
    const wasteKg = document.getElementById('wasteKg').value;
    const wasteSorted = document.getElementById('wasteSorted').value;

    // Atık türüne göre kredi puanı hesapla
    let wastePoints = 0;
    switch (wasteType) {
        case 'kağıt':
            wastePoints = 2;
            break;
        case 'plastik':
            wastePoints = 3;
            break;
        case 'cam':
            wastePoints = 4;
            break;
        case 'metal':
            wastePoints = 5;
            break;
        case 'elektronik':
            wastePoints = 10;
            break;
        case 'yağ':
            wastePoints = 8;
            break;
        case 'tekstil':
            wastePoints = 6;
            break;
        case 'pil':
            wastePoints = 7;
            break;
        default:
            wastePoints = 1;
    }

    let totalPoints = wastePoints * wasteKg;
    if (wasteSorted === 'evet') {
        totalPoints += 5;  // Ayrıştırılmış atıklara bonus puan ekle
    } else {
        totalPoints -= 5;  // Ayrıştırılmayan atıklara ceza puanı
    }

    // Atık verisini localStorage'a kaydetme
    const wasteData = {
        type: wasteType,
        kg: wasteKg,
        points: totalPoints,
        sorted: wasteSorted
    };
    
    let allWasteData = JSON.parse(localStorage.getItem('wasteData')) || [];
    allWasteData.push(wasteData);
    localStorage.setItem('wasteData', JSON.stringify(allWasteData));

    alert('Atık Girişi Tamamlandı! Toplam Puan: ' + totalPoints);
});

// Veri Görüntüleme
function displayWasteData() {
    const dataContainer = document.getElementById('dataContainer');
    const wasteData = JSON.parse(localStorage.getItem('wasteData')) || [];

    if (wasteData.length === 0) {
        dataContainer.innerHTML = '<p>Henüz atık verisi bulunmamaktadır.</p>';
    } else {
        dataContainer.innerHTML = '<ul>' + wasteData.map(waste => {
            return `<li>Tür: ${waste.type}, Miktar: ${waste.kg} kg, Puan: ${waste.points}, Ayrıştırıldı mı?: ${waste.sorted}</li>`;
        }).join('') + '</ul>';
    }
}

// Sayfa yüklendiğinde atık verilerini göster
document.addEventListener('DOMContentLoaded', function() {
    displayWasteData();
});
