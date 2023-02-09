import React , {usestate} from 'react';
import './App.css';

function App() {

// props

const {showFinalResults, setFinalResults} = usestate(false);

  return (
    <div className='App'>

    <h1>Quiz App</h1>

    <h2>Current Score</h2>
    {
      showFinalResults 
      ?  {/* final result */}
      <div className ="final-results">
        
        <h1>Final Result</h1>
        <h2>
          1 out of 5 correct - (20%)
        </h2>
        <button>Restart Game</button>
      </div>
       : <div className="question-card">
      <h2>Question 1 out of 5 </h2>
      <h3 className='question-text'>wht is the?</h3>

      <ul>
        <li>opt 1</li>
        <li>opt 2</li>
        <li>opt3</li>
        <li>opt4</li>
      </ul>
    </div>
    }

    

   

    </div>
  );
}

export default App;
