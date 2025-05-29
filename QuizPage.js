
import { useState } from 'react';

export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (questionKey, answerValue) => {
    setAnswers(prev => ({ ...prev, [questionKey]: answerValue }));
    setStep(step + 1);
  };

  const handleEmailSubmit = () => {
    if (!email.includes("@")) return;

    fetch("https://gogovintagetravel.us17.list-manage.com/subscribe/post?u=12c423c6949490801575d8f98&id=80843d8774&c=?", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({ EMAIL: email }).toString()
    });

    setSubmitted(true);
  };

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ color: '#C78E56', fontSize: '2rem', textAlign: 'center' }}>Find Your Vintage Travel Match</h1>
      {/* Quiz logic continues here... */}
    </main>
  );
}
