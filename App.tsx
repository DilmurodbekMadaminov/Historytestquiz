
import React, { useState, useMemo } from 'react';
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

  // Local state to hold the questions for the current session (with shuffled options)
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);

  const goToVariantSelection = () => {
    setQuiz(prev => ({ ...prev, status: 'SELECT_VARIANT' }));
  };

  const startQuizWithRange = (range: QuizRange) => {
    const rangeQuestions = QUESTIONS.filter(q => q.id >= range.start && q.id <= range.end);
    
    if (rangeQuestions.length === 0) {
      alert("Hozircha ushbu variant uchun savollar qo'shilmagan.");
      return;
    }

    // Process questions: shuffle options and re-assign A, B, C, D IDs
    const processedQuestions = rangeQuestions.map(originalQ => {
      // 1. Get the text of the correct answer first
      const correctOptionText = originalQ.options.find(o => o.id === originalQ.correctAnswer)?.text;
      
      // 2. Shuffle the original options
      const shuffledOptions = shuffle(originalQ.options);
      
      // 3. Re-assign standard A, B, C, D IDs to the shuffled options
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

    setQuiz(prev => ({
      ...prev,
      userAnswers: {
        ...prev.userAnswers,
        [prev.currentQuestionIndex]: optionId
      }
    }));
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
    let calculatedScore = 0;
    sessionQuestions.forEach((q, index) => {
      if (quiz.userAnswers[index] === q.correctAnswer) {
        calculatedScore++;
      }
    });

    setQuiz(prev => ({
      ...prev,
      status: 'FINISHED',
      score: calculatedScore
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
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-slate-900">
        <div className="max-w-2xl w-full bg-white/80 rounded-[2.5rem] shadow-2xl p-10 text-center border border-white backdrop-blur-md">
          <div className="mb-8 inline-flex p-6 bg-blue-600 rounded-3xl shadow-xl shadow-blue-200 text-white">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            O'zbekiston Eng Yangi Tarixi
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto">
            Jami 580 ta savol, 12 ta variant. Bilimingizni professional darajada sinab ko'ring.
          </p>
          <Button size="lg" onClick={goToVariantSelection} className="px-16 py-5 text-2xl font-bold rounded-2xl shadow-2xl shadow-blue-300 transform transition-transform hover:scale-105">
            Testni boshlash
          </Button>
        </div>
      </div>
    );
  }

  if (quiz.status === 'SELECT_VARIANT') {
    return (
      <div className="min-h-screen bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Variantni tanlang</h2>
            <p className="text-slate-500 text-lg">Testlar 50 tadan variantlarga bo'lingan (jami 580 ta savol)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {VARIANTS.map((variant) => {
              const count = QUESTIONS.filter(q => q.id >= variant.start && q.id <= variant.end).length;
              const isAvailable = count > 0;
              return (
                <button
                  key={variant.label}
                  onClick={() => isAvailable && startQuizWithRange(variant)}
                  disabled={!isAvailable}
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-300 text-left ${
                    isAvailable 
                      ? 'bg-white border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-xl group active:scale-95' 
                      : 'bg-slate-200 border-slate-300 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100 uppercase">
                      ID: {variant.start}-{variant.end}
                    </span>
                    {isAvailable && (
                      <div className="bg-blue-600 rounded-full p-1.5 text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">{variant.label}</h3>
                  <p className="text-slate-500 font-medium">{isAvailable ? `${count} ta savol` : 'Tez orada'}</p>
                </button>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" onClick={() => setQuiz(prev => ({ ...prev, status: 'START' }))} className="px-12 rounded-2xl border-slate-200 text-slate-500">
              Orqaga qaytish
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (quiz.status === 'FINISHED') {
    const total = sessionQuestions.length;
    const percentage = Math.round((quiz.score / total) * 100);
    const incorrectAnswers = sessionQuestions.filter((q, index) => quiz.userAnswers[index] !== q.correctAnswer);

    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 sm:p-12 text-center border border-slate-100 mb-8">
            <h2 className="text-4xl font-black text-slate-900 mb-2">Natija</h2>
            <p className="text-blue-600 font-bold mb-10 uppercase tracking-[0.2em]">{quiz.selectedRange?.label}</p>
            
            <div className="relative inline-flex items-center justify-center mb-12">
              <svg className="w-48 h-48 sm:w-56 sm:h-56">
                <circle className="text-slate-100" strokeWidth="16" stroke="currentColor" fill="transparent" r="80" cx="96" cy="96" />
                <circle 
                  className="text-blue-600 transition-all duration-1000 ease-out drop-shadow-2xl" 
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
              <div className="absolute">
                <span className="text-5xl sm:text-6xl font-black text-slate-900">{percentage}%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-12">
              <div className="p-6 sm:p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100 shadow-sm transition-transform hover:scale-105">
                <div className="text-xs text-emerald-600 font-black uppercase tracking-widest mb-2">To'g'ri</div>
                <div className="text-4xl sm:text-5xl font-black text-emerald-700">{quiz.score}</div>
              </div>
              <div className="p-6 sm:p-8 bg-rose-50 rounded-[2rem] border border-rose-100 shadow-sm transition-transform hover:scale-105">
                <div className="text-xs text-rose-600 font-black uppercase tracking-widest mb-2">Xato</div>
                <div className="text-4xl sm:text-5xl font-black text-rose-700">{total - quiz.score}</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="primary" size="lg" onClick={restartQuiz} className="flex-1 py-4 text-xl rounded-2xl shadow-xl shadow-blue-200">
                Qayta urinish
              </Button>
              <Button variant="outline" size="lg" onClick={goToVariantSelection} className="flex-1 py-4 text-xl rounded-2xl border-slate-200">
                Boshqa variant
              </Button>
            </div>
          </div>

          {incorrectAnswers.length > 0 ? (
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
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 font-black text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-slate-800 mb-4">{q.text}</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
                              <span className="text-xs font-black text-rose-600 uppercase tracking-widest block mb-1">Sizning javobingiz</span>
                              <p className="text-slate-700 font-medium">({userAnswerId?.toUpperCase() || '?'}) {userAnswer?.text || 'Tanlanmagan'}</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                              <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block mb-1">To'g'ri javob</span>
                              <p className="text-slate-700 font-bold">({q.correctAnswer.toUpperCase()}) {correctAnswer?.text}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-emerald-50 rounded-3xl p-10 text-center border border-emerald-100">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-black text-emerald-800 mb-2">Ajoyib natija!</h3>
              <p className="text-emerald-600 font-medium">Siz barcha savollarga to'g'ri javob berdingiz.</p>
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
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200/50 p-8 sm:p-14">
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
            <h3 className="text-3xl sm:text-4xl font-black text-slate-800 leading-[1.2]">
              {currentQuestion.text}
            </h3>
          </div>

          <div className="space-y-5 mb-14">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectOption = option.id === currentQuestion.correctAnswer;
              
              let optionStyles = 'border-slate-100 hover:border-slate-300 hover:bg-slate-50/50';
              let badgeStyles = 'border-slate-200 text-slate-300';
              
              if (selectedAnswer) {
                if (isCorrectOption) {
                  optionStyles = 'border-emerald-500 bg-emerald-50 shadow-md ring-2 ring-emerald-500/10';
                  badgeStyles = 'bg-emerald-500 border-emerald-500 text-white';
                } else if (isSelected) {
                  optionStyles = 'border-rose-500 bg-rose-50 shadow-md ring-2 ring-rose-500/10';
                  badgeStyles = 'bg-rose-500 border-rose-500 text-white';
                } else {
                  optionStyles = 'border-slate-100 opacity-60 grayscale-[0.5]';
                }
              }

              return (
                <label 
                  key={option.id}
                  className={`
                    relative flex items-center p-7 rounded-[1.5rem] border-2 transition-all duration-300
                    ${!selectedAnswer ? 'cursor-pointer' : 'cursor-default'}
                    ${optionStyles}
                  `}
                >
                  <input 
                    type="radio" 
                    name="quiz-option" 
                    className="hidden"
                    checked={isSelected}
                    onChange={() => handleAnswerSelect(option.id)}
                    disabled={!!selectedAnswer}
                  />
                  <div className={`
                    flex items-center justify-center w-11 h-11 rounded-2xl border-2 mr-6 transition-all font-black text-lg
                    ${badgeStyles}
                  `}>
                    {option.id.toUpperCase()}
                  </div>
                  <span className={`text-xl transition-all ${isSelected ? 'text-slate-900 font-bold' : 'text-slate-600'}`}>
                    {option.text}
                  </span>
                  
                  {selectedAnswer && isCorrectOption && (
                    <div className="ml-auto text-emerald-600 animate-in fade-in zoom-in duration-300">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  {selectedAnswer === option.id && !isCorrectOption && (
                    <div className="ml-auto text-rose-600 animate-in fade-in zoom-in duration-300">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </label>
              );
            })}
          </div>

          {selectedAnswer && (
            <div className={`mb-8 p-4 rounded-2xl animate-in slide-in-from-bottom-2 fade-in duration-500 ${
              selectedAnswer === currentQuestion.correctAnswer 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' 
                : 'bg-rose-50 text-rose-700 border border-rose-100'
            }`}>
              <p className="font-bold flex items-center gap-2">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <><span>✅</span> To'g'ri javob!</>
                ) : (
                  <><span>❌</span> Noto'g'ri. To'g'ri javob: ({currentQuestion.correctAnswer.toUpperCase()}) {currentQuestion.options.find(o => o.id === currentQuestion.correctAnswer)?.text}</>
                )}
              </p>
            </div>
          )}

          <div className="flex justify-between items-center pt-10 border-t border-slate-100">
            <Button 
              variant="outline" 
              onClick={prevQuestion} 
              disabled={quiz.currentQuestionIndex === 0}
              className="px-10 py-3 rounded-2xl font-bold border-slate-200 text-slate-500 hover:bg-slate-50"
            >
              Orqaga
            </Button>
            <Button 
              variant="primary" 
              onClick={nextQuestion} 
              disabled={!selectedAnswer}
              className="px-14 py-4 text-xl font-black rounded-2xl shadow-xl shadow-blue-200"
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
