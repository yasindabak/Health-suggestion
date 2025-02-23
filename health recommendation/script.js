const adviceList = [
    "Bol bol su için.",
    "Sebze ve meyve tüketimini artırın.",
    "Tam tahıllı ürünleri tercih edin.",
    "Şekerli içeceklerden kaçının.",
    "Yeterli miktarda protein alın.",
    "Düzenli olarak egzersiz yapın.",
    "Yemeklerinizi evde hazırlayın.",
    "Yavaş yavaş ve dikkatlice yiyin.",
    "Sağlıklı yağlar tüketin.",
    "Kahvaltıyı atlamayın.",
    "Lif açısından zengin yiyecekler tüketin.",
    "Yemeklerinizi planlayın.",
    "Porsiyon kontrolüne dikkat edin.",
    "Fast food tüketimini azaltın.",
    "Daha fazla balık tüketin.",
    "Süt ürünlerini dengeli tüketin.",
    "Rafine karbonhidratlardan kaçının.",
    "Dışarıda yemek yediğinizde sağlıklı seçenekler seçin.",
    "Yemeklerden önce su için.",
    "Doğal ve işlenmemiş gıdaları tercih edin."
];

document.getElementById('get-advice').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    const advice = adviceList[randomIndex];
    document.getElementById('advice').textContent = advice;
});