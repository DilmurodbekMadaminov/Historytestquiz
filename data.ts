
import { Question } from './types';

const REAL_QUESTIONS: Question[] = [
  { id: 1, text: "O‘zbekiston SSR Prezidenti lavozimi qachon joriy etilgan?", options: [{ id: 'a', text: "1990-yil 24-mart" }, { id: 'b', text: "1991-yil 31-avgust" }, { id: 'c', text: "1989-yil 21-oktabr" }, { id: 'd', text: "1992-yil 1-sentabr" }], correctAnswer: 'a' },
  { id: 2, text: "Mustaqillik deklaratsiyasi qachon qabul qilingan?", options: [{ id: 'a', text: "1991-yil 31-avgust" }, { id: 'b', text: "1990-yil 20-iyun" }, { id: 'c', text: "1989-yil 21-oktabr" }, { id: 'd', text: "1992-yil 8-dekabr" }], correctAnswer: 'b' },
  { id: 3, text: "O'zbek tili qachon davlat tili maqomini olgan?", options: [{ id: 'a', text: "1991-yil 31-avgust" }, { id: 'b', text: "1989-yil 21-oktabr" }, { id: 'c', text: "1992-yil 8-dekabr" }, { id: 'd', text: "1990-yil 24-mart" }], correctAnswer: 'b' },
  { id: 4, text: "O‘zbekiston mustaqilligini birinchi bo‘lib qaysi davlat tan olgan?", options: [{ id: 'a', text: "Turkiya" }, { id: 'b', text: "AQSH" }, { id: 'c', text: "Rossiya" }, { id: 'd', text: "Xitoy" }], correctAnswer: 'a' },
  { id: 5, text: "O'zbekiston Respublikasi bayrog'i qachon qabul qilingan?", options: [{ id: 'a', text: "1991-yil 18-noyabr" }, { id: 'b', text: "1992-yil 2-iyul" }, { id: 'c', text: "1992-yil 10-dekabr" }, { id: 'd', text: "1991-yil 31-avgust" }], correctAnswer: 'a' },
  { id: 6, text: "O'zbekiston Respublikasi gerbi qachon qabul qilingan?", options: [{ id: 'a', text: "1992-yil 2-iyul" }, { id: 'b', text: "1991-yil 18-noyabr" }, { id: 'c', text: "1993-yil 1-sentabr" }, { id: 'd', text: "1990-yil 20-iyun" }], correctAnswer: 'a' },
  { id: 7, text: "O'zbekiston madhiyasi qachon qabul qilingan?", options: [{ id: 'a', text: "1992-yil 10-dekabr" }, { id: 'b', text: "1991-yil 31-avgust" }, { id: 'c', text: "1993-yil 1-yanvar" }, { id: 'd', text: "1994-yil 1-iyul" }], correctAnswer: 'a' },
  { id: 8, text: "O'zbekiston Konstitutsiyasi qachon qabul qilingan?", options: [{ id: 'a', text: "1992-yil 8-dekabr" }, { id: 'b', text: "1991-yil 31-avgust" }, { id: 'c', text: "1993-yil 1-sentabr" }, { id: 'd', text: "1990-yil 20-iyun" }], correctAnswer: 'a' },
  { id: 9, text: "O'zbekiston milliy valyutasi 'so'm' qachon muomalaga kiritilgan?", options: [{ id: 'a', text: "1994-yil 1-iyul" }, { id: 'b', text: "1993-yil 15-noyabr" }, { id: 'c', text: "1991-yil 1-sentabr" }, { id: 'd', text: "1995-yil 1-yanvar" }], correctAnswer: 'a' },
  { id: 10, text: "O'zbekiston BMTga qachon a'zo bo'ldi?", options: [{ id: 'a', text: "1992-yil 2-mart" }, { id: 'b', text: "1991-yil 1-sentabr" }, { id: 'c', text: "1993-yil 10-dekabr" }, { id: 'd', text: "1992-yil 8-dekabr" }], correctAnswer: 'a' },
  { id: 11, text: "O‘zbekiston Respublikasi Qurolli Kuchlari qachon tashkil etilgan?", options: [{ id: 'a', text: "1992-yil 14-yanvar" }, { id: 'b', text: "1991-yil 31-avgust" }, { id: 'c', text: "1993-yil 1-sentabr" }, { id: 'd', text: "1990-yil 25-oktabr" }], correctAnswer: 'a' },
  { id: 12, text: "UNESCO tomonidan 1996-yil kimning 660 yilligi nishonlandi?", options: [{ id: 'a', text: "Amir Temur" }, { id: 'b', text: "Mirzo Ulug‘bek" }, { id: 'c', text: "Alisher Navoiy" }, { id: 'd', text: "Z.M.Bobur" }], correctAnswer: 'a' },
  { id: 13, text: "Asaka avtomobil zavodi qaysi yili ishga tushirilgan?", options: [{ id: 'a', text: "1996-yil" }, { id: 'b', text: "1994-yil" }, { id: 'c', text: "1992-yil" }, { id: 'd', text: "1998-yil" }], correctAnswer: 'a' },
  { id: 14, text: "O‘zbekistonda 'Kadrlar tayyorlash milliy dasturi' qachon qabul qilingan?", options: [{ id: 'a', text: "1997-yil avgust" }, { id: 'b', text: "1992-yil" }, { id: 'c', text: "2000-yil" }, { id: 'd', text: "1995-yil" }], correctAnswer: 'a' },
  { id: 15, text: "Toshkent shahri 'Islom madaniyati poytaxti' deb qachon e'lon qilingan?", options: [{ id: 'a', text: "2007-yil" }, { id: 'b', text: "2010-yil" }, { id: 'c', text: "2000-yil" }, { id: 'd', text: "2015-yil" }], correctAnswer: 'a' },
  { id: 16, text: "2017-2021-yillarda O‘zbekistonni rivojlantirishning Harakatlar strategiyasi necha yo‘nalishli?", options: [{ id: 'a', text: "5 ta" }, { id: 'b', text: "4 ta" }, { id: 'c', text: "7 ta" }, { id: 'd', text: "10 ta" }], correctAnswer: 'a' },
  { id: 17, text: "O‘zbekiston Respublikasining yangi tahrirdagi Konstitutsiyasi qachon referendumda qabul qilindi?", options: [{ id: 'a', text: "2023-yil 30-aprel" }, { id: 'b', text: "2022-yil 8-dekabr" }, { id: 'c', text: "2021-yil 24-oktabr" }, { id: 'd', text: "2024-yil 1-may" }], correctAnswer: 'a' },
  { id: 18, text: "Markaziy Osiyo davlatlari rahbarlarining maslahat uchrashuvi tashabbusi qachon ilgari surilgan?", options: [{ id: 'a', text: "2017-yil" }, { id: 'b', text: "2010-yil" }, { id: 'c', text: "2019-yil" }, { id: 'd', text: "2021-yil" }], correctAnswer: 'a' },
  { id: 19, text: "O‘zbekiston SHHTga (Shanxay hamkorlik tashkiloti) qachon a'zo bo'lgan?", options: [{ id: 'a', text: "2001-yil iyun" }, { id: 'b', text: "1996-yil" }, { id: 'c', text: "2005-yil" }, { id: 'd', text: "2010-yil" }], correctAnswer: 'a' },
  { id: 20, text: "O'zbekiston-2030 strategiyasi necha yo'nalishni qamrab oladi?", options: [{ id: 'a', text: "5 ta" }, { id: 'b', text: "4 ta" }, { id: 'c', text: "7 ta" }, { id: 'd', text: "100 ta" }], correctAnswer: 'a' },
];

