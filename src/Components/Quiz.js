import React,{useState,useContext} from 'react'
import MainMenu from './About';
import image4 from "../images/pngegg (6).png"
import image5 from "../images/pngegg (3).png"

//import { questions }  from './Helpers/QuestionBank'

function Quiz (props) {
  const questions=props.questionData
///// to make the next question 
const [currentQuestion, setCurrentQuestion] = useState(0);
const [prevQuestion, setprevQuestion] = useState(1);
/// to show score 
const [showScore, setShowScore] = useState(false);
////to set the score
const [score, setScore] = useState(0);
//parameter is the value of answer is correct or not according to data
console.log(questions[currentQuestion]-1);
const backButton=()=>{
const lastQuestion= questions[currentQuestion] -1
if(lastQuestion<questions.length){
  setCurrentQuestion(lastQuestion)
  
      }
}
const next=()=>{
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } 

  else {
    setShowScore(true);
  }}
  const back=()=>{
    const backQuestion = currentQuestion - 1;
    if (backQuestion < questions.length+1) {
      setCurrentQuestion(backQuestion);
    } 
  
    else {
      setShowScore(true);
    }}
// const prevButton=()=>{
//   const prevQuestionQuestion= prevQuestion + 1
//   if(prevQuestionQuestion<questions.length){
//     setCurrentQuestion(prevQuestion)
    
//         }
//   }
const handleAnswerOptionClick = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion);
  } 

  else {
    setShowScore(true);
  }
};

return (
  <div className='  p-10 flex  '>

    {showScore ? (
  <div className='lg:ml-72 flex lg:flex-row flex-gap-10 '>

<div className=' flex lg:flex-row gap-5 text-green-500 font-bold  text-3xl'> 
              <img className="w-96"src={image5}/>

      <div className='mt-60'>  You scored {score} out of {questions.length}</div>
      </div>
      </div>
    ) : (
      <>
          <div className='flex flex-col m-3 p-3 gap-6 lg:mt-24 lg:ml-50 w-full  '>

            <span className='text-amber-500 font-bold ml-0 lg:text-6xl'>Question {currentQuestion + 1}/{questions.length} </span>
            <div className='lg:text-2xl flex flex-col bg-gray-100 ml-3 gap-5 p-5 '>
          <div className=' p-3 text-blue-500 '>{questions[currentQuestion].questionText}</div>
          {console.log(questions[currentQuestion].answerOption)}
    
            {questions[currentQuestion].answerOption.map((answerOption) => (

            <button className="hover:text-amber-300 text-amber-500"onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>  {answerOption.answerText}</button>
          ))}  


        </div>
        <div className=' flex lg:flex-row  lg:ml-52 '>
          
<div className='hover:border-b-4  border-amber-500
flex flex-row text-blue-500  font-bold'>
<svg className="w-10 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
        </svg>
          <button className='p-5 m-3  lg:text-2xl' onClick={back}>back</button>
          </div>
          <div className='hover:border-b-4  border-amber-500
flex flex-row text-blue-500  font-bold'>
          <button className='text-blue-500 p-5 m-3 lg:text-2xl' onClick={next}>next </button>
          <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
          </div>
        </div>
        </div>
        <img className="lg:mr-45"src={image4}/>

      </>
    )}
    

  </div>
);
            }
export default Quiz