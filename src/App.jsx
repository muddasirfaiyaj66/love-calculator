import { useState } from 'react';
import './App.css';

function App() {
  const [loveScore, setLoveScore] = useState(null);
  const [resultMessage, setResultMessage] = useState('');
  const [adviceMessage, setAdviceMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const partnerName = form.partnerName.value;

    const score = Math.floor(Math.random() * 101);
    setLoveScore(score);

    const result = `${name} and ${partnerName} have a love score of ${score}%!`;
    setResultMessage(result);

    if (score > 80) {
      setAdviceMessage("You're a perfect match!");
    } else if (score > 50) {
      setAdviceMessage("There is a lot of potential here!");
    } else if (score > 20) {
      setAdviceMessage("It might be a rocky road, but worth exploring.");
    } else {
      setAdviceMessage("Compatibility may be low, but anything is possible!");
    }
  };

  return (
    <>
      <div className='my-10 mb-20'>
        <h1 className='text-5xl font-playwrite md:text-7xl font-bold text-white'>Love Calculator</h1>
        <div className='position-relative1 bg-white p-5 md:p-10 shadow-2xl z-[10] bg-opacity-89 mt-10 rounded-lg font-playwrite'>
          <form className='max-w-sm mx-auto pb-8 space-y-5' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-5'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Your Name</span>
                </label>
                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black font-sem">Your Partner Name</span>
                </label>
                <input type="text" placeholder="Your Partner Name" name='partnerName' className="input input-bordered" required />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#ff3247] text-white text-xl font-bold">Result</button>
            </div>
          </form>

          {loveScore !== null && (
            <div className='bg-white container'>
              <div className='result-section  text-center'>
              <p className='text-2xl font-bold text-black front-medium'>{resultMessage}</p>
              <div className='heart2-container mt-5'>
                <div id='heart' className='heart2'>
                <div className='heart2-fill' style={{ width:`${loveScore}%` }}></div>
                </div>
              
              </div>
              <p className='mt-5 text-lg font-semibold'>{adviceMessage}</p>
            </div>
            </div>

          )}
           </div>
        
      </div>
    </>
  );
}

export default App;