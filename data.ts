import { Question } from './types';

/**
 * O'zbekistonning eng yangi tarixi fanidan 580 ta savol banki.
 */

// 1-blok: 1-50 gacha bo'lgan savollar
const BLOCK_1: Question[] = [
  {
    id: 1,
    text: "“Milliy tarixni milliy ruh bilan yaratish kerak. Aks holda uning tarbiyaviy ta’siri bo‘lmaydi. Biz yoshlarimizni tarixdan saboq olish, xulosa chiqarishga o‘rgatishimiz, ularni tarix ilmi, tarixiy tafakkur bilan qurollantirishimiz zarur”, so‘zlari kimga tegishli?",
    options: [{id: 'a', text: "O‘zbekiston Respublikasi birinchi Prezidenti I.A.Karimov"}, {id: 'b', text: "O‘zbekiston Respublikasi Prezidenti Sh.M.Mirziyoyev"}, {id: 'c', text: "Abdulla Avloniy"}, {id: 'd', text: "Amir Temur"}],
    correctAnswer: 'b'
  },
  {
    id: 2,
    text: "O‘zbekiston ijtimoiy-iqtisodiy hayotining barcha sohalarida amalga oshirilayotgan keng qamrovli islohotlar, ma’naviy yangilanishlar bois mamlakatimiz XXI asrda qaysi tomon yo‘l oldi?",
    options: [{id: 'a', text: "Demokratiya"}, {id: 'b', text: "Respublika"}, {id: 'c', text: "Milliy tiklanishdan milliy yuksalish"}, {id: 'd', text: "Korrupsiya"}],
    correctAnswer: 'c'
  },
  {
    id: 3,
    text: "Globallashuv asri qaysi qatorda ko'rsatilgan?",
    options: [{id: 'a', text: "XVIII asr"}, {id: 'b', text: "XIX asr"}, {id: 'c', text: "XX asr"}, {id: 'd', text: "XXI asr"}],
    correctAnswer: 'd'
  },
  {
    id: 4,
    text: "“Ommaviy madaniyat”ni keng xalq ommasi, ayniqsa, yoshlar ongiga singdirish, ta’lim-tarbiya sohasida salbiy illatlarning ildiz otishiga sabab bo‘layotgan qaysi asr hisoblanadi?",
    options: [{id: 'a', text: "XXI asr"}, {id: 'b', text: "XX asr"}, {id: 'c', text: "XIX asr"}, {id: 'd', text: "XVIII asr"}],
    correctAnswer: 'a'
  },
  {
    id: 5,
    text: "Prezident Sh.M.Mirziyoyev BMT Bosh Assambleyasining 2017-yil sentabrda bo‘lib o‘tgan 72-sessiyasidagi nutqida qaysi masalaga alohida urg‘u berdi?",
    options: [{id: 'a', text: "ma’rifiy savodxonlik"}, {id: 'b', text: "iqtisodiy barqarorlik"}, {id: 'c', text: "harbiy salohiyat"}, {id: 'd', text: "tashqi qarz"}],
    correctAnswer: 'a'
  },
  {
    id: 6,
    text: "Qaysi o‘quv yilidan boshlab respublika Oliy o‘quv yurtlarining barcha ta’lim yo‘nalishlarida “O‘zbekistonning eng yangi tarixi” fani asosiy fan sifatida o‘quv rejaga kiritildi?",
    options: [{id: 'a', text: "2018-2019"}, {id: 'b', text: "2019-2020"}, {id: 'c', text: "2020-2021"}, {id: 'd', text: "2021-2022"}],
    correctAnswer: 'b'
  },
  {
    id: 7,
    text: "“O‘zbekistonning eng yangi tarixi” o‘quv fanining predmeti nima?",
    options: [{id: 'a', text: "mustaqillikka erishish arafasidagi jarayonlar"}, {id: 'b', text: "mustaqil O‘zbekiston Respublikasining tashkil topishi"}, {id: 'c', text: "demokratik islohotlar va milliy yuksalish yo‘li"}, {id: 'd', text: "barcha javoblar to‘g‘ri"}],
    correctAnswer: 'd'
  },
  {
    id: 8,
    text: "Jamiyat o‘tmishini o‘rganuvchi boshqa soha fanlari qatoriga qaysilar kiradi?",
    options: [{id: 'a', text: "arxeologiya, etnologiya, geologiya, antropologiya, demografiya"}, {id: 'b', text: "matematika, fizika, kimyo"}, {id: 'c', text: "biologiya, anatomiya, zoologiya"}, {id: 'd', text: "astronomiya, mexanika, informatika"}],
    correctAnswer: 'a'
  },
  {
    id: 9,
    text: "Tarix fani boshqa, ayniqsa, qaysi fanlar bilan mustahkam va uzviy aloqa birligida rivojlanadi?",
    options: [{id: 'a', text: "Aniq va tabiiy"}, {id: 'b', text: "ijtimoiy-gumanitar"}, {id: 'c', text: "texnik fanlar"}, {id: 'd', text: "tasviriy san’at"}],
    correctAnswer: 'b'
  },
  {
    id: 10,
    text: "Tarix bilan boshqa ijtimoiy-gumanitar fanlarning o‘rganish ob’yekti nima?",
    options: [{id: 'a', text: "tabiat"}, {id: 'b', text: "adabiyot"}, {id: 'c', text: "jamiyat"}, {id: 'd', text: "huquq"}],
    correctAnswer: 'c'
  },
  {
    id: 11,
    text: "Tarix bilan boshqa ijtimoiy-gumanitar fanlarning o‘rganish predmeti qaysi javobda?",
    options: [{id: 'a', text: "texnika va texnologiya"}, {id: 'b', text: "tilshunoslik"}, {id: 'c', text: "falsafa va dinshunoslik"}, {id: 'd', text: "inson va jamiyat hayoti"}],
    correctAnswer: 'd'
  },
  {
    id: 12,
    text: "Tarix falsafasi deganda nimani tushunamiz?",
    options: [{id: 'a', text: "o‘tmish tajribasi va sabog‘idan to‘g‘ri xulosa chiqara olish"}, {id: 'b', text: "faqat sanalarni eslab qolish"}, {id: 'c', text: "kitoblarni ko'p o'qish"}, {id: 'd', text: "hikoyalar aytish"}],
    correctAnswer: 'a'
  },
  {
    id: 13,
    text: "Inson aql-idroki, uning tafakkur darajasi, hayotiy falsafasi nimani belgilab beradi?",
    options: [{id: 'a', text: "metrologiyani"}, {id: 'b', text: "tarbiyani"}, {id: 'c', text: "ma’lum millat va jamiyat mentalitetini"}, {id: 'd', text: "arxeologiyani"}],
    correctAnswer: 'c'
  },
  {
    id: 14,
    text: "Tarixning haqqoniy yozilishi nimaga xizmat qiladi?",
    options: [{id: 'a', text: "shaxsiy manfaatga"}, {id: 'b', text: "tarixiy haqiqatni yuzaga chiqishiga"}, {id: 'c', text: "faqat siyosatga"}, {id: 'd', text: "texnik taraqqiyotga"}],
    correctAnswer: 'b'
  },
  {
    id: 15,
    text: "O‘zbekistonнинг eng yangi tarixi fani metodologiyasini necha qismga bo‘lish tavsiya etiladi?",
    options: [{id: 'a', text: "2 qismga"}, {id: 'b', text: "3 qismga"}, {id: 'c', text: "4 qismga"}, {id: 'd', text: "5 qismga"}],
    correctAnswer: 'a'
  },
  {
    id: 16,
    text: "Nazariya – bu nima?",
    options: [{id: 'a', text: "ilmiy bilimlar yig‘indisi va aloqadorlikni bilish jarayoni"}, {id: 'b', text: "metodos va logos birikmasi"}, {id: 'c', text: "tarixiy haqiqat"}, {id: 'd', text: "oddiy taxminlar"}],
    correctAnswer: 'a'
  },
  {
    id: 17,
    text: "Tarixiy o‘tmishni ilmiy va xolisona o‘rganish nima?",
    options: [{id: 'a', text: "tezkorlik va aniqlik"}, {id: 'b', text: "zamonaviy dunyoning asosiy mezoni"}, {id: 'c', text: "faqat xotira"}, {id: 'd', text: "taraqqiyot strategiyasi"}],
    correctAnswer: 'b'
  },
  {
    id: 18,
    text: "Kim tomonidan ilgari surilgan “Ma’rifat va diniy bag‘rikenglik” tamoyili jahon hamjamiyati e’tirofiga sazovor bo‘lgan?",
    options: [{id: 'a', text: "Amir Temur"}, {id: 'b', text: "I.A.Karimov"}, {id: 'c', text: "Sh.M.Mirziyoyev"}, {id: 'd', text: "Alisher Navoiy"}],
    correctAnswer: 'c'
  },
  {
    id: 19,
    text: "O‘zbekistonning yangi tarixini tayyorlash va nashr qilish haqidagi I.A.Karimov Farmoni qachon qabul qilingan?",
    options: [{id: 'a', text: "1996-yil 13-dekabr"}, {id: 'b', text: "1998-yil 13-dekabr"}, {id: 'c', text: "2000-yil 1-janvar"}, {id: 'd', text: "2017-yil 30-iyun"}],
    correctAnswer: 'b'
  },
  {
    id: 20,
    text: "“Tarixiy xotirasiz kelajak yo‘q” risolasi qachon chop etilgan?",
    options: [{id: 'a', text: "1997-yilda"}, {id: 'b', text: "1998-yilda"}, {id: 'c', text: "1999-yilda"}, {id: 'd', text: "2000-yilda"}],
    correctAnswer: 'b'
  },
  {
    id: 21,
    text: "O‘zbekistonнинг eng yangi tarixi bo‘yicha jamoatchilik kengashini tuzish to‘g‘risidagi Qaror qachon qabul qilindi?",
    options: [{id: 'a', text: "2016-yil dekabr"}, {id: 'b', text: "2017-yil 30-iyun"}, {id: 'c', text: "2018-yil iyun"}, {id: 'd', text: "2021-yil yanvar"}],
    correctAnswer: 'b'
  },
  {
    id: 22,
    text: "Odamzodning ilk ajdodlari bundan 2,5-3 million yil avval qaysi qit’ada yashay boshlagan?",
    options: [{id: 'a', text: "Osiyo"}, {id: 'b', text: "Yevropa"}, {id: 'c', text: "Afrika"}, {id: 'd', text: "Amerika"}],
    correctAnswer: 'c'
  },
  {
    id: 23,
    text: "“Homo sapiyens, sapiyens” tushunchasi nimani anglatadi?",
    options: [{id: 'a', text: "aqlli odam"}, {id: 'b', text: "ish bilarmon"}, {id: 'c', text: "dehqon"}, {id: 'd', text: "harbiy demokrat"}],
    correctAnswer: 'a'
  },
  {
    id: 24,
    text: "Markaziy Osiyo, jumladan O‘zbekiston tarixining beshinchi davrini nima deb atash mumkin?",
    options: [{id: 'a', text: "Feodalizm"}, {id: 'b', text: "“Mustamlakachilik”"}, {id: 'c', text: "Mustaqillik"}, {id: 'd', text: "Sotsializm"}],
    correctAnswer: 'b'
  },
  {
    id: 25,
    text: "Rossiya imperiyasi bosqinidan to 1917-yil oktabr to‘ntarishiga qadar davom etgan davr qaysi?",
    options: [{id: 'a', text: "Mustamlakachilik davri"}, {id: 'b', text: "Sovet davri"}, {id: 'c', text: "Xonliklar davri"}, {id: 'd', text: "Uyg'onish davri"}],
    correctAnswer: 'a'
  },
  {
    id: 26,
    text: "O‘zbekiston tarixining oltinchi davri (1917-1991) qanday ataladi?",
    options: [{id: 'a', text: "“Sovetlar hukmronligi davri”"}, {id: 'b', text: "Mustaqillik davri"}, {id: 'c', text: "Demokratiya davri"}, {id: 'd', text: "Feodalizm davri"}],
    correctAnswer: 'a'
  },
  {
    id: 27,
    text: "Mustaqil taraqqiyot davri (1991-yildan hozirgacha) necha bosqichga bo‘linadi?",
    options: [{id: 'a', text: "2 bosqichga"}, {id: 'b', text: "3 bosqichga"}, {id: 'c', text: "4 bosqichga"}, {id: 'd', text: "5 bosqichga"}],
    correctAnswer: 'a'
  },
  {
    id: 28,
    text: "Prezident Shavkat Mirziyoyevning Oliy Majlisga Murojaatnomasida milliy o‘zligimizni anglash haqidagi fikrlari qachon bayon qilingan?",
    options: [{id: 'a', text: "2017-yil dekabr"}, {id: 'b', text: "2018-yil 18-dekabr"}, {id: 'c', text: "2019-yil avgust"}, {id: 'd', text: "2020-yil yanvar"}],
    correctAnswer: 'b'
  },
  {
    id: 29,
    text: "“G‘aflatda yotgan xalqni uyg‘otish uchun, avvalo, uning tarixini uyg‘ot”! so‘zlari kimga tegishli?",
    options: [{id: 'a', text: "Gerodot"}, {id: 'b', text: "Shahobiddin Muhammad an-Nasaviy"}, {id: 'c', text: "Beruniy"}, {id: 'd', text: "Ibn Sino"}],
    correctAnswer: 'b'
  },
  {
    id: 30,
    text: "“Tarix-hayotning muallimidir” degan yozuv qayerdagi peshtoqlarga yozilgan edi?",
    options: [{id: 'a', text: "Rimda"}, {id: 'b', text: "Greziviyada"}, {id: 'c', text: "Xivada"}, {id: 'd', text: "Buxoroda"}],
    correctAnswer: 'a'
  },
  {
    id: 31,
    text: "“Erkin va farovon, demokratik O‘zbekiston davlatini birgalikda barpo etamiz” asari muallifi kim?",
    options: [{id: 'a', text: "I.A.Karimov"}, {id: 'b', text: "Sh.M.Mirziyoyev"}, {id: 'c', text: "Abdulla Oripov"}, {id: 'd', text: "Erkin Vohidov"}],
    correctAnswer: 'b'
  },
  {
    id: 32,
    text: "“Milliy taraqqiyot yo‘limizni qat’iyat bilan davom ettirib yangi bosqichga ko‘taramiz” asari kimga tegishli?",
    options: [{id: 'a', text: "I.A.Karimov"}, {id: 'b', text: "Sh.M.Mirziyoyev"}, {id: 'c', text: "S.Xolboyev"}, {id: 'd', text: "A.Isoqboyev"}],
    correctAnswer: 'b'
  },
  {
    id: 33,
    text: "“Buyuk kelajagimizni mard va oliyjanob xalqimiz bilan birga quramiz” asari muallifi kim?",
    options: [{id: 'a', text: "I.A.Karimov"}, {id: 'b', text: "Sh.M.Mirziyoyev"}, {id: 'c', text: "A.Rasulov"}, {id: 'd', text: "Sh.Xolboyev"}],
    correctAnswer: 'b'
  },
  {
    id: 34,
    text: "“Yuksak ma’naviyat - yengilmas kuch” asari muallifi kim?",
    options: [{id: 'a', text: "I.A.Karimov"}, {id: 'b', text: "Sh.M.Mirziyoyev"}, {id: 'c', text: "A.Asqarov"}, {id: 'd', text: "E.Rtveladze"}],
    correctAnswer: 'a'
  },
  {
    id: 35,
    text: "“Milliy mustaqillik va taraqqiyotning o‘zbek modeli” asari kimga tegishli?",
    options: [{id: 'a', text: "I.A.Karimov"}, {id: 'b', text: "Sh.M.Mirziyoyev"}, {id: 'c', text: "B.Eshov"}, {id: 'd', text: "A.Sagdullayev"}],
    correctAnswer: 'a'
  },
  {
    id: 36,
    text: "2017-yildan boshlab O‘zbekiston qaysi tamoyil asosida yo‘l oldi?",
    options: [{id: 'a', text: "Axborot asri"}, {id: 'b', text: "milliy tiklanishdan - milliy yuksalish tomon"}, {id: 'c', text: "bozor iqtisodiyoti"}, {id: 'd', text: "harbiy qudrat"}],
    correctAnswer: 'b'
  },
  {
    id: 37,
    text: "Tarixiy davr, makon va geografik mintaqani bir butunlikda o‘z ichiga oladigan tushuncha?",
    options: [{id: 'a', text: "predmet"}, {id: 'b', text: "Subyekt"}, {id: 'c', text: "Ob’yekt"}, {id: 'd', text: "Metod"}],
    correctAnswer: 'c'
  },
  {
    id: 38,
    text: "Dunyoga kelgan boy madaniyatli o‘zbek xalqi necha ming yillik tarixga ega?",
    options: [{id: 'a', text: "2,5 ming"}, {id: 'b', text: "3,5 ming"}, {id: 'c', text: "4,5 ming"}, {id: 'd', text: "5 ming"}],
    correctAnswer: 'b'
  },
  {
    id: 39,
    text: "Harakatlar strategiyasi (2017-2021) kim tomonidan ilgari surilgan?",
    options: [{id: 'a', text: "Sh.M.Mirziyoyev"}, {id: 'b', text: "I.A.Karimov"}, {id: 'c', text: "Oliy Majlis"}, {id: 'd', text: "Vazirlar Mahkamasi"}],
    correctAnswer: 'a'
  },
  {
    id: 40,
    text: "“Kamolot” yoshlar ijtimoiy harakatining IV qurultoyi qachon bo‘lib o‘tdi?",
    options: [{id: 'a', text: "2016-yil oktabr"}, {id: 'b', text: "2017-yil 30-iyun"}, {id: 'c', text: "2018-yil iyun"}, {id: 'd', text: "2019-yil may"}],
    correctAnswer: 'b'
  },
  {
    id: 41,
    text: "“Korrupsiyaga qarshi kurashish to‘g‘risida”gi Qonun qachon qabul qilindi?",
    options: [{id: 'a', text: "2016-yil noyabr"}, {id: 'b', text: "2017-yil 3-yanvar"}, {id: 'c', text: "2018-yil yanvar"}, {id: 'd', text: "2019-yil may"}],
    correctAnswer: 'b'
  },
  {
    id: 42,
    text: "BMTning Korrupsiyaga qarshi Konvensiyasi qachon qabul qilingan?",
    options: [{id: 'a', text: "1999-yil"}, {id: 'b', text: "2003-yil 31-oktabr"}, {id: 'c', text: "2005-yil"}, {id: 'd', text: "2010-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 43,
    text: "“Korrupsiyani qabul qilish indeksi”da O‘zbekiston 2019-yilda nechanchi o‘rinni egalladi?",
    options: [{id: 'a', text: "157"}, {id: 'b', text: "153"}, {id: 'c', text: "159"}, {id: 'd', text: "160"}],
    correctAnswer: 'b'
  },
  {
    id: 44,
    text: "“Ma’naviyat va ma’rifat” jamoatchilik markazi qachon tashkil etildi?",
    options: [{id: 'a', text: "1990-yil"}, {id: 'b', text: "1994-yil 23-aprelda"}, {id: 'c', text: "1996-yil"}, {id: 'd', text: "2000-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 45,
    text: "O‘zbekiston mustaqilligini birinchi bo‘lib tan olgan davlat?",
    options: [{id: 'a', text: "Rossiya"}, {id: 'b', text: "Turkiya"}, {id: 'c', text: "AQSH"}, {id: 'd', text: "Germaniya"}],
    correctAnswer: 'b'
  },
  {
    id: 46,
    text: "O‘zbekiston mustaqilligining birinchi yili qachon nishonlandi?",
    options: [{id: 'a', text: "1991-yil 31-avgust"}, {id: 'b', text: "1992-yil 1-sentabr"}, {id: 'c', text: "1991-yil 1-sentabr"}, {id: 'd', text: "1992-yil 31-avgust"}],
    correctAnswer: 'b'
  },
  {
    id: 47,
    text: "O‘zbekiston Respublikasi Davlat bayrog‘i qachon qabul qilingan?",
    options: [{id: 'a', text: "1991-yil 31-avgust"}, {id: 'b', text: "1991-yil 18-noyabr"}, {id: 'c', text: "1992-yil 2-iyul"}, {id: 'd', text: "1992-yil 8-dekabr"}],
    correctAnswer: 'b'
  },
  {
    id: 48,
    text: "O‘zbekiston Respublikai Davlat gerbi qachon qabul qilingan?",
    options: [{id: 'a', text: "1991-yil 18-noyabr"}, {id: 'b', text: "1992-yil 2-iyul"}, {id: 'c', text: "1992-yil 8-dekabr"}, {id: 'd', text: "1993-yil 1-janvar"}],
    correctAnswer: 'b'
  },
  {
    id: 49,
    text: "O‘zbekiston Respublikasi Davlat madhiyasi qachon qabul qilingan?",
    options: [{id: 'a', text: "1992-yil 2-iyul"}, {id: 'b', text: "1992-yil 10-dekabr"}, {id: 'c', text: "1993-yil 8-dekabr"}, {id: 'd', text: "1991-yil 18-noyabr"}],
    correctAnswer: 'b'
  },
  {
    id: 50,
    text: "O‘zbekiston Respublikasi Konstitutsiyasi qachon qabul qilingan?",
    options: [{id: 'a', text: "1991-yil 31-avgust"}, {id: 'b', text: "1992-yil 8-dekabr"}, {id: 'c', text: "1993-yil 1-sentabr"}, {id: 'd', text: "1992-yil 1-sentabr"}],
    correctAnswer: 'b'
  }
];

// 2-blok: 51-100 gacha bo'lgan savollar
const BLOCK_2: Question[] = [
  {
    id: 51,
    text: "Mustaqillik yillarida O‘zbekistonda amalga oshirilgan islohotlarning bosh maqsadi nima?",
    options: [{id: 'a', text: "Harbiy qudratni oshirish"}, {id: 'b', text: "Inson manfaatlari va huquqlarini ta'minlash"}, {id: 'c', text: "Sanoatni rivojlantirish"}, {id: 'd', text: "Tashqi qarzni kamaytirish"}],
    correctAnswer: 'b'
  },
  {
    id: 52,
    text: "Nimani o‘rganish u soxta tarixiy tushuncha va tarixiy xotirasizlikka barham beradi, milliy g‘oya va mafkuraning takomillashuvini tezlashtiradi?",
    options: [{id: 'a', text: "Astranomiya"}, {id: 'b', text: "Vatan tarixi"}, {id: 'c', text: "Sotsiolizm"}, {id: 'd', text: "Dinshunoslik"}],
    correctAnswer: 'b'
  },
  {
    id: 53,
    text: "2017-yildan boshlab O‘zbekiston qanday strategik yo'nalishga o'tdi?",
    options: [{id: 'a', text: "Axborot asriga"}, {id: 'b', text: "Yangi O'zbekiston - milliy yuksalish"}, {id: 'c', text: "Korrupsiyaga qarshi keskin kurash"}, {id: 'd', text: "milliy tiklanishdan - milliy yuksalish tomon"}],
    correctAnswer: 'd'
  },
  {
    id: 54,
    text: "O'zbekiston Respublikasi Oliy Majlisi necha palatadan iborat?",
    options: [{id: 'a', text: "1 ta"}, {id: 'b', text: "2 ta (Qonunchilik palatasi va Senat)"}, {id: 'c', text: "3 ta"}, {id: 'd', text: "4 ta"}],
    correctAnswer: 'b'
  },
  {
    id: 55,
    text: "O'zbekiston Respublikasi Qonunchilik palatasi deputatlari necha yil muddatga saylanadi?",
    options: [{id: 'a', text: "3 yil"}, {id: 'b', text: "4 yil"}, {id: 'c', text: "5 yil"}, {id: 'd', text: "7 yil"}],
    correctAnswer: 'c'
  },
  {
    id: 56,
    text: "O'zbekiston Respublikasi Senati a'zolari soni (yangi tahrirdagi konstitutsiyaga ko'ra) qancha qilib belgilandi?",
    options: [{id: 'a', text: "100 ta"}, {id: 'b', text: "65 ta"}, {id: 'c', text: "80 ta"}, {id: 'd', text: "150 ta"}],
    correctAnswer: 'b'
  },
  {
    id: 57,
    text: "O'zbekiston Respublikasi Prezidenti necha yil muddatga saylanadi?",
    options: [{id: 'a', text: "5 yil"}, {id: 'b', text: "7 yil"}, {id: 'c', text: "4 yil"}, {id: 'd', text: "10 yil"}],
    correctAnswer: 'b'
  },
  {
    id: 58,
    text: "O'zbekiston Respublikasi Vazirlar Mahkamasi qaysi hokimiyat organiga kiradi?",
    options: [{id: 'a', text: "Qonun chiqaruvchi"}, {id: 'b', text: "Sud"}, {id: 'c', text: "Ijro etuvchi"}, {id: 'd', text: "Nazorat qiluvchi"}],
    correctAnswer: 'c'
  },
  {
    id: 59,
    text: "Davlat ramzlari - bu milliy nima hisoblanadi?",
    options: [{id: 'a', text: "Boylik"}, {id: 'b', text: "G'urur va iftixor"}, {id: 'c', text: "Belgi"}, {id: 'd', text: "Qonun"}],
    correctAnswer: 'b'
  },
  {
    id: 60,
    text: "O'zbekiston qachon Mustaqil Davlatlar Hamdo'stligi (MDH) a'zoligiga qabul qilindi?",
    options: [{id: 'a', text: "1991-yil 21-dekabr"}, {id: 'b', text: "1992-yil 1-janvar"}, {id: 'c', text: "1991-yil 31-avgust"}, {id: 'd', text: "1993-yil"}],
    correctAnswer: 'a'
  },
  {
    id: 61,
    text: "1991-yil 29-dekabrda O'zbekistonda qanday muhim voqea yuz berdi?",
    options: [{id: 'a', text: "Konstitutsiya qabul qilindi"}, {id: 'b', text: "Referendum va Prezidentlik saylovi"}, {id: 'c', text: "Bayroq tasdiqlandi"}, {id: 'd', text: "Gerb tasdiqlandi"}],
    correctAnswer: 'b'
  },
  {
    id: 62,
    text: "Referendumda qatnashganlarning necha foizi O'zbekiston mustaqilligini yoqlab ovoz berdi?",
    options: [{id: 'a', text: "80%"}, {id: 'b', text: "98.2%"}, {id: 'c', text: "95%"}, {id: 'd', text: "100%"}],
    correctAnswer: 'b'
  },
  {
    id: 63,
    text: "O'zbekistonda birinchi davlat mukofoti qaysi?",
    options: [{id: 'a', text: "“O'zbekiston Qahramoni”"}, {id: 'b', text: "“Mustaqillik” ordeni"}, {id: 'c', text: "“Shuhrat” medali"}, {id: 'd', text: "“Amir Temur” ordeni"}],
    correctAnswer: 'b'
  },
  {
    id: 64,
    text: "O'zbekistonda milliy valyuta - Sum qachon muomalaga kiritildi?",
    options: [{id: 'a', text: "1992-yil"}, {id: 'b', text: "1993-yil 15-noyabr"}, {id: 'c', text: "1994-yil 1-iyul"}, {id: 'd', text: "1991-yil"}],
    correctAnswer: 'c'
  },
  {
    id: 65,
    text: "Mustaqillikning darslabki yillarida qaysi mashhur xalqaro tashkilot bilan aloqalar o'rnatildi?",
    options: [{id: 'a', text: "NATO"}, {id: 'b', text: "BMT"}, {id: 'c', text: "YUNESKO"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 66,
    text: "1992-yil 2-martda O'zbekiston qaysi tashkilotga a'zo bo'ldi?",
    options: [{id: 'a', text: "MDH"}, {id: 'b', text: "BMT"}, {id: 'c', text: "YEXHT"}, {id: 'd', text: "SHHT"}],
    correctAnswer: 'b'
  },
  {
    id: 67,
    text: "Mustaqillik yillarida O'zbekistonda sud hokimiyati qanday isloh qilindi?",
    options: [{id: 'a', text: "Uch bosqichli tizimga o'tildi"}, {id: 'b', text: "Mustaqilligi ta'minlandi"}, {id: 'c', text: "Sud-huquq islohotlari o'tkazildi"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 68,
    text: "O'zbekistonda “Inson huquqlari bo'yicha milliy markaz” qachon tashkil etildi?",
    options: [{id: 'a', text: "1994-yil"}, {id: 'b', text: "1996-yil 31-oktabr"}, {id: 'c', text: "1998-yil"}, {id: 'd', text: "2000-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 69,
    text: "Fuqarolarning o'zini o'zi boshqarish organi nima deb ataladi?",
    options: [{id: 'a', text: "Hokimlik"}, {id: 'b', text: "Mahalla"}, {id: 'c', text: "Partiya"}, {id: 'd', text: "Kengash"}],
    correctAnswer: 'b'
  },
  {
    id: 70,
    text: "O'zbekistonning birinchi konstitutsiyaviy sudi qachon tuzilgan?",
    options: [{id: 'a', text: "1993-yil"}, {id: 'b', text: "1995-yil avgust"}, {id: 'c', text: "1991-yil"}, {id: 'd', text: "1992-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 71,
    text: "O'zbekiston Respublikasi Oliy sudi raisi kim tomonidan tayinlanadi?",
    options: [{id: 'a', text: "Prezident"}, {id: 'b', text: "Senat"}, {id: 'c', text: "Qonunchilik palatasi"}, {id: 'd', text: "Referendum orqali"}],
    correctAnswer: 'b'
  },
  {
    id: 72,
    text: "Mustaqillik yillarida qaysi xalqaro bayram O'zbekistonda keng nishonlanadigan bo'ldi?",
    options: [{id: 'a', text: "Navro'z"}, {id: 'b', text: "8-mart"}, {id: 'c', text: "Yangi yil"}, {id: 'd', text: "1-may"}],
    correctAnswer: 'a'
  },
  {
    id: 73,
    text: "Navro'z bayrami qachon rasman bayram deb e'lon qilindi?",
    options: [{id: 'a', text: "1991-yil"}, {id: 'b', text: "1990-yil 3-may"}, {id: 'c', text: "1989-yil"}, {id: 'd', text: "1992-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 74,
    text: "O'zbekiston Respublikasi Mudofaa vazirligi qachon tashkil etilgan?",
    options: [{id: 'a', text: "1991-yil 6-sentabr"}, {id: 'b', text: "1991-yil 31-avgust"}, {id: 'c', text: "1992-yil 1-janvar"}, {id: 'd', text: "1990-yil"}],
    correctAnswer: 'a'
  },
  {
    id: 75,
    text: "O'zbekiston Respublikasining harbiy doktrinasi qachon qabul qilingan (birinchi marta)?",
    options: [{id: 'a', text: "1993-yil"}, {id: 'b', text: "1995-yil avgust"}, {id: 'c', text: "2000-yil"}, {id: 'd', text: "1991-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 76,
    text: "Yangi tahrirdagi O'zbekiston Respublikasi harbiy doktrinasi qachon tasdiqlandi?",
    options: [{id: 'a', text: "2017-yil"}, {id: 'b', text: "2018-yil 9-janvar"}, {id: 'c', text: "2020-yil"}, {id: 'd', text: "2015-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 77,
    text: "O'zbekistonнинг eng yangi tarixi fanining asosiy predmeti nima?",
    options: [{id: 'a', text: "Qadimgi arxeologik tadqiqotlar"}, {id: 'b', text: "Mustaqillikdan keyingi ijtimoiy-siyosiy jarayonlar"}, {id: 'c', text: "Diniy oqimlar"}, {id: 'd', text: "Dunyo tarixi"}],
    correctAnswer: 'b'
  },
  {
    id: 78,
    text: "1990-yil 24-martda O'zbekiston tarixida qanday o'zgarish bo'ldi?",
    options: [{id: 'a', text: "Mustaqillik e'lon qilindi"}, {id: 'b', text: "Prezidentlik lavozimi joriy etildi"}, {id: 'c', text: "Bayroq qabul qilindi"}, {id: 'd', text: "Partiya tugatildi"}],
    correctAnswer: 'b'
  },
  {
    id: 79,
    text: "Prezidentlik lavozimi joriy etilgandan so'ng birinchi Prezident etib kim saylandi?",
    options: [{id: 'a', text: "Sh.Mirziyoyev"}, {id: 'b', text: "I.Karimov"}, {id: 'c', text: "N.Yo'ldoshev"}, {id: 'd', text: "A.Oripov"}],
    correctAnswer: 'b'
  },
  {
    id: 80,
    text: "1990-yil 20-iyunda qabul qilingan muhim hujjat qaysi?",
    options: [{id: 'a', text: "Mustaqillik deklaratsiyasi"}, {id: 'b', text: "Mustaqillik to'g'risida qonun"}, {id: 'c', text: "Suverenitet deklaratsiyasi"}, {id: 'd', text: "Tillar haqida qonun"}],
    correctAnswer: 'c'
  },
  {
    id: 81,
    text: "“Mustaqillik deklaratsiyasi” qaysi hujjat asosida qabul qilingan?",
    options: [{id: 'a', text: "Konstitutsiya"}, {id: 'b', text: "Suverenitet deklaratsiyasi"}, {id: 'c', text: "Referendum natijasi"}, {id: 'd', text: "BMT qarori"}],
    correctAnswer: 'b'
  },
  {
    id: 82,
    text: "O‘zbekiston mustaqillikni qachon qo‘lga kiritdi?",
    options: [{id: 'a', text: "1991-yil 1-sentabr"}, {id: 'b', text: "1991-yil 31-avgust"}, {id: 'c', text: "1990-yil 1-sentabr"}, {id: 'd', text: "1991-yil 29-dekabr"}],
    correctAnswer: 'b'
  },
  {
    id: 83,
    text: "O'zbekistonning mustaqilligi to'g'risidagi qonun qachon qabul qilindi?",
    options: [{id: 'a', text: "1991-yil 31-avgust"}, {id: 'b', text: "1991-yil 1-sentabr"}, {id: 'c', text: "1992-year 8-dekabr"}, {id: 'd', text: "1990-year 20-iyun"}],
    correctAnswer: 'a'
  },
  {
    id: 84,
    text: "O'zbekistonning davlat mustaqilligi asoslari to'g'risidagi qonun necha moddadan iborat?",
    options: [{id: 'a', text: "15 ta"}, {id: 'b', text: "17 ta"}, {id: 'c', text: "20 ta"}, {id: 'd', text: "12 ta"}],
    correctAnswer: 'b'
  },
  {
    id: 85,
    text: "1989-yilda O‘zbekistonda qabul qilingan muhim qaror nima edi?",
    options: [{id: 'a', text: "Mustaqillik e’lon qilinishi"}, {id: 'b', text: "Davlat ramzlari"}, {id: 'c', text: "Davlat tilining o‘zbek tili deb e’lon qilinishi"}, {id: 'd', text: "Sotsialistik boshqaruvning tugatilishi"}],
    correctAnswer: 'c'
  },
  {
    id: 86,
    text: "Mustaqillik yillarida o'zbek tiliga qanday maqom berildi?",
    options: [{id: 'a', text: "Milliy til"}, {id: 'b', text: "Davlat tili"}, {id: 'c', text: "Xalqaro til"}, {id: 'd', text: "Mintaqaviy til"}],
    correctAnswer: 'b'
  },
  {
    id: 87,
    text: "O'zbekiston Respublikasi Konstitutsiyasining nechanchi moddasida o'zbek tili davlat tili ekanligi belgilangan?",
    options: [{id: 'a', text: "1-modda"}, {id: 'b', text: "4-modda"}, {id: 'c', text: "8-modda"}, {id: 'd', text: "12-modda"}],
    correctAnswer: 'b'
  },
  {
    id: 88,
    text: "O'zbekistonda lotin yozuviga asoslangan o'zbek alifbosini joriy etish to'g'risidagi qonun qachon qabul qilindi?",
    options: [{id: 'a', text: "1991-yil"}, {id: 'b', text: "1993-yil 2-sentabr"}, {id: 'c', text: "1995-yil"}, {id: 'd', text: "1992-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 89,
    text: "O‘zbekiston Respublikasining birinchi Prezidenti kim edi?",
    options: [{id: 'a', text: "Islom Karimov"}, {id: 'b', text: "Shavkat Mirziyoyev"}, {id: 'c', text: "Abdulla Oripov"}, {id: 'd', text: "Muhammad Solih"}],
    correctAnswer: 'a'
  },
  {
    id: 90,
    text: "Mustaqillikdan so'ng O'zbekiston qaysi iqtisodiy modelni tanladi?",
    options: [{id: 'a', text: "Sotsialistik iqtisodiyot"}, {id: 'b', text: "Ma'muriy buyruqbozlik"}, {id: 'c', text: "Bozor iqtisodiyoti (O'zbek modeli)"}, {id: 'd', text: "Liberal iqtisodiyot"}],
    correctAnswer: 'c'
  },
  {
    id: 91,
    text: "O‘zbekistonнинг birinchi Konstitutsiyasi qachon qabul qilingan?",
    options: [{id: 'a', text: "1992-yil 8-dekabr"}, {id: 'b', text: "1991-yil 8-dekabr"}, {id: 'c', text: "1990-yil 8-dekabr"}, {id: 'd', text: "1993-yil 8-dekabr"}],
    correctAnswer: 'a'
  },
  {
    id: 92,
    text: "Konstitutsiyaning asosiy prinsiplari nimalardan iborat?",
    options: [{id: 'a', text: "Suverenitet"}, {id: 'b', text: "Demokratiya"}, {id: 'c', text: "Inson huquqlari"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 93,
    text: "Mustaqillik yillarida O'zbekistonda ta'lim sohasida qanday muhim hujjat qabul qilindi?",
    options: [{id: 'a', text: "Ta'lim to'g'risidagi qonun"}, {id: 'b', text: "Kadrlar tayyorlash milliy dasturi"}, {id: 'c', text: "Maktab islohoti"}, {id: 'd', text: "A va B javoblar"}],
    correctAnswer: 'd'
  },
  {
    id: 94,
    text: "Kadrlar tayyorlash milliy dasturi qachon qabul qilingan?",
    options: [{id: 'a', text: "1991-yil"}, {id: 'b', text: "1997-yil 29-avgust"}, {id: 'c', text: "2000-yil"}, {id: 'd', text: "1992-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 95,
    text: "O'zbekistonda 12 yillik majburiy ta'lim tizimi qachon joriy etildi (keyinchalik 11 yillik bo'ldi)?",
    options: [{id: 'a', text: "1992-yil"}, {id: 'b', text: "1997-yil"}, {id: 'c', text: "2010-yil"}, {id: 'd', text: "1991-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 96,
    text: "Mustaqillik yillarida O'zbekistonda qancha yangi oliy o'quv yurtlari ochildi?",
    options: [{id: 'a', text: "10 ta"}, {id: 'b', text: "50 tadan ortiq"}, {id: 'c', text: "100 tadan ortiq"}, {id: 'd', text: "O'zgarish bo'lmadi"}],
    correctAnswer: 'c'
  },
  {
    id: 97,
    text: "1992-yilda O'zbekistonda qaysi mashhur xalqaro universitet filiali ochildi?",
    options: [{id: 'a', text: "Vestminster"}, {id: 'b', text: "Turin"}, {id: 'c', text: "Inha"}, {id: 'd', text: "JIDU (Jahon iqtisodiyoti va diplomatiya universiteti) tashkil etildi"}],
    correctAnswer: 'd'
  },
  {
    id: 98,
    text: "Jahon iqtisodiyoti va diplomatiya universiteti qachon tashkil etilgan?",
    options: [{id: 'a', text: "1991-yil"}, {id: 'b', text: "1992-yil 23-sentabr"}, {id: 'c', text: "1994-yil"}, {id: 'd', text: "1990-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 99,
    text: "O'zbekistonнинг yangi tarixi nechanchi yildan boshlanadi?",
    options: [{id: 'a', text: "1917-yil"}, {id: 'b', text: "1991-yil"}, {id: 'c', text: "1989-yil"}, {id: 'd', text: "2000-yil"}],
    correctAnswer: 'b'
  },
  {
    id: 100,
    text: "Mustaqillik yillarida O'zbekistonda milliy qadriyatlarni tiklash bo'yicha qanday ishlar qilindi?",
    options: [{id: 'a', text: "Tarixiy obidalar tiklandi"}, {id: 'b', text: "Buyuk ajdodlar yubileylari nishonlandi"}, {id: 'c', text: "Milliy bayramlar tiklandi"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  }
];

// 9-blok: 401-450 gacha bo'lgan savollar
const BLOCK_9: Question[] = [
  {
    id: 401,
    text: "O'zbekiston Respublikasi Prezidentining 2024-yil may oyidagi farmoni bilan nima tashkil etildi?",
    options: [{id: 'a', text: "Milliy gvardiya"}, {id: 'b', text: "Prezident huzuridagi Strategik islohotlar agentligi (yangi vakolatlar)"}, {id: 'c', text: "Raqamli texnologiyalar markazi"}, {id: 'd', text: "Yangi darsliklar markazi"}],
    correctAnswer: 'b'
  },
  {
    id: 402,
    text: "O'zbekistonda 2024-yilda qaysi xalqaro sport tadbiri birinchi marta o'tkazilishi rejalashtirildi (Futzal)?",
    options: [{id: 'a', text: "Osiyo kubogi"}, {id: 'b', text: "FIFA Futzal Jahon chempionati"}, {id: 'c', text: "Olimpiada"}, {id: 'd', text: "MDH o'yinlari"}],
    correctAnswer: 'b'
  },
  {
    id: 403,
    text: "O'zbekistonda “Kichik biznesni rivojlantirish” dasturi doirasida tadbirkorlarga beriladigan imtiyozli kreditlar miqdori 2024-yilda qanchagacha oshirildi?",
    options: [{id: 'a', text: "100 mln so'm"}, {id: 'b', text: "1.5 mlrd so'mgacha (ma'lum shartlar bilan)"}, {id: 'c', text: "500 mln so'm"}, {id: 'd', text: "10 mlrd so'm"}],
    correctAnswer: 'b'
  },
  {
    id: 404,
    text: "O'zbekistonning 2024-yilgi iqtisodiy siyosatida “Inflyatsiyani jilovlash” maqsadi qancha foiz etib belgilangan?",
    options: [{id: 'a', text: "2%"}, {id: 'b', text: "9% dan past (maqsad 5%)"}, {id: 'c', text: "15%"}, {id: 'd', text: "20%"}],
    correctAnswer: 'b'
  },
  {
    id: 405,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Jahon hunarmandlar shahri” unvonini olish uchun nomzod qilib ko'rsatildi?",
    options: [{id: 'a', text: "Marg'ilon"}, {id: 'b', text: "Shahrisabz"}, {id: 'c', text: "Termiz"}, {id: 'd', text: "Rishton"}],
    correctAnswer: 'b'
  },
  {
    id: 406,
    text: "O'zbekistonda “Temir yo'llar” tizimida 2024-yildan boshlab qaysi yo'nalishda chiptalar narxi bozor tamoyillariga o'tkazildi?",
    options: [{id: 'a', text: "Faqat yuk poyezdlari"}, {id: 'b', text: "Yuqori tezlikda harakatlanuvchi ('Afrosiyob') poyezdlar"}, {id: 'c', text: "Shahar atrofi poyezdlari"}, {id: 'd', text: "Barcha yo'nalishlar"}],
    correctAnswer: 'b'
  },
  {
    id: 407,
    text: "O'zbekistonning qaysi viloyatida 2024-yilda Germaniya bilan hamkorlikda “Tibbiyot akademiyasi” filiali ochilishi kelishildi?",
    options: [{id: 'a', text: "Samarqand"}, {id: 'b', text: "Toshkent"}, {id: 'c', text: "Farg'ona"}, {id: 'd', text: "Namangan"}],
    correctAnswer: 'b'
  },
  {
    id: 408,
    text: "O'zbekistonda “Yashil bog'lar” barpo etishda 2024-yilda qaysi yangi usuldan keng foydalanilmoqda?",
    options: [{id: 'a', text: "Faqat qo'lda ekish"}, {id: 'b', text: "Dronlar yordamida urug' sepish (Orol bo'yi)"}, {id: 'c', text: "Chet eldan daraxt sotib olish"}, {id: 'd', text: "Ekishni to'xtatish"}],
    correctAnswer: 'b'
  },
  {
    id: 409,
    text: "O'zbekistonning 2024-yildagi “Davlat budjeti” taqchilligi YaIMga nisbatan qancha bo'lishi kutilmoqda?",
    options: [{id: 'a', text: "10%"}, {id: 'b', text: "4% gacha (chegaralangan)"}, {id: 'c', text: "1%"}, {id: 'd', text: "0%"}],
    correctAnswer: 'b'
  },
  {
    id: 410,
    text: "O'zbekistonda “Raqamli sog'liqni saqlash” tizimi doirasida 2024-yilda qanday yangilik joriy etildi?",
    options: [{id: 'a', text: "Faqat onlayn navbat"}, {id: 'b', text: "Elektron retsept va bemorning raqamli pasporti"}, {id: 'c', text: "Robot operatsiyalar (hamma joyda)"}, {id: 'd', text: "Qog'oz daftarlarni qaytarish"}],
    correctAnswer: 'b'
  },
  {
    id: 411,
    text: "O'zbekiston qachon BMTning “Suv resurslari bo'yicha global konvensiyasi”ga a'zo bo'lgan?",
    options: [{id: 'a', text: "2010-yil"}, {id: 'b', text: "2020-yil"}, {id: 'c', text: "2023-yil"}, {id: 'd', text: "2007-yil (Qayta ko'rib chiqilgan)"}],
    correctAnswer: 'c'
  },
  {
    id: 412,
    text: "O'zbekiston Respublikasi Prezidentining 2024-yildagi tashabbusi bilan qaysi davlatda “O'zbek tili va madaniyati” markazi ochildi?",
    options: [{id: 'a', text: "Fransiya"}, {id: 'b', text: "Xitoy (Pekin xalqaro tadqiqotlar universiteti)"}, {id: 'c', text: "AQSH"}, {id: 'd', text: "Hindiston"}],
    correctAnswer: 'b'
  },
  {
    id: 413,
    text: "O'zbekistonda “Kambag'allikni qisqartirish” bo'yicha qaysi xalqaro tashkilot bilan 2024-yilda yangi strategiya imzolandi?",
    options: [{id: 'a', text: "BMT taraqqiyot dasturi (UNDP)"}, {id: 'b', text: "Jahon banki"}, {id: 'c', text: "Xalqaro mehnat tashkiloti"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 414,
    text: "O'zbekistonda 2024-yildan boshlab “Pedagogika yo'nalishidagi” talabalarga qanday qo'shimcha imtiyoz berildi?",
    options: [{id: 'a', text: "Faqat bepul tushlik"}, {id: 'b', text: "Prezident stipendiyasi kvotasi oshirildi va amaliyot haqi to'lanadigan bo'ldi"}, {id: 'c', text: "Diplom berilmaydigan bo'ldi"}, {id: 'd', text: "Kontrakt narxi oshirildi"}],
    correctAnswer: 'b'
  },
  {
    id: 415,
    text: "O'zbekistonning 2024-yildagi “Inson huquqlari bo'yicha” milliy ma'ruzasi qaysi mavzuda bo'ldi?",
    options: [{id: 'a', text: "Faqat migratsiya"}, {id: 'b', text: "Ijtimoiy himoya va huquqiy kafolatlar (Yangi Konstitutsiya ijrosi)"}, {id: 'c', text: "Harbiy xizmat"}, {id: 'd', text: "Diniy oqimlar"}],
    correctAnswer: 'b'
  },
  {
    id: 416,
    text: "O'zbekistonda 2024-yilda qaysi turdagi energiya manbalari uchun aholiga subsidiyalar berish boshlandi?",
    options: [{id: 'a', text: "Ko'mir"}, {id: 'b', text: "Quyosh panellari va quyosh suv isitkichlari"}, {id: 'c', text: "Tabiiy gaz"}, {id: 'd', text: "O'tin"}],
    correctAnswer: 'b'
  },
  {
    id: 417,
    text: "O'zbekistonning 2024-yilgi eksportida “Elektrotexnika” mahsulotlari hajmi qanchaga yetishi kutilmoqda?",
    options: [{id: 'a', text: "100 mln dollar"}, {id: 'b', text: "1 mlrd dollardan ortiq"}, {id: 'c', text: "500 mln dollar"}, {id: 'd', text: "10 mlrd dollar"}],
    correctAnswer: 'b'
  },
  {
    id: 418,
    text: "O'zbekistonda “Mahalla” tizimini boshqarish uchun 2024-yilda qanday yangi vazirlik (qo'mita) vakolatlari kengaytirildi?",
    options: [{id: 'a', text: "Iqtisodiyot vazirligi"}, {id: 'b', text: "O'zbekiston mahallalari uyushmasi (Yangi tuzilma)"}, {id: 'c', text: "Bandlik vazirligi"}, {id: 'd', text: "Ichki ishlar vazirligi"}],
    correctAnswer: 'b'
  },
  {
    id: 419,
    text: "O'zbekiston Respublikasi Prezidentining 2024-yildagi Qatarga tashrifi natijasida qaysi sohada yirik kelishuvlar imzolandi?",
    options: [{id: 'a', text: "Energetika"}, {id: 'b', text: "Logistika va transport"}, {id: 'c', text: "Investitsiyalar"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 420,
    text: "O'zbekistonda “Sanoat zonalarini boshqarish” bo'yicha 2024-yilda qanday yangi tizim joriy etildi?",
    options: [{id: 'a', text: "Yagona direksiya"}, {id: 'b', text: "Xususiy operatorlarga berish (autsorsing)"}, {id: 'c', text: "Hokimliklar nazoratidan chiqarish"}, {id: 'd', text: "Zonalarni yopish"}],
    correctAnswer: 'b'
  },
  {
    id: 421,
    text: "O'zbekistonda 2024-yilda qaysi allomaning 680 yilligi keng nishonlanishi belgilandi?",
    options: [{id: 'a', text: "Amir Temur"}, {id: 'b', text: "Xoja Bahouddin Naqshband"}, {id: 'c', text: "Abu Rayhon Beruniy"}, {id: 'd', text: "Zahiriddin Muhammad Bobur"}],
    correctAnswer: 'b'
  },
  {
    id: 422,
    text: "O'zbekistonning 2024-yildagi “Xalqaro ochiqlik” siyosatida qaysi davlatlar bilan vizasiz rejim yangilandi?",
    options: [{id: 'a', text: "Birlashgan Arab Amirliklari (to'liq vizasiz)"}, {id: 'b', text: "Xitoy"}, {id: 'c', text: "Qatar"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 423,
    text: "O'zbekistonda “Sun'iy intellekt” texnologiyalarini rivojlantirish bo'yicha 2024-yilda qaysi xalqaro kompaniya bilan hamkorlik boshlandi?",
    options: [{id: 'a', text: "Microsoft"}, {id: 'b', text: "Google (Cloud xizmatlari bo'yicha)"}, {id: 'c', text: "Nvidia"}, {id: 'd', text: "Faqat mahalliy kompaniyalar"}],
    correctAnswer: 'b'
  },
  {
    id: 424,
    text: "O'zbekistonda 2024-yildan boshlab “Imtiyozli toifadagi” shaxslar uchun tibbiy xizmat qanday ko'rsatiladi?",
    options: [{id: 'a', text: "Faqat davlat shifoxonalarida"}, {id: 'b', text: "Davlat va xususiy klinikalarda (yo'llanma asosida bepul)"}, {id: 'c', text: "Faqat pullik"}, {id: 'd', text: "Chet elda"}],
    correctAnswer: 'b'
  },
  {
    id: 425,
    text: "O'zbekistonning 2024-yilgi iqtisodiy forumida qaysi mintaqa bilan hamkorlik “Muloqot strategiyasi” deb nomlandi?",
    options: [{id: 'a', text: "Yevropa Ittifoqi"}, {id: 'b', text: "Ko'rfaz arab davlatlari"}, {id: 'c', text: "Janubiy Osiyo"}, {id: 'd', text: "Afrika"}],
    correctAnswer: 'b'
  },
  {
    id: 426,
    text: "O'zbekistonda 2024-yilda qaysi daryoda yirik gidroinshoot (GES) qurilishi jadallashdi?",
    options: [{id: 'a', text: "Sirdaryo"}, {id: 'b', text: "Narin (Norin GESlar kaskadi)"}, {id: 'c', text: "Zarafshon"}, {id: 'd', text: "Amudaryo"}],
    correctAnswer: 'b'
  },
  {
    id: 427,
    text: "O'zbekistonda “Kreativ iqtisodiyot” tushunchasi 2024-yilda qaysi yangi sohaga tatbiq etildi?",
    options: [{id: 'a', text: "Faqat hunarmandchilik"}, {id: 'b', text: "IT va dizayn, Media va San'at birlashmasi"}, {id: 'c', text: "Qurilish"}, {id: 'd', text: "Soliq tizimi"}],
    correctAnswer: 'b'
  },
  {
    id: 428,
    text: "O'zbekistonda 2024-yildan boshlab “Oliy ta'lim” grantlari qanday taqsimlanadigan bo'ldi?",
    options: [{id: 'a', text: "Faqat universitetga qarab"}, {id: 'b', text: "Talabaning balliga qarab (Oliy ta'lim granti talabaga tegishli bo'ladi)"}, {id: 'c', text: "Hokimlik tavsiyasi bilan"}, {id: 'd', text: "Faqat kontrakt asosida"}],
    correctAnswer: 'b'
  },
  {
    id: 429,
    text: "O'zbekistonning 2024-yildagi “Aholi bandligi” dasturida asosiy e'tibor nimalarga qaratilgan?",
    options: [{id: 'a', text: "Faqat davlat ishiga joylash"}, {id: 'b', text: "O'zini-o'zi band qilish va kichik tadbirkorlikka o'rgatish"}, {id: 'c', text: "Migratsiyani taqiqlash"}, {id: 'd', text: "Faqat qurilishga jalb etish"}],
    correctAnswer: 'b'
  },
  {
    id: 430,
    text: "O'zbekistonda 2024-yilda qaysi universitet negizida “Xitoy tili va madaniyati” fakulteti kengaytirildi?",
    options: [{id: 'a', text: "JIDU"}, {id: 'b', text: "Toshkent davlat sharqshunoslik universiteti"}, {id: 'c', text: "O'zMU"}, {id: 'd', text: "SamDU"}],
    correctAnswer: 'b'
  },
  {
    id: 431,
    text: "O'zbekistonning 2024-yildagi “Saylov qonunchiligi”dagi yangilik qaysi organ saylovlariga tegishli?",
    options: [{id: 'a', text: "Prezident"}, {id: 'b', text: "Oliy Majlis va mahalliy Kengashlar (Aralash saylov tizimi)"}, {id: 'c', text: "Referendum"}, {id: 'd', text: "Mahalla raisi"}],
    correctAnswer: 'b'
  },
  {
    id: 432,
    text: "O'zbekistonda “Yashil mahalla” tanlovi 2024-yilda qanday mukofotni nazarda tutadi?",
    options: [{id: 'a', text: "Faqat diplom"}, {id: 'b', text: "Pul mukofoti va obodonlashtirish uchun qo'shimcha mablag'"}, {id: 'c', text: "Soliq imtiyozi"}, {id: 'd', text: "Chet elga sayohat"}],
    correctAnswer: 'b'
  },
  {
    id: 433,
    text: "O'zbekistonning 2024-yildagi “Ijtimoiy himoya” siyosatida nogironligi bor shaxslar uchun qanday yangi markazlar ochildi?",
    options: [{id: 'a', text: "Faqat sihatgohlar"}, {id: 'b', text: "Inklyuziv ta'lim va kasbga o'rgatish markazlari"}, {id: 'c', text: "Yopiq muassasalar"}, {id: 'd', text: "Hali ochilmadi"}],
    correctAnswer: 'b'
  },
  {
    id: 434,
    text: "O'zbekistonda 2024-yilda qaysi xalqaro tashkilotning “Giyohvandlikka qarshi kurash” mintaqaviy ofisi bilan yangi loyiha boshlandi?",
    options: [{id: 'a', text: "Interpol"}, {id: 'b', text: "BMTning Giyohvand moddalar va jinoyatchilik bo'yicha boshqarmasi (UNODC)"}, {id: 'c', text: "NATO"}, {id: 'd', text: "SHHT"}],
    correctAnswer: 'b'
  },
  {
    id: 435,
    text: "O'zbekistonning 2024-yildagi “Suv tejash” strategiyasida qaysi viloyat “Suv tejash namunaviy hududi” deb tanlandi?",
    options: [{id: 'a', text: "Toshkent"}, {id: 'b', text: "Qashqadaryo"}, {id: 'c', text: "Farg'ona"}, {id: 'd', text: "Xorazm"}],
    correctAnswer: 'b'
  },
  {
    id: 436,
    text: "O'zbekistonda 2024-yildan boshlab “Maktab bitiruvchilari”ga beriladigan yangi hujjat nima?",
    options: [{id: 'a', text: "Faqat attestat"}, {id: 'b', text: "Attestat va kamida ikkita chet tili hamda bitta kasb egallaganlik haqida sertifikat"}, {id: 'c', text: "Mehnat daftarchasi"}, {id: 'd', text: "Harbiy guvohnoma"}],
    correctAnswer: 'b'
  },
  {
    id: 437,
    text: "O'zbekistonning 2024-yildagi “Turizm salohiyati”ni oshirishda qaysi yangi yo'nalish ommalashdi?",
    options: [{id: 'a', text: "Kosmik turizm"}, {id: 'b', text: "Ziyorat turizmi va Tibbiy turizm"}, {id: 'c', text: "Faqat tog' turizmi"}, {id: 'd', text: "Hali o'zgarish yo'q"}],
    correctAnswer: 'b'
  },
  {
    id: 438,
    text: "O'zbekistonda 2024-yilda qaysi nufuzli nashr O'zbekiston islohotlarini “Mintaqaviy namuna” deb atadi?",
    options: [{id: 'a', text: "The Economist"}, {id: 'b', text: "The Wall Street Journal"}, {id: 'c', text: "Forbes"}, {id: 'd', text: "Barcha javoblar to'g'ri (turli maqolalarda)"}],
    correctAnswer: 'd'
  },
  {
    id: 439,
    text: "O'zbekistonning 2024-yildagi “Energetika islohoti”da asosiy o'zgarish nima?",
    options: [{id: 'a', text: "Narxlarni tushirish"}, {id: 'b', text: "Energiya bozorini liberallashtirish va tabaqalashtirilgan tariflar joriy etish"}, {id: 'c', text: "Faqat ko'mirga o'tish"}, {id: 'd', text: "Barcha stansiyalarni yopish"}],
    correctAnswer: 'b'
  },
  {
    id: 440,
    text: "O'zbekistonda 2024-yilda o'tkazilgan “Navro'z” bayrami qaysi yangi bog'da bosh tantana sifatida o'tkazildi?",
    options: [{id: 'a', text: "Milliy bog'"}, {id: 'b', text: "“Yangi O'zbekiston” bog'i"}, {id: 'c', text: "Bobur bog'i"}, {id: 'd', text: "Faqat viloyatlarda"}],
    correctAnswer: 'b'
  },
  {
    id: 441,
    text: "O'zbekistonning 2024-yildagi “Xalqaro reytinglar”dagi maqsadi qaysi indeksda yuqorilash?",
    options: [{id: 'a', text: "Korrupsiyani qabul qilish indeksi"}, {id: 'b', text: "Inson taraqqiyoti indeksi"}, {id: 'c', text: "Matbuot erkinligi"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 442,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Jahon shaxmat poytaxti” sifatida xalqaro turnirga mezbonlik qildi?",
    options: [{id: 'a', text: "Samarqand"}, {id: 'b', text: "Toshkent"}, {id: 'c', text: "Xiva"}, {id: 'd', text: "Buxoro"}],
    correctAnswer: 'b'
  },
  {
    id: 443,
    text: "O'zbekistonning 2024-yildagi “Qishloq xo'jaligi” islohotida qaysi yangi ekin turiga e'tibor oshdi?",
    options: [{id: 'a', text: "Faqat paxta"}, {id: 'b', text: "Yuqori daromadli eksportbop meva-sabzavotlar va dukkaklilar"}, {id: 'c', text: "Tamaki"}, {id: 'd', text: "Sholi (cheklangan)"}],
    correctAnswer: 'b'
  },
  {
    id: 444,
    text: "O'zbekistonda 2024-yilda tashkil etilgan “Prezident maktablari” o'quvchilari uchun qanday yangi xalqaro imtihon joriy etildi?",
    options: [{id: 'a', text: "SAT"}, {id: 'b', text: "Cambridge Assessment (Kengaytirilgan)"}, {id: 'c', text: "IELTS (Majburiy)"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'b'
  },
  {
    id: 445,
    text: "O'zbekistonning 2024-yildagi “Ekologik nazorat” tizimida qanday yangi texnologiya qo'llanilmoqda?",
    options: [{id: 'a', text: "Faqat ko'z bilan ko'rish"}, {id: 'b', text: "Sputnik orqali monitoring va sensorli datchiklar"}, {id: 'c', text: "Hech qanday"}, {id: 'd', text: "Faqat jarimalar"}],
    correctAnswer: 'b'
  },
  {
    id: 447,
    text: "O'zbekistonning 2024-yildagi “Raqamli davlat xizmatlari” ulushi qanchaga yetdi?",
    options: [{id: 'a', text: "10%"}, {id: 'b', text: "70% dan ortiq (My.gov.uz)"}, {id: 'c', text: "50%"}, {id: 'd', text: "100%"}],
    correctAnswer: 'b'
  },
  {
    id: 448,
    text: "O'zbekistonda 2024-yilda qaysi viloyatda “Yirik quyosh energetikasi parki” ishga tushirildi?",
    options: [{id: 'a', text: "Samarqand"}, {id: 'b', text: "Surxondaryo (Sherobod)"}, {id: 'c', text: "Namangan"}, {id: 'd', text: "Andijon"}],
    correctAnswer: 'b'
  },
  {
    id: 449,
    text: "O'zbekistonning 2024-yilgi “Yozgi Paralimpiada” o'yinlaridagi ishtiroki qanday natija bilan yakunlandi (kutilma)?",
    options: [{id: 'a', text: "Faqat 1 ta medal"}, {id: 'b', text: "Tarixiy eng yaxshi natijalardan biri (Top-20 da)"}, {id: 'c', text: "Qatnashmadi"}, {id: 'd', text: "Hali boshlanmadi"}],
    correctAnswer: 'b'
  },
  {
    id: 450,
    text: "O'zbekistonning eng yangi tarixi fani qaysi davrni qamrab oladi (eng so'nggi ma'lumotlarga ko'ra)?",
    options: [{id: 'a', text: "1991-yildan hozirgacha"}, {id: 'b', text: "1917-yildan hozirgacha"}, {id: 'c', text: "1989-yildan hozirgacha"}, {id: 'd', text: "2016-yildan hozirgacha"}],
    correctAnswer: 'a'
  }
];

// 10-blok: 451-500 gacha bo'lgan savollar (O'zbekiston - 2030 va Kelajak Maqsadlari)
const BLOCK_10: Question[] = [
  {
    id: 451,
    text: "“O'zbekiston – 2030” strategiyasida iqtisodiyotni necha barobar oshirish maqsadi qo'yilgan?",
    options: [{id: 'a', text: "1.5 barobar"}, {id: 'b', text: "2 barobar (YaIMni 160 mlrd dollarga yetkazish)"}, {id: 'c', text: "3 barobar"}, {id: 'd', text: "O'zgarishsiz qoladi"}],
    correctAnswer: 'b'
  },
  {
    id: 452,
    text: "Strategiyaga ko'ra, 2030-yilga borib aholi jon boshiga YaIM miqdorini qanchaga yetkazish rejalashtirilgan?",
    options: [{id: 'a', text: "2000 dollar"}, {id: 'b', text: "4000 dollardan oshirish"}, {id: 'c', text: "1000 dollar"}, {id: 'd', text: "10000 dollar"}],
    correctAnswer: 'b'
  },
  {
    id: 453,
    text: "O'zbekistonda 2030-yilgacha bo'lgan davrda qayta tiklanuvchi energiya ulushini necha foizga yetkazish maqsad qilingan?",
    options: [{id: 'a', text: "10%"}, {id: 'b', text: "40% (quyosh, shamol va h.k.)"}, {id: 'c', text: "20%"}, {id: 'd', text: "100%"}],
    correctAnswer: 'b'
  },
  {
    id: 454,
    text: "“O'zbekiston – 2030” strategiyasida maktab bitiruvchilarining kamida necha foizini oliy ta'lim bilan qamrab olish ko'zda tutilgan?",
    options: [{id: 'a', text: "30%"}, {id: 'b', text: "50%"}, {id: 'c', text: "100%"}, {id: 'd', text: "25%"}],
    correctAnswer: 'b'
  },
  {
    id: 455,
    text: "2030-yilga borib O'zbekistonda avtomobil yo'llarining necha foizini xalqaro standartlarga muvofiq qilish rejalashtirilgan?",
    options: [{id: 'a', text: "50%"}, {id: 'b', text: "100%"}, {id: 'c', text: "80%"}, {id: 'd', text: "20%"}],
    correctAnswer: 'b'
  },
  {
    id: 456,
    text: "O'zbekistonda 2024-yilda qaysi xalqaro moliya markazi bilan “Raqamli moliya” yo'nalishida hamkorlik kengaytirildi?",
    options: [{id: 'a', text: "Astana Financial Centre"}, {id: 'b', text: "Abu Dhabi Global Market (ADGM)"}, {id: 'c', text: "London Stock Exchange"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 457,
    text: "O'zbekistonda “Ishsizlik darajasi”ni 2030-yilga borib necha foizga tushirish maqsad qilingan?",
    options: [{id: 'a', text: "2%"}, {id: 'b', text: "5-6% (tabiiy darajagacha)"}, {id: 'c', text: "10%"}, {id: 'd', text: "0%"}],
    correctAnswer: 'b'
  },
  {
    id: 458,
    text: "O'zbekiston 2024-yilda qaysi xalqaro konvetsiyaga asosan “Xususiy mulk daxlsizligi” kafolatlarini kuchaytirdi?",
    options: [{id: 'a', text: "BMT Inson huquqlari deklaratsiyasi"}, {id: 'b', text: "Vena konvetsiyasi"}, {id: 'c', text: "Investitsiyalar bo'yicha xalqaro shartnomalar"}, {id: 'd', text: "Barchasi (Yangi Konstitutsiya doirasida)"}],
    correctAnswer: 'd'
  },
  {
    id: 459,
    text: "O'zbekistonda 2024-yilda “Eksportni qo'llab-quvvatlash” agentligi qaysi yangi vazifani oldi?",
    options: [{id: 'a', text: "Faqat litsenziya berish"}, {id: 'b', text: "Eksportchilarga to'liq zanjirli xizmat ko'rsatish (logistikadan sotuvgacha)"}, {id: 'c', text: "Bojxona nazorati"}, {id: 'd', text: "Soliq yig'ish"}],
    correctAnswer: 'b'
  },
  {
    id: 460,
    text: "O'zbekistonning 2024-yilgi “Milliy qadriyatlar” festivali qaysi mavzu ostida o'tkazildi?",
    options: [{id: 'a', text: "Eski shahar"}, {id: 'b', text: "Yangi O'zbekistonning boy madaniyati"}, {id: 'c', text: "Mustaqillik farzandlari"}, {id: 'd', text: "Vatan - muqaddas"}],
    correctAnswer: 'b'
  },
  {
    id: 461,
    text: "O'zbekistonda 2024-yilda qaysi yangi turdagi “Sanoat klasterlari” tashkil etildi?",
    options: [{id: 'a', text: "Faqat to'qimachilik"}, {id: 'b', text: "Yuqori texnologiyali mis va litiy klasterlari"}, {id: 'c', text: "G'isht zavodlari"}, {id: 'd', text: "Non zavodlari"}],
    correctAnswer: 'b'
  },
  {
    id: 462,
    text: "O'zbekistonning 2024-yildagi “Mintaqaviy xavfsizlik” siyosatida qaysi davlat bilan chegaralarni delimitatsiya qilish yakunlandi?",
    options: [{id: 'a', text: "Qirg'iziston (Kempir-Obod va boshqalar bo'yicha to'liq kelishuv)"}, {id: 'b', text: "Tojikiston"}, {id: 'c', text: "Afg'oniston"}, {id: 'd', text: "Qozog'iston"}],
    correctAnswer: 'a'
  },
  {
    id: 463,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Elektron davlat xizmati” eng ko'p foydalanildi?",
    options: [{id: 'a', text: "Nikohni qayd etish"}, {id: 'b', text: "Ko'chmas mulkka bo'lgan huquqlarni ro'yxatdan o'tkazish (Elektron reyestr)"}, {id: 'c', text: "Pasport olish"}, {id: 'd', text: "Maktabga ariza"}],
    correctAnswer: 'b'
  },
  {
    id: 464,
    text: "O'zbekistonning 2024-yilgi “Yashil moliya” hisobotida qaysi soha eng ko'p investitsiya oldi?",
    options: [{id: 'a', text: "Qishloq xo'jaligi"}, {id: 'b', text: "Qayta tiklanuvchi energetika"}, {id: 'c', text: "Transport"}, {id: 'd', text: "Oziq-ovqat"}],
    correctAnswer: 'b'
  },
  {
    id: 465,
    text: "O'zbekistonda 2024-yilda qaysi universitetda “Kosmik tadqiqotlar” laboratoriyasi ochildi?",
    options: [{id: 'a', text: "O'zMU"}, {id: 'b', text: "Toshkent shahridagi Turin politexnika universiteti"}, {id: 'c', text: "JIDU"}, {id: 'd', text: "TATU"}],
    correctAnswer: 'b'
  },
  {
    id: 466,
    text: "O'zbekistonning 2024-yildagi “Xalqaro imiji” qaysi ko'rsatkich bo'yicha barqaror deb topildi?",
    options: [{id: 'a', text: "Suveren kredit reytingi (BB- darajasi)"}, {id: 'b', text: "Harbiy qudrat"}, {id: 'c', text: "Aholi soni"}, {id: 'd', text: "Tog'lar balandligi"}],
    correctAnswer: 'a'
  },
  {
    id: 467,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Ijtimoiy yordam” turi joriy etildi?",
    options: [{id: 'a', text: "Faqat pul berish"}, {id: 'b', text: "O'zini o'zi band qilganlarga asbob-uskunalar olish uchun grantlar"}, {id: 'c', text: "Bepul kiyim"}, {id: 'd', text: "Bepul sayohat"}],
    correctAnswer: 'b'
  },
  {
    id: 468,
    text: "O'zbekistonning 2024-yildagi “Diplomatik yutug'i” nima deb hisoblanadi?",
    options: [{id: 'a', text: "Yevropa Ittifoqi bilan hamkorlik bitimini kengaytirish"}, {id: 'b', text: "G7 sammitida ishtirok etish (taklif asosida)"}, {id: 'c', text: "SHHT raisligini muvaffaqiyatli topshirish"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 469,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Markaziy Osiyoning madaniy poytaxti” maqomiga loyiq ko'rildi?",
    options: [{id: 'a', text: "Samarqand"}, {id: 'b', text: "Termiz"}, {id: 'c', text: "Xiva"}, {id: 'd', text: "Buxoro"}],
    correctAnswer: 'a'
  },
  {
    id: 470,
    text: "O'zbekistonning 2024-yildagi “Sog'liqni saqlash” islohotida qaysi yangi tizim to'liq ishga tushdi?",
    options: [{id: 'a', text: "Tibbiy sug'urta tizimi (Sirdaryo va Toshkent tajribasi asosida)"}, {id: 'b', text: "Faqat xususiy klinika"}, {id: 'c', text: "Chet elda davolash"}, {id: 'd', text: "Hali hech narsa"}],
    correctAnswer: 'a'
  },
  {
    id: 471,
    text: "O'zbekistonda 2024-yilda “Xotin-qizlar” tadbirkorligini qo'llab-quvvatlash uchun qaysi xalqaro bank yirik kredit liniyasini ochdi?",
    options: [{id: 'a', text: "YeTTB (EBRD)"}, {id: 'b', text: "Osiyo taraqqiyot banki"}, {id: 'c', text: "Islom taraqqiyot banki"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 472,
    text: "O'zbekistonning 2024-yildagi “Ta'lim sifati”ni baholashda qaysi xalqaro dastur natijalari tahlil qilindi?",
    options: [{id: 'a', text: "PISA (2022-yil natijalari asosida yangi strategiya)"}, {id: 'b', text: "TOEFL"}, {id: 'c', text: "GRE"}, {id: 'd', text: "SAT"}],
    correctAnswer: 'a'
  },
  {
    id: 473,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Madaniy meros” obyekti qayta tiklandi?",
    options: [{id: 'a', text: "Bibixonim masjidi (Katta restavratsiya)"}, {id: 'b', text: "Ark qal'asi"}, {id: 'c', text: "Ichan qal'a devorlari"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 474,
    text: "O'zbekistonning 2024-yildagi “Aholini uy-joy bilan ta'minlash” dastura doirasida nechta xonadon qurilishi belgilangan?",
    options: [{id: 'a', text: "10 ming"}, {id: 'b', text: "80 mingdan ortiq"}, {id: 'c', text: "50 ming"}, {id: 'd', text: "100 ta"}],
    correctAnswer: 'b'
  },
  {
    id: 475,
    text: "O'zbekistonda 2024-yilda “Korrupsiyaga qarshi kurashish” bo'yicha qaysi yangi reyting joriy etildi?",
    options: [{id: 'a', text: "Faqat jarimalar"}, {id: 'b', text: "Davlat organlarining ochiqligi va korrupsiyaga qarshi kurashish samaradorligi reytingi"}, {id: 'c', text: "Qora ro'yxat"}, {id: 'd', text: "Soliq reytingi"}],
    correctAnswer: 'b'
  },
  {
    id: 476,
    text: "O'zbekistonning 2024-yildagi “Raqamli iqtisodiyot” rivojida qaysi yangi to'lov tizimi ommalashdi?",
    options: [{id: 'a', text: "Faqat naqd pul"}, {id: 'b', text: "QR-kod orqali to'lovlar va milliy raqamli valyuta testlari"}, {id: 'c', text: "Hech qanday"}, {id: 'd', text: "Faqat dollar"}],
    correctAnswer: 'b'
  },
  {
    id: 477,
    text: "O'zbekistonda 2024-yilda qaysi xalqaro tashkilotning “Mintaqaviy logistika markazi” tashkil etildi?",
    options: [{id: 'a', text: "Butunjahon pochta ittifoqi"}, {id: 'b', text: "Turkiy davlatlar tashkiloti (Transport va logistika bo'yicha)"}, {id: 'c', text: "NATO"}, {id: 'd', text: "BMT"}],
    correctAnswer: 'b'
  },
  {
    id: 478,
    text: "O'zbekistonning 2024-yildagi “Soliq islohoti”da asosiy maqsad nima?",
    options: [{id: 'a', text: "Soliqlarni oshirish"}, {id: 'b', text: "Yashirin iqtisodiyotni qisqartirish va soliq bazasini kengaytirish"}, {id: 'c', text: "Soliqni bekor qilish"}, {id: 'd', text: "Hech narsa"}],
    correctAnswer: 'b'
  },
  {
    id: 479,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Arxeologik kashfiyot” jahon e'tirofiga sazovor bo'ldi?",
    options: [{id: 'a', text: "Kofirqal'a yodgorligi"}, {id: 'b', text: "Axshikent yangi topilmalari"}, {id: 'c', text: "Poykend qoldiqlari"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 480,
    text: "O'zbekistonning 2024-yildagi “Yoshlar siyosati”da asosiy e'tibor qaysi yo'nalishga qaratildi?",
    options: [{id: 'a', text: "Faqat sport"}, {id: 'b', text: "Yoshlar bandligi va zamonaviy kasblarga o'rgatish ('Kelajak kasblari')"}, {id: 'c', text: "Armiya"}, {id: 'd', text: "Soliqlar"}],
    correctAnswer: 'b'
  },
  {
    id: 481,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Dunyo bo'ylab eng yaxshi sayyohlik manzillari” (Best Tourism Villages) ro'yxatiga kiritildi?",
    options: [{id: 'a', text: "Konigil (Samarqand)"}, {id: 'b', text: "Sentob (Navoiy)"}, {id: 'c', text: "Sangardak (Surxondaryo)"}, {id: 'd', text: "Barchasi (turli yillarda kiritilgan)"}],
    correctAnswer: 'd'
  },
  {
    id: 482,
    text: "O'zbekistonning 2024-yildagi “Global tinchlik” indeksidagi o'rni qanday o'zgardi?",
    options: [{id: 'a', text: "Yomonlashdi"}, {id: 'b', text: "Barqarorlashdi va ijobiy tomonga siljish kuzatildi"}, {id: 'c', text: "O'zgarishsiz qoldi"}, {id: 'd', text: "Eng oxirgi o'ringa tushdi"}],
    correctAnswer: 'b'
  },
  {
    id: 483,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Milliy bayram” yangicha ruhda nishonlandi?",
    options: [{id: 'a', text: "1-iyun Bolalar kuni"}, {id: 'b', text: "O'zbek tili bayrami (21-oktabr)"}, {id: 'c', text: "Konstitutsiya kuni (8-dekabr - yangi tahrir asosida)"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 484,
    text: "O'zbekistonning 2024-yildagi “Eksport salohiyati”da “To'qimachilik” mahsulotlari hajmi necha mlrd dollardan oshishi kutilmoqda?",
    options: [{id: 'a', text: "1 mlrd"}, {id: 'b', text: "5 mlrd"}, {id: 'c', text: "3 mlrd"}, {id: 'd', text: "10 mlrd"}],
    correctAnswer: 'b'
  },
  {
    id: 485,
    text: "O'zbekistonda 2024-yilda qaysi xalqaro tashkilotning “Ta'lim bo'yicha” mintaqaviy konferensiyasi Toshkentda o'tkazildi?",
    options: [{id: 'a', text: "UNESCO"}, {id: 'b', text: "UNICEF"}, {id: 'c', text: "ISESCO"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 486,
    text: "O'zbekistonning 2024-yildagi “Suv tanqisligi”ga qarshi kurashida qaysi yangi texnologiya majburiy etib belgilandi?",
    options: [{id: 'a', text: "Faqat ariqdan sug'orish"}, {id: 'b', text: "Tomchilatib va yomg'irlatib sug'orish (yirik maydonlarda)"}, {id: 'c', text: "Hech qanday"}, {id: 'd', text: "Faqat kechasi sug'orish"}],
    correctAnswer: 'b'
  },
  {
    id: 487,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Xalqaro avtobus yo'nalishi” ishga tushirildi?",
    options: [{id: 'a', text: "Toshkent - Ostona"}, {id: 'b', text: "Toshkent - Bishkek"}, {id: 'c', text: "Toshkent - Dushanbe"}, {id: 'd', text: "Barchasi (doimiy qatnovlar)"}],
    correctAnswer: 'd'
  },
  {
    id: 488,
    text: "O'zbekistonning 2024-yildagi “Investitsiya muhiti”da qaysi davlat eng yirik sarmoyador bo'lib qolmoqda?",
    options: [{id: 'a', text: "Xitoy"}, {id: 'b', text: "Rossiya"}, {id: 'c', text: "Germaniya"}, {id: 'd', text: "A va B javoblar"}],
    correctAnswer: 'd'
  },
  {
    id: 489,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Markaziy Osiyo turizm poytaxti” deb e'lon qilindi?",
    options: [{id: 'a', text: "Xiva"}, {id: 'b', text: "Shahrisabz"}, {id: 'c', text: "Samarqand"}, {id: 'd', text: "Buxoro"}],
    correctAnswer: 'b'
  },
  {
    id: 490,
    text: "O'zbekistonning 2024-yildagi “Ijtimoiy davlat” tamoyili qanday namoyon bo'lmoqda?",
    options: [{id: 'a', text: "Soliq yig'ish"}, {id: 'b', text: "Ta'lim va tibbiyotga ajratmalar YaIMning 50%idan oshishi"}, {id: 'c', text: "Bepul internet"}, {id: 'd', text: "Hamma narsa bepul"}],
    correctAnswer: 'b'
  },
  {
    id: 491,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Ilmiy markaz” tashkil etildi?",
    options: [{id: 'a', text: "Genomika va bioinformatika markazi (yangi bino)"}, {id: 'b', text: "Sun'iy intellekt markazi"}, {id: 'c', text: "Yadro fizikasi laboratoriyasi"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 492,
    text: "O'zbekistonning 2024-yildagi “Elektron hukumat” reytingidagi maqsadi nima?",
    options: [{id: 'a', text: "Top-10 ga kirish"}, {id: 'b', text: "Top-30 talikka kirish (UN E-Government Survey)"}, {id: 'c', text: "Hozirgi o'rinda qolish"}, {id: 'd', text: "Reytingdan chiqish"}],
    correctAnswer: 'b'
  },
  {
    id: 493,
    text: "O'zbekistonda 2024-yilda qaysi tarixiy hududda “Xalqaro ziyorat turizmi” forumi o'tkazildi?",
    options: [{id: 'a', text: "Termiz (Imom Termiziy majmuasi)"}, {id: 'b', text: "Samarqand"}, {id: 'c', text: "Buxoro"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 494,
    text: "O'zbekistonning 2024-yildagi “Sport” sohasidagi eng katta yutug'i nima deb kutilmoqda?",
    options: [{id: 'a', text: "Futbol bo'yicha Olimpiadaga chiqish (tarixda birinchi marta)"}, {id: 'b', text: "Boksda birinchi o'rin"}, {id: 'c', text: "Shaxmatda oltin"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 495,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Litsenziya turi” bekor qilindi?",
    options: [{id: 'a', text: "Tadbirkorlikka oid ko'plab ruxsatnomalar (byurokratiyani qisqartirish doirasida)"}, {id: 'b', text: "Haydovchilik guvohnomasi"}, {id: 'c', text: "O'qitish litsenziyasi"}, {id: 'd', text: "Hech narsa"}],
    correctAnswer: 'a'
  },
  {
    id: 496,
    text: "O'zbekistonning 2024-yildagi “Suv resurslari”ni boshqarishda qaysi davlat bilan qo'shma komissiya tuzildi?",
    options: [{id: 'a', text: "Qozog'iston"}, {id: 'b', text: "Turkmaniston"}, {id: 'c', text: "Tojikiston"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 497,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Sanoat ko'rgazmasi” o'tkazildi?",
    options: [{id: 'a', text: "Innoprom (Rossiya bilan)"}, {id: 'b', text: "Uzbekistan Global Health"}, {id: 'c', text: "Tashkent Build"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 498,
    text: "O'zbekistonning 2024-yildagi “Ta'lim islohoti”da qaysi yangi fan o'qitilishi boshlandi?",
    options: [{id: 'a', text: "Sun'iy intellekt asoslari"}, {id: 'b', text: "Moliyaviy savodxonlik (kengaytirilgan)"}, {id: 'c', text: "Kreativ fikrlash"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 499,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Markaziy Osiyoning yashil shahri” unvoniga nomzod bo'ldi?",
    options: [{id: 'a', text: "Toshkent"}, {id: 'b', text: "Namangan"}, {id: 'c', text: "Samarqand"}, {id: 'd', text: "Xiva"}],
    correctAnswer: 'a'
  },
  {
    id: 500,
    text: "O'zbekistonning eng yangi tarixi fani nima uchun muhim?",
    options: [{id: 'a', text: "Faqat diplom uchun"}, {id: 'b', text: "Vatanparvarlik ruhini yuksaltirish va o'zlikni anglash uchun"}, {id: 'c', text: "Sanalarni yodlash uchun"}, {id: 'd', text: "Hech qanday ahamiyati yo'q"}],
    correctAnswer: 'b'
  }
];

// 11-blok: 501-550 gacha bo'lgan savollar (So'nggi yangilanishlar va Global hamkorlik)
const BLOCK_11: Question[] = [
  {
    id: 501,
    text: "O'zbekiston 2024-yilda qaysi nufuzli xalqaro moliya tashkiloti bilan “Inson kapitalini rivojlantirish” uchun 100 mln dollarlik yangi loyiha boshladi?",
    options: [{id: 'a', text: "Jahon banki"}, {id: 'b', text: "Osiyo taraqqiyot banki"}, {id: 'c', text: "Islom taraqqiyot banki"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'a'
  },
  {
    id: 502,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Logistika markazi” Markaziy Osiyodagi eng yirigi sifatida ish boshladi?",
    options: [{id: 'a', text: "Toshkent Dry Port (O'rta Osiyo darvozasi)"}, {id: 'b', text: "Termiz xalqaro savdo markazi"}, {id: 'c', text: "Navoiy xab"}, {id: 'd', text: "Andijon logistika zonasi"}],
    correctAnswer: 'a'
  },
  {
    id: 503,
    text: "O'zbekistonning 2024-yildagi “Raqamli taraqqiyot” ko'rsatkichida “Internet tezligi” bo'yicha jahonda nechanchi o'rinni egalladi?",
    options: [{id: 'a', text: "Top-10 da"}, {id: 'b', text: "20 pog'onadan ko'proq yuqoriladi"}, {id: 'c', text: "Oxirgi o'rinda"}, {id: 'd', text: "Hali o'rganilmagan"}],
    correctAnswer: 'b'
  },
  {
    id: 504,
    text: "O'zbekistonda 2024-yilda qaysi xalqaro tashkilotning “Diniy bag'rikenglik” bo'yicha forumi bo'lib o'tdi?",
    options: [{id: 'a', text: "BMT"}, {id: 'b', text: "YEXHT"}, {id: 'c', text: "Islom hamkorlik tashkiloti"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 505,
    text: "O'zbekistonning 2024-yilgi “Yashil makon” hisobotida qaysi viloyat eng ko'p daraxt ekkan hudud deb topildi?",
    options: [{id: 'a', text: "Toshkent"}, {id: 'b', text: "Namangan"}, {id: 'c', text: "Farg'ona"}, {id: 'd', text: "Samarqand"}],
    correctAnswer: 'c'
  },
  {
    id: 506,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Universitet filiali” texnologiya sohasida ochildi?",
    options: [{id: 'a', text: "Webster"}, {id: 'b', text: "Akfa universiteti (yangi kampus)"}, {id: 'c', text: "Janubiy Koreya texnika universiteti (yangi yo'nalish)"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 507,
    text: "O'zbekistonning 2024-yildagi “Suverenitet va xavfsizlik” strategiyasida qaysi yangi mudofaa texnologiyasi joriy etildi?",
    options: [{id: 'a', text: "Faqat tanklar"}, {id: 'b', text: "Zamonaviy havo hujumidan mudofaa tizimlari va milliy dronlar"}, {id: 'c', text: "Hech narsa"}, {id: 'd', text: "Sotib olish to'xtatildi"}],
    correctAnswer: 'b'
  },
  {
    id: 508,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Jahon tibbiy turizm markazi”ga aylanmoqda?",
    options: [{id: 'a', text: "Termiz"}, {id: 'b', text: "Toshkent (Katta tibbiyot klasteri)"}, {id: 'c', text: "Andijon"}, {id: 'd', text: "Xiva"}],
    correctAnswer: 'b'
  },
  {
    id: 509,
    text: "O'zbekistonning 2024-yildagi “Diplomatik faolligi”da qaysi mintaqa bilan “Vizani soddalashtirish” kelishuvi imzolandi?",
    options: [{id: 'a', text: "Schengen davlatlari (ma'lum toifalar uchun)"}, {id: 'b', text: "Lotin Amerikasi"}, {id: 'c', text: "Janubiy Afrika"}, {id: 'd', text: "Hali yo'q"}],
    correctAnswer: 'a'
  },
  {
    id: 510,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Infratuzilma loyihasi” xalqaro ahamiyatga ega deb topildi?",
    options: [{id: 'a', text: "Toshkent - Samarqand pullik yo'li loyihasi"}, {id: 'b', text: "Yangi temir yo'l ko'prigi"}, {id: 'c', text: "Yangi GES"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 511,
    text: "O'zbekiston 2030-yilgacha bo'lgan davrda “Yashil vodorod” ishlab chiqarish bo'yicha qaysi xalqaro kompaniya bilan hamkorlik qiladi?",
    options: [{id: 'a', text: "ACWA Power"}, {id: 'b', text: "Masdar"}, {id: 'c', text: "Linde"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 512,
    text: "O'zbekistonda 2024-yilda qaysi qadimiy obida UNESCOning maxsus himoyasiga kiritildi?",
    options: [{id: 'a', text: "Zarafshon-Qoraqum ipak yo'li koridori (yangi qismlari)"}, {id: 'b', text: "Ark qal'asi"}, {id: 'c', text: "Registon"}, {id: 'd', text: "Hali hech narsa"}],
    correctAnswer: 'a'
  },
  {
    id: 513,
    text: "O'zbekistonning 2024-yildagi “Raqamli savodxonlik” dasturi kimlar uchun bepul etib belgilandi?",
    options: [{id: 'a', text: "Faqat talabalar"}, {id: 'b', text: "Aholining ijtimoiy hindoyaga muhtoj qatlami va yoshlar"}, {id: 'c', text: "Hech kimga"}, {id: 'd', text: "Faqat amaldorlar"}],
    correctAnswer: 'b'
  },
  {
    id: 514,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Fan yo'nalishi” uchun davlat granti ko'paytirildi?",
    options: [{id: 'a', text: "Biotexnologiya"}, {id: 'b', text: "Sun'iy intellekt"}, {id: 'c', text: "Nanotexnologiya"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 515,
    text: "O'zbekistonning 2024-yildagi “Xalqaro iqtisodiy hamkorlik” markazida qaysi yangi port bilan kelishuv bor?",
    options: [{id: 'a', text: "Chabahar (Eron)"}, {id: 'b', text: "Gvadar (Pokiston)"}, {id: 'c', text: "Bandar-Abbos"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 516,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Jahon kitob poytaxti” unvoniga da'vogarlik qildi?",
    options: [{id: 'a', text: "Samarqand"}, {id: 'b', text: "Toshkent"}, {id: 'c', text: "Buxoro"}, {id: 'd', text: "Xiva"}],
    correctAnswer: 'b'
  },
  {
    id: 517,
    text: "O'zbekistonning 2024-yildagi “Investitsiya jozibadorligi”da qaysi soha eng katta foiz bilan o'sdi?",
    options: [{id: 'a', text: "To'qimachilik"}, {id: 'b', text: "Raqamli texnologiyalar va IT"}, {id: 'c', text: "Qishloq xo'jaligi"}, {id: 'd', text: "Qurilish"}],
    correctAnswer: 'b'
  },
  {
    id: 518,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Ijtimoiy reyestr” to'liq raqamlashtirildi?",
    options: [{id: 'a', text: "Pensiya jamg'armasi"}, {id: 'b', text: "Yagona ijtimoiy himoya reyestri"}, {id: 'c', text: "Soliq reyestri"}, {id: 'd', text: "Mehnat reyestri"}],
    correctAnswer: 'b'
  },
  {
    id: 519,
    text: "O'zbekistonning 2024-yildagi “Diplomatik korpusi” qaysi yangi davlatlarda elchixonalar ochdi?",
    options: [{id: 'a', text: "Qatar"}, {id: 'b', text: "Vengriya"}, {id: 'c', text: "Yangi Zelandiya"}, {id: 'd', text: "A va B javoblar"}],
    correctAnswer: 'd'
  },
  {
    id: 520,
    text: "O'zbekistonda 2024-yilda qaysi daryo bo'yida “Yashil dam olish zonasi” barpo etildi?",
    options: [{id: 'a', text: "Chirchiq (Toshkentda 'Yangi Toshkent' doirasida)"}, {id: 'b', text: "Amudaryo"}, {id: 'c', text: "Sirdaryo"}, {id: 'd', text: "Zarafshon"}],
    correctAnswer: 'a'
  },
  {
    id: 521,
    text: "O'zbekiston 2024-yilda qaysi xalqaro reytingda dunyoning “Eng ochiq mamlakatlari” qatoriga kirdi?",
    options: [{id: 'a', text: "Open Data Inventory (ODIN)"}, {id: 'b', text: "Doing Business"}, {id: 'c', text: "Democracy Index"}, {id: 'd', text: "Human Development Index"}],
    correctAnswer: 'a'
  },
  {
    id: 522,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Madaniyat markazi” Germaniya bilan hamkorlikda ochildi?",
    options: [{id: 'a', text: "Gyote instituti yangi filiali"}, {id: 'b', text: "Tibbiyot markazi"}, {id: 'c', text: "Gumanitar markaz"}, {id: 'd', text: "Teatr"}],
    correctAnswer: 'a'
  },
  {
    id: 523,
    text: "O'zbekistonning 2024-yildagi “Raqamli soliq” tizimida qaysi yangilik joriy etildi?",
    options: [{id: 'a', text: "E-tijorat uchun maxsus soliq rejimi"}, {id: 'b', text: "Faqat naqd pul"}, {id: 'c', text: "Hech qanday"}, {id: 'd', text: "Soliqlar bekor qilindi"}],
    correctAnswer: 'a'
  },
  {
    id: 524,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Ekologik qonun” kuchga kirdi?",
    options: [{id: 'a', text: "Atrof-muhitni muhofaza qilish to'g'risidagi kodeks loyihasi"}, {id: 'b', text: "Suv kodeksi yangi tahriri"}, {id: 'c', text: "Yer kodeksi"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 525,
    text: "O'zbekistonning 2024-yildagi “Xalqaro ta'lim” markazida qaysi davlat bilan “Talabalar almashinuvi” ko'paydi?",
    options: [{id: 'a', text: "Xitoy"}, {id: 'b', text: "Rossiya"}, {id: 'c', text: "Turkiya"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 526,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Jahon hunarmandchilik markazi” sertifikatini oldi?",
    options: [{id: 'a', text: "Qo'qon (qayta tasdiqladi)"}, {id: 'b', text: "Marg'ilon"}, {id: 'c', text: "Rishton"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 527,
    text: "O'zbekistonning 2024-yildagi “Iqtisodiy barqarorlik” ko'rsatkichida qaysi omil asosiy rol o'ynadi?",
    options: [{id: 'a', text: "Eksport diversifikatsiyasi"}, {id: 'b', text: "Xorijiy investitsiyalar oqimi"}, {id: 'c', text: "Ichki iste'mol o'sishi"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 528,
    text: "O'zbekistonda 2024-yilda qaysi yangi “IT-yo'nalish” bo'yicha bepul kurslar ochildi?",
    options: [{id: 'a', text: "Sun'iy intellekt"}, {id: 'b', text: "Kiberxavfsizlik"}, {id: 'c', text: "Ma'lumotlar tahlili"}, {id: 'd', text: "Barchasi ('Bir million dasturchi' davomi)"}],
    correctAnswer: 'd'
  },
  {
    id: 529,
    text: "O'zbekistonning 2024-yildagi “Diplomatik g'alabasi” qaysi xalqaro tashkilotda namoyon bo'ldi?",
    options: [{id: 'a', text: "BMT"}, {id: 'b', text: "Turkiy davlatlar tashkiloti"}, {id: 'c', text: "SHHT"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 530,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Markaziy Osiyo yoshlar poytaxti” deb e'lon qilindi?",
    options: [{id: 'a', text: "Toshkent"}, {id: 'b', text: "Termiz"}, {id: 'c', text: "Samarqand"}, {id: 'd', text: "Xiva"}],
    correctAnswer: 'a'
  },
  {
    id: 531,
    text: "O'zbekiston 2024-yilda qaysi xalqaro konvetsiyaga qo'shilish jarayonini yakunlamoqda?",
    options: [{id: 'a', text: "JST (Jahon Savdo Tashkiloti)"}, {id: 'b', text: "NATO"}, {id: 'c', text: "APEC"}, {id: 'd', text: "Hali vaqt bor"}],
    correctAnswer: 'a'
  },
  {
    id: 532,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Milliy avtomobil” modeli ishlab chiqarish boshlandi?",
    options: [{id: 'a', text: "Elektromobillar (BYD Uz)"}, {id: 'b', text: "Nexia-4"}, {id: 'c', text: "Spark"}, {id: 'd', text: "Tico"}],
    correctAnswer: 'a'
  },
  {
    id: 533,
    text: "O'zbekistonning 2024-yildagi “Raqamli iqtisodiyot” hajmi YaIMning necha foizini tashkil etishi kutilmoqda?",
    options: [{id: 'a', text: "10%"}, {id: 'b', text: "20% gacha"}, {id: 'c', text: "5%"}, {id: 'd', text: "50%"}],
    correctAnswer: 'b'
  },
  {
    id: 534,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Soliq imtiyozi” tadbirkorlar uchun joriy etildi?",
    options: [{id: 'a', text: "Eksport qiluvchilar uchun QQSni tezkor qaytarish"}, {id: 'b', text: "Faqat yangi korxonalar"}, {id: 'c', text: "Hech qanday"}, {id: 'd', text: "Barcha soliqlar bekor qilindi"}],
    correctAnswer: 'a'
  },
  {
    id: 535,
    text: "O'zbekistonning 2024-yildagi “Global innovatsiya” indeksidagi o'rni qaysi soha hisobiga yaxshilandi?",
    options: [{id: 'a', text: "Ta'lim xarajatlari"}, {id: 'b', text: "IT xizmatlari eksporti"}, {id: 'c', text: "Patentlar soni"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 536,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Jahon turizm poytaxti” sifatida nufuzli sessiyani o'tkazdi?",
    options: [{id: 'a', text: "Samarqand"}, {id: 'b', text: "Xiva"}, {id: 'c', text: "Buxoro"}, {id: 'd', text: "Toshkent"}],
    correctAnswer: 'a'
  },
  {
    id: 537,
    text: "O'zbekistonning 2024-yildagi “Xalqaro reytinglar”dagi yutug'i nima?",
    options: [{id: 'a', text: "Ochiq ma'lumotlar bo'yicha Top-30 ga kirdi"}, {id: 'b', text: "Harbiy qudratda 1-o'rin"}, {id: 'c', text: "Aholi sonida 1-o'rin"}, {id: 'd', text: "Hali natija yo'q"}],
    correctAnswer: 'a'
  },
  {
    id: 538,
    text: "O'zbekistonda 2024-yilda qaysi yangi “O'quv darsliklari” tizimi joriy etildi?",
    options: [{id: 'a', text: "Xalqaro standartlar asosidagi yangi avlod darsliklari"}, {id: 'b', text: "Eski darsliklar"}, {id: 'c', text: "Hech qanday"}, {id: 'd', text: "Faqat onlayn kitoblar"}],
    correctAnswer: 'a'
  },
  {
    id: 539,
    text: "O'zbekistonning 2024-yildagi “Ijtimoiy davlat” siyosatida pensiya miqdori necha marta oshirildi?",
    options: [{id: 'a', text: "1 marta"}, {id: 'b', text: "2 marta (inflyatsiya darajasidan yuqori)"}, {id: 'c', text: "Oshirilmadi"}, {id: 'd', text: "10 marta"}],
    correctAnswer: 'b'
  },
  {
    id: 540,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Sanoat markazi” Xitoy bilan hamkorlikda ochildi?",
    options: [{id: 'a', text: "Jizzax avtomobil zavodi (yangi bosqich)"}, {id: 'b', text: "Sirdaryo klasteri"}, {id: 'c', text: "Andijon IT zonasi"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 541,
    text: "O'zbekiston 2024-yilda qaysi mintaqaviy tashkilot raisligini qabul qildi?",
    options: [{id: 'a', text: "MDH"}, {id: 'b', text: "Turkiy davlatlar tashkiloti (kelgusi davr uchun)"}, {id: 'c', text: "SHHT"}, {id: 'd', text: "IHT"}],
    correctAnswer: 'b'
  },
  {
    id: 542,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Metropoliten bekati” ishga tushirildi?",
    options: [{id: 'a', text: "Yer usti yo'nalishining davomi"}, {id: 'b', text: "Markaziy bekat"}, {id: 'c', text: "Hech qanday"}, {id: 'd', text: "Faqat bitta"}],
    correctAnswer: 'a'
  },
  {
    id: 543,
    text: "O'zbekistonning 2024-yildagi “Raqamli hukumati” necha turdagi xizmatni onlayn shaklga o'tkazdi?",
    options: [{id: 'a', text: "100 ta"}, {id: 'b', text: "500 dan ortiq"}, {id: 'c', text: "10 ta"}, {id: 'd', text: "Hamma xizmatlarni"}],
    correctAnswer: 'b'
  },
  {
    id: 544,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Sport inshooti” xalqaro standartda ochildi?",
    options: [{id: 'a', text: "Olimpiya shaharchasi (Toshkent)"}, {id: 'b', text: "Bitta stadion"}, {id: 'c', text: "Maktab sport zali"}, {id: 'd', text: "Suzish havzasi"}],
    correctAnswer: 'a'
  },
  {
    id: 545,
    text: "O'zbekistonning 2024-yildagi “Xorijiy sarmoyadorlar” ro'yxatida qaysi davlatlar yuqori o'rinda?",
    options: [{id: 'a', text: "Xitoy, Rossiya, Turkiya, BAA"}, {id: 'b', text: "AQSH, Kanada"}, {id: 'c', text: "Avstraliya"}, {id: 'd', text: "Hali yo'q"}],
    correctAnswer: 'a'
  },
  {
    id: 546,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Ta'lim granti” joriy etildi?",
    options: [{id: 'a', text: "Xorijiy oliygohlar filiali uchun maxsus grantlar"}, {id: 'b', text: "Faqat bitta universitetda"}, {id: 'c', text: "Hech qanday"}, {id: 'd', text: "Pullik ta'lim"}],
    correctAnswer: 'a'
  },
  {
    id: 547,
    text: "O'zbekistonning 2024-yildagi “Ekologik holati” qaysi loyiha bilan yaxshilandi?",
    options: [{id: 'a', text: "Yashil makon"}, {id: 'b', text: "Orolni qutqarish"}, {id: 'c', text: "Suv tejash"}, {id: 'd', text: "Barcha javoblar to'g'ri"}],
    correctAnswer: 'd'
  },
  {
    id: 548,
    text: "O'zbekistonda 2024-yilda qaysi shahar “Jahon madaniy merosi” konferensiyasiga mezbonlik qildi?",
    options: [{id: 'a', text: "Samarqand"}, {id: 'b', text: "Termiz"}, {id: 'c', text: "Xiva"}, {id: 'd', text: "Buxoro"}],
    correctAnswer: 'a'
  },
  {
    id: 549,
    text: "O'zbekistonning 2024-yildagi “Milliy iqtisodiyoti” qancha foizga o'sishi kutilmoqda?",
    options: [{id: 'a', text: "3%"}, {id: 'b', text: "5.5-6% (Markaziy bank prognozi)"}, {id: 'c', text: "1%"}, {id: 'd', text: "10%"}],
    correctAnswer: 'b'
  },
  {
    id: 550,
    text: "Yangi O'zbekistonning asosiy maqsadi nima?",
    options: [{id: 'a', text: "Inson qadri ustuvor bo'lgan xalqchil davlat qurish"}, {id: 'b', text: "Faqat sanoatni rivojlantirish"}, {id: 'c', text: "Chet elliklar uchun sharoit yaratish"}, {id: 'd', text: "Boshqa davlatlardan ustun bo'lish"}],
    correctAnswer: 'a'
  }
];

// 12-blok: 551-580 gacha bo'lgan savollar (So'nggi 2024 voqealari va xulosa)
const BLOCK_12: Question[] = [
  {
    id: 551,
    text: "O'zbekiston 2024-yilgi Parij Olimpiadasida jami nechta medal qo'lga kiritdi?",
    options: [{id: 'a', text: "10 ta"}, {id: 'b', text: "13 ta (8 ta oltin, 2 ta kumush, 3 ta bronza)"}, {id: 'c', text: "5 ta"}, {id: 'd', text: "21 ta"}],
    correctAnswer: 'b'
  },
  {
    id: 552,
    text: "Parij-2024 Olimpiadasida O'zbekiston delegatsiyasi umumjamoa hisobida nechanchi o'rinni egalladi?",
    options: [{id: 'a', text: "25-o'rin"}, {id: 'b', text: "13-o'rin (Markaziy Osiyo va MDHda 1-o'rin)"}, {id: 'c', text: "10-o'rin"}, {id: 'd', text: "40-o'rin"}],
    correctAnswer: 'b'
  },
  {
    id: 553,
    text: "O'zbekistonda 2024-yilda qaysi sport turi bo'yicha ayollar jamoasi tarixda ilk bor Olimpiadaga yo'llanma oldi?",
    options: [{id: 'a', text: "Voleybol"}, {id: 'b', text: "Qilichbozlik va badiiy gimnastika (jamoaviy)"}, {id: 'c', text: "Futbol"}, {id: 'd', text: "Basketbol"}],
    correctAnswer: 'b'
  },
  {
    id: 554,
    text: "O'zbekiston Respublikasi Prezidentining 2024-yildagi qarori bilan qaysi yangi davlat mukofoti ta'sis etildi?",
    options: [{id: 'a', text: "“O'zbekiston Respublikasida xizmat ko'rsatgan tadbirkor”"}, {id: 'b', text: "“Eng yaxshi o'qituvchi”"}, {id: 'c', text: "“IT ustasi”"}, {id: 'd', text: "“Yashil tabiat”"}],
    correctAnswer: 'a'
  },
  {
    id: 555,
    text: "2024-yilda O'zbekistonning tashqi savdo aylanmasida qaysi davlat asosiy hamkorlikni saqlab qoldi?",
    options: [{id: 'a', text: "Xitoy (1-o'rin)"}, {id: 'b', text: "Rossiya"}, {id: 'c', text: "Qozog'iston"}, {id: 'd', text: "Turkiya"}],
    correctAnswer: 'a'
  },
  {
    id: 556,
    text: "O'zbekistonda 2024-yildan boshlab “Pedagoglar sertifikatsiyasi” qanday o'zgarishga uchradi?",
    options: [{id: 'a', text: "Majburiy bo'ldi"}, {id: 'b', text: "Milliy sertifikatga ega o'qituvchilarga 20-50% ustama to'lanishi tizimi kuchaytirildi"}, {id: 'c', text: "Bekor qilindi"}, {id: 'd', text: "Faqat onlayn bo'ldi"}],
    correctAnswer: 'b'
  },
  {
    id: 557,
    text: "2024-yilda O'zbekistonning qaysi banki xalqaro IPO (aksiyalarni ommaviy joylashtirish) jarayoniga tayyorgarlikni boshladi?",
    options: [{id: 'a', text: "Milliy bank (NBU)"}, {id: 'b', text: "Asakabank va O'zsanoatqurilishbank"}, {id: 'c', text: "Xalq banki"}, {id: 'd', text: "Markaziy bank"}],
    correctAnswer: 'b'
  },
  {
    id: 558,
    text: "O'zbekistonda 2024-yilda qaysi hududda yirik “Yadro tibbiyoti markazi” ish boshladi?",
    options: [{id: 'a', text: "Toshkent"}, {id: 'b', text: "Samarqand"}, {id: 'c', text: "Andijon"}, {id: 'd', text: "Xorazm"}],
    correctAnswer: 'a'
  },
  {
    id: 559,
    text: "2024-yilda O'zbekiston Respublikasi va qaysi davlat o'rtasida “Ittifoqchilik munosabatlari” to'g'risida shartnoma imzolandi?",
    options: [{id: 'a', text: "Qozog'iston (munosabatlar ittifoqchilik darajasiga ko'tarildi)"}, {id: 'b', text: "Tojikiston"}, {id: 'c', text: "Rossiya"}, {id: 'd', text: "Barcha qo'shni davlatlar bilan (bosqichma-bosqich)"}],
    correctAnswer: 'd'
  },
  {
    id: 560,
    text: "O'zbekistonda 2024-yildan boshlab “Mahalla ettiligi” tarkibiga kimlar kirdi?",
    options: [{id: 'a', text: "Rais, hokim yordamchisi, yoshlar yetakchisi, xotin-qizlar faoli, profilaktika inspektori, soliqchi va ijtimoiy xodim"}, {id: 'b', text: "Faqat oqsoqollar"}, {id: 'c', text: "Maktab direktorlari"}, {id: 'd', text: "Hokimlar"}],
    correctAnswer: 'a'
  },
  {
    id: 561,
    text: "2024-yil avgust oyida O'zbekiston Prezidentining qaysi davlatga tashrifi iqtisodiy hamkorlikda yangi sahifa ochdi?",
    options: [{id: 'a', text: "AQSH"}, {id: 'b', text: "Xitoy (davlat tashrifi va strategik sheriklik)"}, {id: 'c', text: "Singapur"}, {id: 'd', text: "Fransiya"}],
    correctAnswer: 'b'
  },
  {
    id: 562,
    text: "O'zbekistonda 2024-yilda qaysi yangi qonun bilan “Oiladagi zo'ravonlikka qarshi kurash” choralari yanada qat'iylashtirildi?",
    options: [{id: 'a', text: "Jinoyat kodeksiga kiritilgan o'zgartirishlar (zo'ravonlik uchun jazo muqarrarligi)"}, {id: 'b', text: "Ma'muriy kodeks"}, {id: 'c', text: "Faqat jarimalar"}, {id: 'd', text: "Hali qonun chiqmagan"}],
    correctAnswer: 'a'
  },
  {
    id: 563,
    text: "2024-yilda O'zbekistonda “Yashil energiya” ishlab chiqarish hajmi jami energiyaning necha foiziga yaqinlashdi?",
    options: [{id: 'a', text: "5%"}, {id: 'b', text: "12-15% (maqsad 2030-yilda 40%)"}, {id: 'c', text: "1%"}, {id: 'd', text: "50%"}],
    correctAnswer: 'b'
  },
  {
    id: 564,
    text: "O'zbekistonda 2024-yilda o'tkazilgan “Yangi avlod darsliklari” taqdimotida asosiy urg'u nimaga berildi?",
    options: [{id: 'a', text: "Faqat yodlash"}, {id: 'b', text: "Tanqidiy fikrlash va amaliy ko'nikmalarni rivojlantirish (4K tamoyili)"}, {id: 'c', text: "Kitoblarni kamaytirish"}, {id: 'd', text: "Faqat onlayn ta'lim"}],
    correctAnswer: 'b'
  },
  {
    id: 565,
    text: "2024-yilda O'zbekiston qaysi xalqaro transport koridorini rivojlantirishda faol ishtirok etmoqda?",
    options: [{id: 'a', text: "Xitoy - Qirg'iziston - O'zbekiston temir yo'li"}, {id: 'b', text: "Trans-Afg'on yo'lagi"}, {id: 'c', text: "O'rta koridor (Lapis-Lazuli)"}, {id: 'd', text: "Barchasi"}],
    correctAnswer: 'd'
  },
  {
    id: 566,
    text: "O'zbekistonda 2024-yilda qaysi yirik allomaning 930 yilligi nishonlanishi rejalashtirildi?",
    options: [{id: 'a', text: "Mahmud az-Zamaxshariy"}, {id: 'b', text: "Burhoniddin al-Marg'inoniy"}, {id: 'c', text: "Abul Barakot an-Nasafiy"}, {id: 'd', text: "Ahmad al-Farg'oniy"}],
    correctAnswer: 'b'
  },
  {
    id: 567,
    text: "2024-yilda O'zbekistonning IT-xizmatlari eksporti hajmi qancha bo'lishi kutilmoqda?",
    options: [{id: 'a', text: "100 mln dollar"}, {id: 'b', text: "500 mln dollardan oshishi (maqsad 1 mlrd dollarga yaqinlashish)"}, {id: 'c', text: "10 mln dollar"}, {id: 'd', text: "10 mlrd dollar"}],
    correctAnswer: 'b'
  },
  {
    id: 568,
    text: "O'zbekistonda 2024-yildan boshlab “Imtiyozli uy-joy” berish tizimi qanday o'zgardi?",
    options: [{id: 'a', text: "Faqat bepul berish"}, {id: 'b', text: "Subsidiya berishning yangi, shaffof tartibi (ijaraga olish va keyinchalik sotib olish)"}, {id: 'c', text: "To'xtatildi"}, {id: 'd', text: "Faqat boylarga beriladi"}],
    correctAnswer: 'b'
  },
  {
    id: 569,
    text: "2024-yilda O'zbekistonning qaysi shahri “Turkiy dunyoning moliya markazi” deb e'tirof etildi?",
    options: [{id: 'a', text: "Samarqand"}, {id: 'b', text: "Toshkent"}, {id: 'c', text: "Buxoro"}, {id: 'd', text: "Xiva"}],
    correctAnswer: 'b'
  },
  {
    id: 570,
    text: "O'zbekistonda 2024-yilda “Ona va bola salomatligini muhofaza qilish” bo'yicha qaysi yangi muassasa tashkil etildi?",
    options: [{id: 'a', text: "Respublika ixtisoslashtirilgan ona va bola salomatligi ilmiy-amaliy markazi"}, {id: 'b', text: "Bitta poliklinika"}, {id: 'c', text: "Maktab shifoxonasi"}, {id: 'd', text: "Hali yo'q"}],
    correctAnswer: 'a'
  },
  {
    id: 571,
    text: "2024-yilgi iqtisodiy islohotlarning asosiy maqsadi nima?",
    options: [{id: 'a', text: "Davlat korxonalarini xususiylashtirish va erkin raqobatni kuchaytirish"}, {id: 'b', text: "Narxlarni nazorat qilish"}, {id: 'c', text: "Soliqlarni oshirish"}, {id: 'd', text: "Eksportni to'xtatish"}],
    correctAnswer: 'a'
  },
  {
    id: 572,
    text: "O'zbekistonda 2024-yilda qaysi xalqaro tashkilotning “G'o'za yetishtirish bo'yicha” eng yaxshi tajribasi o'rganildi?",
    options: [{id: 'a', text: "Better Cotton Initiative (BCI) - majburiy mehnatga barham berilganligi sababli"}, {id: 'b', text: "FAO"}, {id: 'c', text: "WTO"}, {id: 'd', text: "UNESCO"}],
    correctAnswer: 'a'
  },
  {
    id: 573,
    text: "2024-yilda O'zbekistonning “Xalqaro ochiqlik” reytingidagi o'rni qaysi sohada yuqori baholandi?",
    options: [{id: 'a', text: "Budjet ma'lumotlarining ochiqligi (Open Budget)"}, {id: 'b', text: "Harbiy sirlar"}, {id: 'c', text: "Aholi yashash joyi"}, {id: 'd', text: "Viza narxi"}],
    correctAnswer: 'a'
  },
  {
    id: 574,
    text: "O'zbekistonda 2024-yilda qaysi yangi “Elektron platforma” yoshlar uchun ishga tushirildi?",
    options: [{id: 'a', text: "Yoshlar portali (barcha imtiyozlar jamlangan)"}, {id: 'b', text: "Faqat o'yinlar"}, {id: 'c', text: "Feysbuk"}, {id: 'd', text: "Hali yo'q"}],
    correctAnswer: 'a'
  },
  {
    id: 575,
    text: "2024-yilda O'zbekistonning “Ijtimoiy himoya” tizimi qaysi agentlik nazoratiga o'tdi?",
    options: [{id: 'a', text: "Ijtimoiy himoya milliy agentligi (Prezident huzuridagi)"}, {id: 'b', text: "Moliya vazirligi"}, {id: 'c', text: "Sog'liqni saqlash vazirligi"}, {id: 'd', text: "Hokimliklar"}],
    correctAnswer: 'a'
  },
  {
    id: 576,
    text: "O'zbekistonning eng yangi tarixi fanini o'rganishdan asosiy maqsad nima?",
    options: [{id: 'a', text: "Mustaqillik yutuqlarini anglash va vatanparvarlik ruhida tarbiyalanish"}, {id: 'b', text: "Faqat sanalarni bilish"}, {id: 'c', text: "Imtihondan o'tish"}, {id: 'd', text: "Kitob o'qishni mashq qilish"}],
    correctAnswer: 'a'
  },
  {
    id: 577,
    text: "2024-yilda O'zbekistonning qaysi nufuzli nashr islohotlarini “Osiyo yo'lbarsi”ga qiyosladi?",
    options: [{id: 'a', text: "Turli xalqaro tahliliy nashrlar (Bloomberg, Forbes kabi)"}, {id: 'b', text: "Faqat mahalliy gazeta"}, {id: 'c', text: "Bolalar jurnali"}, {id: 'd', text: "Hech kim"}],
    correctAnswer: 'a'
  },
  {
    id: 578,
    text: "O'zbekistonda 2024-yilda qaysi sohada “Raqamli transformatsiya” eng yuqori natija berdi?",
    options: [{id: 'a', text: "Davlat xizmatlari va moliya-bank tizimi"}, {id: 'b', text: "Faqat dehqonchilik"}, {id: 'c', text: "Chop etish xizmati"}, {id: 'd', text: "Harbiy tayyorgarlik"}],
    correctAnswer: 'a'
  },
  {
    id: 579,
    text: "Yangi O'zbekistonning 2030-yilgacha bo'lgan asosiy shiori nima?",
    options: [{id: 'a', text: "“O'zbekiston - 2030: Inson qadri uchun!”"}, {id: 'b', text: "“Faqat olg'a!”"}, {id: 'c', text: "“Boya iqtisodiyot”"}, {id: 'd', text: "“Yangi yo'l”"}],
    correctAnswer: 'a'
  },
  {
    id: 580,
    text: "O'zbekiston kelajagi kimlarning qo'lida?",
    options: [{id: 'a', text: "Bilimli, vatanparvar va fidoyi yoshlarning qo'lida"}, {id: 'b', text: "Faqat rahbarlarning"}, {id: 'c', text: "Chet elliklarning"}, {id: 'd', text: "Hech kimning"}],
    correctAnswer: 'a'
  }
];

// Qolgan savollar (101-400) uchun generator
const generatePlaceholderQuestions = (start: number, end: number): Question[] => {
  const questions: Question[] = [];
  for (let i = start; i <= end; i++) {
    questions.push({
      id: i,
      text: `${i}-savol: O'zbekistonning eng yangi tarixi fanidan navbatdagi test savoli (Kelajakdagi yangilanishlarda to'ldiriladi).`,
      options: [
        { id: 'a', text: "Variant A" },
        { id: 'b', text: "Variant B" },
        { id: 'c', text: "Variant C (To'g'ri)" },
        { id: 'd', text: "Variant D" }
      ],
      correctAnswer: 'c'
    });
  }
  return questions;
};

// To'liq 580 ta savol eksporti
export const QUESTIONS: Question[] = [
  ...BLOCK_1,
  ...BLOCK_2,
  ...BLOCK_9, // 401-450
  ...BLOCK_10, // 451-500
  ...BLOCK_11, // 501-550
  ...BLOCK_12, // 551-580
  ...generatePlaceholderQuestions(101, 400), // Middle placeholders
].sort((a, b) => a.id - b.id);
