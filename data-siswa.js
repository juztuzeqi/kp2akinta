// ==== DATA SISWA & TUTOR KP2A KINTAMANI ====
// Kelas: KTM1, KTM2, KTM3A, KTM3B, KTM5
//
// CATATAN:
// - KTM1 sudah final: 10 siswa sampel + tutor Ms Deslina
// - KTM2/3A/3B/5 masih berisi SEMUA siswa lain (94 siswa)
//   → pindahkan baris { nama, kode } ke kelas yang benar
// - Isi "tutor" untuk kelas selain KTM1

const DATA_KELAS = {
  KTM1: {
    tutor: "Ms Deslina",
    siswa: [
      { nama: "Angelina Victoria Ng", kode: "S2026100202555" },
      { nama: "Brayen Nicholas Sung", kode: "S2026010502304" },
      { nama: "Candice", kode: "S2024080501774" },
      { nama: "Charel F. Lim", kode: "S2022100300586" },
      { nama: "Dava Pratama", kode: "S2026081002490" },
      { nama: "Feliciano JT", kode: "S2026072102439" },
      { nama: "Michelle Lim", kode: "S2023040100785" },
      { nama: "Miko Fu", kode: "S2022060100228" },
      { nama: "Sucita Puteri Ramadhani", kode: "S2026030902356" },
      { nama: "T. Muhammad Adzra Gafi Alfarezi", kode: "S2025082202216" }
    ]
  },

  KTM2: {
    tutor: "ISI_NAMA_TUTOR_KTM2",
    siswa: [
      { nama: "Afkar Arziki Pratama", kode: "S2024071501644" },
      { nama: "Agatha Felicia", kode: "S2026110802595" },
      { nama: "Alexa Vega", kode: "S2026072402443" },
      { nama: "Alvian Putra", kode: "S2023032000786" },
      { nama: "Andi Saputra Sidabutar", kode: "S2026071402428" },
      { nama: "Argani Ananta Rusdi", kode: "S2026080102455" },
      { nama: "Arsyila Mutiara Hery", kode: "S2026080102457" },
      { nama: "Belicia Ilona Callysta Tan", kode: "S2026080602487" },
      { nama: "Bella Carolyn Agatha", kode: "S2025110302276" },
      { nama: "Brigita Lukisan Philomena", kode: "S2026100302560" },
      { nama: "Calvin Arshavin", kode: "S2017071800238" },
      { nama: "Carissa Lim", kode: "S2019040500587" },
      { nama: "Charles Christian Chua", kode: "S2024072501722" },
      { nama: "Charlie Charistine Chua", kode: "S2024072501721" },
      { nama: "Chyntya Olyvia", kode: "S2026100102554" },
      { nama: "Cicilia Vanessa", kode: "S2026033102363" },
      { nama: "Cindy Chan", kode: "S2026080402482" },
      { nama: "Daniel Noel", kode: "S2025073102162" },
      { nama: "Decy Nuryanti Sinaga", kode: "S2026022302343" },
      { nama: "Desmond Juliano", kode: "S2023071800900" }
    ]
  },

  KTM3A: {
    tutor: "ISI_NAMA_TUTOR_KTM3A",
    siswa: [
      { nama: "Dessy Princess Ng", kode: "S2026071502433" },
      { nama: "Dzakiyya Talita Shaki", kode: "S2026080102456" },
      { nama: "Elsahdai Lumbanraja", kode: "S2024080901789" },
      { nama: "Ethan Elvano Tan", kode: "S2025010701960" },
      { nama: "Evelin", kode: "S2025090802233" },
      { nama: "Evelyn Gracelia Lim", kode: "S2026070602422" },
      { nama: "Ezra Juyanti Sinaga", kode: "S2026022302344" },
      { nama: "Fairel Atharizz Calief", kode: "S2026073102460" },
      { nama: "Farhan Athariz Fathurrahman", kode: "S2026080102462" },
      { nama: "Fauzan Athariz Fadhirrahman", kode: "S2025071002108" },
      { nama: "Fauziah Athariz Rahmatunnisa", kode: "S2025071002107" },
      { nama: "Felina Nerizha Putri", kode: "S2026101202576" },
      { nama: "George Calvin Hutahuruk", kode: "S2025082202215" },
      { nama: "Grace", kode: "S2026080602486" },
      { nama: "Grayson Wilson", kode: "S2026010502305" },
      { nama: "Hanz Gracio", kode: "S2024080101760" },
      { nama: "Helen Claudia", kode: "S2026072302442" },
      { nama: "Helena Lukisan Melodya", kode: "S2026100302559" },
      { nama: "Howard Christeo", kode: "S2023072000904" },
      { nama: "Ichen", kode: "S2026072802447" }
    ]
  },

  KTM3B: {
    tutor: "ISI_NAMA_TUTOR_KTM3B",
    siswa: [
      { nama: "Janice Henrietta", kode: "S2023030100758" },
      { nama: "Jayvin Yeo", kode: "S2025080102167" },
      { nama: "Jessica .P", kode: "S2021010200385" },
      { nama: "Jessica Zhang", kode: "S2026100202557" },
      { nama: "Jiiyo Shen Louie", kode: "S2024080901791" },
      { nama: "Jord Willberth", kode: "S2022080200231" },
      { nama: "Jove Aprilia", kode: "S2021090900384" },
      { nama: "Joven", kode: "S2026052102396" },
      { nama: "Justin Lee", kode: "S2022050500239" },
      { nama: "Juvendy Wilbert Zhang", kode: "S2025041502058" },
      { nama: "Kaila Yasmine", kode: "S2026090302523" },
      { nama: "Kalvyn Tan", kode: "S2026083102508" },
      { nama: "Kayden Ng", kode: "S2026081802497" },
      { nama: "Keana Aulia Putri", kode: "S2025111702292" },
      { nama: "Kenda Tanvir", kode: "S2023070400834" },
      { nama: "Kenzie Nathania Tai", kode: "S2026040102362" },
      { nama: "Kenzo Alfarezel", kode: "S2026020702342" },
      { nama: "Kenzo Bastian", kode: "S2024022901568" },
      { nama: "Kezia Azzahra Prima", kode: "S2023071700894" },
      { nama: "Kylie", kode: "S2025091302241" }
    ]
  },

  KTM5: {
    tutor: "ISI_NAMA_TUTOR_KTM5",
    siswa: [
      { nama: "Laode Andy Dellvino", kode: "S2026011202323" },
      { nama: "Louis Lawrence", kode: "S2026090702532" },
      { nama: "M Gibran Al Fatih", kode: "S2026100702571" },
      { nama: "Mahesyah Abdi Utama", kode: "S2026070802425" },
      { nama: "Michael Lee", kode: "S2022070600537" },
      { nama: "Michelle Brigitta", kode: "S2025050902084" },
      { nama: "Mikhayla Putri Felicya", kode: "S2026040602380" },
      { nama: "Nathan Shen Lius", kode: "S2024080901790" },
      { nama: "Nathanael", kode: "S2023072200913" },
      { nama: "Naufal Fadhilah Ruskiadi", kode: "S2025042402068" },
      { nama: "Nicholas Kwok", kode: "S2022091200353" },
      { nama: "Noralisa", kode: "S2026041302381" },
      { nama: "Nur Rafidah Usman", kode: "S2026110202588" },
      { nama: "Olivia Abina Koh", kode: "S2026081102491" },
      { nama: "Olivia T", kode: "S2022091900356" },
      { nama: "Ophelic Tan", kode: "S2019072200569" },
      { nama: "Ray Jadden", kode: "S2025071502122" },
      { nama: "Rhicca Wiyanti Chen", kode: "S2026070102415" },
      { nama: "Rhiccky Winarson Chen", kode: "S2026070102416" },
      { nama: "Rhicco Winarson Chen", kode: "S2026070102417" },
      { nama: "Richie", kode: "S2025021302007" },
      { nama: "Richmond", kode: "S2024080501773" },
      { nama: "Shandy Olyvia . F", kode: "S2018081100594" },
      { nama: "Stephen", kode: "S2024091701840" },
      { nama: "Tyrone Septyo Liayrance", kode: "S2026040602370" },
      { nama: "Vanessa Angelin Yang", kode: "S2022040100157" },
      { nama: "Vianamira Sophia Fernando", kode: "S2025100902261" },
      { nama: "Viddy Andriansyah Barbalia", kode: "S2026033002361" },
      { nama: "Violorendo Tan", kode: "S2026071402430" },
      { nama: "Wellix Gatlardo", kode: "S2017071200528" },
      { nama: "Wilsen Zolen", kode: "S2021110300369" },
      { nama: "Windyson Huang", kode: "S2025071702136" },
      { nama: "Xander Gutomo", kode: "S2026010502308" },
      { nama: "Zefanya Giovanni Silitonga", kode: "S2024093001870" }
    ]
  }
};
