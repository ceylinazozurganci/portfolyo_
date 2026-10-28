// Proje numaraları: kartlarda "PROJE #id" olarak görünür (01, 02, 03 ...)
export const projects = [
  {
    id: "01",
    title: "Sosyal Medya Yorumları ile Duygu Analizi",
    description: "Sosyal medya yorumlarının metin ön işleme ve makine öğrenmesi yöntemleri kullanılarak olumlu, olumsuz ve nötr kategorilerde sınıflandırılması üzerine çalışma.",
    tags: ["Python", "NLP", "TF-IDF", "Machine Learning"],
    status: "Geliştiriliyor",
    link: "#"
  },
  {
    id: "02",
    title: "Türkiye Merkezli Dış Ticaret Ağı Analizi (2015–2024)",
    description: "Türkiye ve en büyük 40 ticaret ortağı arasındaki ihracat akışlarının Karmaşık Ağ Teorisi ve Sosyal Ağ Analizi (SNA) yöntemleriyle incelendiği; Disparity Filter omurga analizi, Louvain topluluk tespiti ve Null Model doğrulamasını içeren kapsamlı veri analitiği çalışması.",
    tags: ["Python", "NetworkX", "SNA", "Big Data", "Data Analysis"],
    status: "Tamamlandı",
    link: "https://ceylinazozurganci.github.io/turkiye-dis-ticaret-agi/network.html",
    linkLabel: "Canlı Harita / İncele",
    github: "https://github.com/ceylinazozurganci/turkiye-dis-ticaret-agi"
  },
  {
    id: "03",
    title: "KOBİ Kur – Dijital İşletme ve Yönetim Destek Platformu",
    description: "Küçük ve orta ölçekli işletmelerin (KOBİ) dijitalleşme süreçlerini kolaylaştırmak, iş modellerini veri odaklı yapılandırmak ve operasyonel verimliliklerini artırmak amacıyla geliştirilen web tabanlı karar destek projesi.",
    tags: ["Web Development", "Python", "Data Analysis", "Business Intelligence"],
    status: "Araştırma / Geliştirme",
    link: "#",   // Canlı demo linki gelince buraya yazın (ör. Vercel/Netlify)
    github: ""   // GitHub deposu linki gelince buraya yazın
  },
  {
    id: "04",
    title: "KOBİ Kur Riski Panosu ve Finansal Analiz Platformu",
    description: "KOBİ'lerin kur riski seviyelerini, döviz pozisyonlarını ve finansal duyarlılıklarını analiz ederek veri odaklı karar desteği sağlayan web tabanlı interaktif analiz ve yönetim panosu.",
    tags: ["Python", "Data Analysis", "Financial Analytics", "Web Development"],
    status: "Tamamlandı",
    link: "https://ceylinazozurganci.github.io/kobi-kur-riski-panosu/",
    linkLabel: "Canlı Demo / İncele",
    github: "https://github.com/ceylinazozurganci/kobi-kur-riski-panosu"
  }
];
