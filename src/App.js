import './App.css';
import React, { useState } from 'react';
import MainMenu from './Components/About';
import Quiz from './Components/Quiz';
import { BrowserRouter, Route, Router,Routes, ScrollRestoration } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
 import { questions } from './Helpers/QuestionBank'
 import { QuestionArabic } from './Helpers/QUestionArabic'
 import { ScienceQuestion } from './Helpers/ScienceQuestion';
import Hero from './Components/Hero';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
export default function App() {
	return(
		<>
		<Nav/>

	<Routes>
	<Route path='/' element={<><Hero/>
		</>}/>
	<Route path='About' element={<About/>}/>
	<Route path='ContactUs' element={<ContactUs
	
	/>}/>

		<Route path='English' element={	<Quiz questionData={questions} />}/>
		<Route path='Arabic' element={<Quiz questionData={QuestionArabic} />}/>
		<Route path='IqQuiz' element={<Quiz questionData={ScienceQuestion}/>}/>
	</Routes>
	<Footer/>
		
		</>
	)
}