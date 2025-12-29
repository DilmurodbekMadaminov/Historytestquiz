
import React, { useState, useEffect } from 'react';
import { QUESTIONS } from './data';
import { QuizStatus, QuizState, QuizRange, Question, Option } from './types';
import Button from './components/Button';
import QuizHeader from './components/QuizHeader';

const VARIANTS: QuizRange[] = [
  { start: 1, end: 50, label: "1-variant" },
  { start: 51, end: 100, label: "2-variant" },
  { start: 101, end: 150, label: "3-variant" },
  { start: 151, end: 200, label: "4-variant" },
  { start: 201, end: 250, label: "5-variant" },
  { start: 251, end: 300, label: "6-variant" },
  { start: 301, end: 350, label: "7-variant" },
  { start: 351, end: 400, label: "8-variant" },
  { start: 401, end: 450, label: "9-variant" },
  { start: 451, end: 500, label: "10-variant" },
  { start: 501, end: 550, label: "11-variant" },
  { start: 551, end: 580, label: "12-variant" },
];

// Helper to shuffle an array
const shuffle = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const App: React.FC = () => {
  const [quiz, setQuiz] = useState<QuizState>({
    currentQuestionIndex: 0,
    userAnswers: {},
    status: 'START',
    score: 0,
    selectedRange: null,
  });

  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const goToVariantSelection = () => {
    setQuiz(prev => ({ ...prev, status: 'SELECT_VARIANT' }));
  };

  const startQuizWithRange = (range: QuizRange) => {
    // Exact range filtering based on user request
    const rangeQuestions = QUESTIONS.filter(q => q.id >= range.start && q.id <= range.end);
    
    if (rangeQuestions.length === 0) {
      alert("Hozircha ushbu variant uchun savollar qo'shilmagan.");
      return;
    }

    // Shuffle options for each question for better learning
    const processedQuestions = rangeQuestions.map(originalQ => {
      const correctOptionText = originalQ.options.find(o => o.id === originalQ.correctAnswer)?.text;
      const shuffledOptions = shuffle(originalQ.options);
      const standardIds = ['a', 'b', 'c', 'd'];
      let newCorrectAnswerId = 'a';
      
      const newOptions = shuffledOptions.map((opt, index) => {
        const newId = standardIds[index];
        if (opt.text === correctOptionText) {
          newCorrectAnswerId = newId;
        }
        return { ...opt, id: newId };
      });

      return {
        ...originalQ,
        options: newOptions,
        correctAnswer: newCorrectAnswerId
      };
    });

    setSessionQuestions(processedQuestions);
    setQuiz({
      currentQuestionIndex: 0,
      userAnswers: {},
      status: 'IN_PROGRESS',
      score: 0,
      selectedRange: range,
    });
  };

  const handleAnswerSelect = (optionId: string) => {
    if (quiz.userAnswers[quiz.currentQuestionIndex]) return;

    setQuiz(prev => {
      const isCorrect = optionId === sessionQuestions[prev.currentQuestionIndex].correctAnswer;
      return {
        ...prev,
        userAnswers: {
          ...prev.userAnswers,
          [prev.currentQuestionIndex]: optionId
        },
        score: isCorrect ? prev.score + 1 : prev.score
      };
    });
  };

  const nextQuestion = () => {
    if (quiz.currentQuestionIndex < sessionQuestions.length - 1) {
      setQuiz(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      finishQuiz();
    }
  };

  const prevQuestion = () => {
    if (quiz.currentQuestionIndex > 0) {
      setQuiz(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    }
  };

  const finishQuiz = () => {
    setQuiz(prev => ({
      ...prev,
      status: 'FINISHED',
    }));
  };

  const restartQuiz = () => {
    if (quiz.selectedRange) {
      startQuizWithRange(quiz.selectedRange);
    } else {
      goToVariantSelection();
    }
  };

  if (quiz.status === 'START') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-2xl w-full bg-white/95 rounded-[3rem] shadow-2xl p-10 text-center border border-white backdrop-blur-xl relative z-10">
          <div className="mb-8 inline-flex p-6 bg-blue-600 rounded-3xl shadow-xl shadow-blue-200 text-white animate-bounce-slow">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            O'zbekiston Tarixi Quiz
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto font-medium">
            Jami <span className="text-blue-600 font-bold">580 ta</span> savol, <span className="text-blue-600 font-bold">12 ta</span> variant. Bilimingizni professional darajada sinab ko'ring.
          </p>
          
          <div className="flex flex-col gap-4">
            <Button size="lg" onClick={goToVariantSelection} className="px-16 py-6 text-2xl font-bold rounded-2xl shadow-2xl shadow-blue-300 transform transition-all hover:scale-105 active:scale-95 bg-blue-600 hover:bg-blue-700">
              Variantlarni tanlash
            </Button>
            <button 
              onClick={() => setIsInfoOpen(true)}
              className="text-slate-400 font-bold hover:text-blue-600 transition-colors py-2"
            >
              Ilova haqida ma'lumot
            </button>
          </div>
        </div>

        {/* Info Modal */}
        {isInfoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white rounded-[2.5rem] max-w-lg w-full p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-slate-900">Ilova haqida</h3>
                <button onClick={() => setIsInfoOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed overflow-y-auto max-h-[60vh] pr-2">
                <p>Ushbu platforma <strong>"O'zbekistonning Eng Yangi Tarixi"</strong> fanidan bilimni sinash uchun mo'ljallangan.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>580 ta savol:</strong> Jami 12 ta variantga bo'lingan.</li>
                  <li><strong>Original Matn:</strong> Savollar PDF darsliklar asosida shakllantirilgan.</li>
                  <li><strong>Interaktivlik:</strong> Har bir xato uchun to'g'ri javobni ko'rish imkoniyati.</li>
                </ul>
              </div>
              <Button fullWidth onClick={() => setIsInfoOpen(false)} className="mt-8 rounded-xl py-4 font-bold">Tushunarli</Button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (quiz.status === 'SELECT_VARIANT') {
    return (
      <div className="min-h-screen bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Variantni tanlang</h2>
            <p className="text-slate-500 text-lg">Testlar 50 tadan (oxirgi variant 30 ta) variantlarga bo'lingan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {VARIANTS.map((variant) => (
              <button
                key={variant.label}
                onClick={() => startQuizWithRange(variant)}
                className="relative p-8 rounded-3xl border-2 transition-all duration-300 text-left bg-white border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-xl group active:scale-95"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100 uppercase tracking-wider">
                    ID: {variant.start}-{variant.end}
                  </span>
                  <div className="bg-blue-600 rounded-full p-1.5 text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{variant.label}</h3>
                <p className="text-slate-500 font-medium">{variant.end - variant.start + 1} ta savol</p>
              </button>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" onClick={() => setQuiz(prev => ({ ...prev, status: 'START' }))} className="px-12 rounded-2xl border-slate-200 text-slate-500 hover:bg-white hover:text-slate-900">
              Asosiy sahifaga qaytish
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (quiz.status === 'FINISHED') {
    const total = sessionQuestions.length;
    const percentage = Math.round((quiz.score / total) * 100);
    const incorrectQuestions = sessionQuestions.filter((q, index) => quiz.userAnswers[index] !== q.correctAnswer);

    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 sm:p-12 text-center border border-slate-100 mb-8">
            <h2 className="text-4xl font-black text-slate-900 mb-2">Natija</h2>
            <p className="text-blue-600 font-bold mb-10 uppercase tracking-widest">{quiz.selectedRange?.label}</p>
            
            <div className="relative inline-flex items-center justify-center mb-12">
              <svg className="w-48 h-48 sm:w-56 sm:h-56">
                <circle className="text-slate-100" strokeWidth="16" stroke="currentColor" fill="transparent" r="80" cx="96" cy="96" />
                <circle 
                  className={`${percentage > 70 ? 'text-emerald-500' : percentage > 40 ? 'text-amber-500' : 'text-rose-500'} transition-all duration-1000 ease-out`} 
                  strokeWidth="16" 
                  strokeDasharray={502.6} 
                  strokeDashoffset={502.6 - (502.6 * percentage) / 100} 
                  strokeLinecap="round" 
                  stroke="currentColor" 
                  fill="transparent" 
                  r="80" cx="96" cy="96" 
                  transform="rotate(-90 96 96)"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-5xl sm:text-6xl font-black text-slate-900 block">{percentage}%</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">To'g'ri javob</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-12">
              <div className="p-6 sm:p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100">
                <div className="text-xs text-emerald-600 font-black uppercase tracking-widest mb-2">To'g'ri</div>
                <div className="text-4xl sm:text-5xl font-black text-emerald-700">{quiz.score}</div>
              </div>
              <div className="p-6 sm:p-8 bg-rose-50 rounded-[2rem] border border-rose-100">
                <div className="text-xs text-rose-600 font-black uppercase tracking-widest mb-2">Xato</div>
                <div className="text-4xl sm:text-5xl font-black text-rose-700">{total - quiz.score}</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="primary" size="lg" onClick={restartQuiz} className="flex-1 py-5 text-xl rounded-2xl font-black">
                Qayta urinish
              </Button>
              <Button variant="outline" size="lg" onClick={goToVariantSelection} className="flex-1 py-5 text-xl rounded-2xl border-slate-200 font-black">
                Variantni almashtirish
              </Button>
            </div>
          </div>

          {incorrectQuestions.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-800 px-4">Xatolar tahlili</h3>
              <div className="space-y-4">
                {sessionQuestions.map((q, index) => {
                  const userAnswerId = quiz.userAnswers[index];
                  const isCorrect = userAnswerId === q.correctAnswer;
                  if (isCorrect) return null;

                  const userAnswer = q.options.find(o => o.id === userAnswerId);
                  const correctAnswer = q.options.find(o => o.id === q.correctAnswer);

                  return (
                    <div key={q.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm">
                      <h4 className="text-lg font-bold text-slate-800 mb-4">{index + 1}. {q.text}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
                          <span className="text-xs font-black text-rose-600 uppercase tracking-widest block mb-1">Sizning javobingiz</span>
                          <p className="text-slate-700 font-medium">{userAnswer?.text || 'Belgilanmagan'}</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                          <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block mb-1">To'g'ri javob</span>
                          <p className="text-slate-700 font-bold">{correctAnswer?.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const currentQuestion = sessionQuestions[quiz.currentQuestionIndex];
  if (!currentQuestion) return null;

  const selectedAnswer = quiz.userAnswers[quiz.currentQuestionIndex];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200/50 p-8 sm:p-14 animate-in fade-in duration-500">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-black rounded-xl uppercase tracking-widest border border-indigo-100">
              {quiz.selectedRange?.label}
            </span>
            <span className="px-4 py-1.5 bg-slate-50 text-slate-400 text-xs font-bold rounded-xl border border-slate-100">
              Savol ID: {currentQuestion.id}
            </span>
          </div>
          
          <QuizHeader 
            current={quiz.currentQuestionIndex + 1} 
            total={sessionQuestions.length} 
            score={quiz.score} 
          />

          <div className="mb-14 min-h-[140px] flex items-center">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-800 leading-tight">
              {currentQuestion.text}
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-14">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectOption = option.id === currentQuestion.correctAnswer;
              
              let optionStyles = 'border-slate-100 hover:border-slate-300 hover:bg-slate-50/50';
              if (selectedAnswer) {
                if (isCorrectOption) optionStyles = 'border-emerald-500 bg-emerald-50 shadow-md ring-2 ring-emerald-500/10';
                else if (isSelected) optionStyles = 'border-rose-500 bg-rose-50 shadow-md ring-2 ring-rose-500/10';
                else optionStyles = 'border-slate-100 opacity-60 grayscale-[0.5]';
              }

              return (
                <label 
                  key={option.id}
                  className={`relative flex items-center p-6 rounded-2xl border-2 transition-all duration-300 ${!selectedAnswer ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'} ${optionStyles}`}
                >
                  <input 
                    type="radio" 
                    name="quiz-option" 
                    className="hidden"
                    checked={isSelected}
                    onChange={() => handleAnswerSelect(option.id)}
                    disabled={!!selectedAnswer}
                  />
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl border-2 mr-6 transition-all font-black text-lg ${isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-200 text-slate-400'}`}>
                    {option.id.toUpperCase()}
                  </div>
                  <span className={`text-lg transition-all ${isSelected ? 'text-slate-900 font-bold' : 'text-slate-600 font-medium'}`}>
                    {option.text}
                  </span>
                </label>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-10 border-t border-slate-100">
            <Button 
              variant="outline" 
              onClick={prevQuestion} 
              disabled={quiz.currentQuestionIndex === 0}
              className="px-10 py-4 rounded-2xl font-black border-slate-200 text-slate-500 hover:bg-slate-50"
            >
              Orqaga
            </Button>
            <Button 
              variant="primary" 
              onClick={nextQuestion} 
              disabled={!selectedAnswer}
              className="px-14 py-4 text-xl font-black rounded-2xl shadow-xl shadow-blue-200 active:scale-95 transition-all"
            >
              {quiz.currentQuestionIndex === sessionQuestions.length - 1 ? 'Tugatish' : 'Keyingisi'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