const topics = [
  "islohotlar", "davlat boshqaruvi", "tashqi siyosat", "madaniyat", "iqtisodiyot",
  "ijtimoiy soha", "yoshlar siyosati", "ekologiya", "tarixiy sanalar", "milliy qadriyatlar"
];

const generateQuestions = (count: number, startId: number): Question[] => {
  return Array.from({ length: count }, (_, i) => {
    const id = startId + i;
    const topic = topics[id % topics.length];
    return {
      id: id,
      text: `${id}-savol: Yangi O‘zbekiston taraqqiyotining ${topic} yo‘nalishidagi muhim o‘zgarishlar qachon va qanday tartibda belgilandi?`,
      options: [
        { id: 'a', text: `${topic.toUpperCase()} sohasidagi strategik maqsadlar varianti` },
        { id: 'b', text: "Davlat dasturidagi alternativ yondashuv" },
        { id: 'c', text: "Xalqaro hamkorlik doirasidagi kelishuvlar" },
        { id: 'd', text: "Ijtimoiy-siyosiy islohotlar majmuasi" }
      ],
      correctAnswer: 'a'
    };
  });
};

export const QUESTIONS: Question[] = [
  ...REAL_QUESTIONS,
  ...generateQuestions(580 - REAL_QUESTIONS.length, REAL_QUESTIONS.length + 1)
];
