<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atık Yönetim Sistemi</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Atık Yönetim Sistemi</h1>
        <nav>
            <ul>
                <li><button class="toggle-btn" onclick="toggleSection('studentRegistration')">Öğrenci Kaydı</button></li>
                <li><button class="toggle-btn" onclick="toggleSection('schoolRegistration')">Okul Kaydı</button></li>
                <li><button class="toggle-btn" onclick="toggleSection('wasteEntry')">Atık Girişi</button></li>
                <li><button class="toggle-btn" onclick="toggleSection('dataView')">Veri Görüntüleme</button></li>
                <li><button class="toggle-btn" onclick="toggleSection('infoSection')">Bilgilendirme</button></li>
            </ul>
        </nav>
    </header>

    <section id="studentRegistration" class="content-section">
        <h2>Öğrenci Kaydı</h2>
        <form id="studentForm">
            <label for="studentName">Ad Soyad:</label>
            <input type="text" id="studentName" name="studentName" required>

            <label for="studentMail">E-posta:</label>
            <input type="email" id="studentMail" name="studentMail" required>

            <label for="studentSchool">Okul Adı:</label>
            <input type="text" id="studentSchool" name="studentSchool" required>

            <button type="submit">Kaydı Tamamla</button>
        </form>
    </section>

    <section id="schoolRegistration" class="content-section">
        <h2>Okul Kaydı</h2>
        <form id="schoolForm">
            <label for="schoolName">Okul Adı:</label>
            <input type="text" id="schoolName" name="schoolName" required>

            <label for="schoolCity">Şehir:</label>
            <input type="text" id="schoolCity" name="schoolCity" required>

            <label for="schoolDistrict">İlçe:</label>
            <input type="text" id="schoolDistrict" name="schoolDistrict" required>

            <label for="schoolCode">Okul Kodu:</label>
            <input type="password" id="schoolCode" name="schoolCode" required>

            <button type="submit">Okul Kaydını Tamamla</button>
        </form>
    </section>

    <section id="wasteEntry" class="content-section">
        <h2>Atık Girişi</h2>
        <form id="wasteForm">
            <label for="wasteType">Atık Türü:</label>
            <select id="wasteType" name="wasteType" required>
                <option value="kağıt">Kağıt</option>
                <option value="plastik">Plastik</option>
                <option value="cam">Cam</option>
                <option value="metal">Metal</option>
                <option value="elektronik">Elektronik</option>
                <option value="yağ">Yağ</option>
                <option value="tekstil">Tekstil</option>
                <option value="pil">Pil</option>
            </select>

            <label for="wasteKg">Atık Miktarı (kg):</label>
            <input type="number" id="wasteKg" name="wasteKg" required>

            <label for="wasteSorted">Ayrıştırıldı mı?</label>
            <select id="wasteSorted" name="wasteSorted" required>
                <option value="evet">Evet</option>
                <option value="hayır">Hayır</option>
            </select>

            <button type="submit">Atığı Kaydet</button>
        </form>
    </section>

    <section id="dataView" class="content-section">
        <h2>Veri Görüntüleme</h2>
        <div id="dataContainer">
            <p>Atık girişlerinizi buradan görüntüleyebilirsiniz.</p>
        </div>
    </section>

    <section id="infoSection" class="content-section">
        <h2>Bilgilendirme</h2>
        <div class="infoBox" id="wasteInfoBox">
            <button class="toggle-btn" onclick="toggleInfo('wasteInfo')">Atık Türleri</button>
            <div class="infoContent" id="wasteInfo">
                <p>Atık türleri: Kağıt, Plastik, Cam, Metal, Elektronik, Yağ, Tekstil, Pil vb.</p>
            </div>
        </div>
        <div class="infoBox" id="sortingInfoBox">
            <button class="toggle-btn" onclick="toggleInfo('sortingInfo')">Ayrıştırma Bilgisi</button>
            <div class="infoContent" id="sortingInfo">
                <p>Atıklar ayrıştırılarak daha verimli geri dönüştürülebilir.</p>
            </div>
        </div>
        <div class="infoBox" id="creditInfoBox">
            <button class="toggle-btn" onclick="toggleInfo('creditInfo')">Kredi Sistemi</button>
            <div class="infoContent" id="creditInfo">
                <p>Toplanan atıkların miktarına göre kredi puanları verilir. Ayrıştırılmış atıklar daha yüksek puan alır.</p>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
