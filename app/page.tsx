'use client'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [philValue, setPhilValue] = useState('')
  const [isPetitionDone, setIsPetitionDone] = useState(false)
  const [questionInputValue, setQuestionInputValue] = useState('')
  const [philAnswer, setPhilAnswer] = useState('')
  const realInputRef = useRef<HTMLInputElement | null>(null)
  const questionInputRef = useRef<HTMLInputElement | null>(null)

  const randomAnswer = 'I cannot answer your question right now.'

  useEffect(() => {
    const petition = 'Phil please answer the following question.'
    setPhilValue(petition.slice(0, inputValue.length))
  }, [inputValue])

  const handleFakeInputFocus = () => {
    if (realInputRef.current) {
      realInputRef.current.focus()
    }
  }

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setIsPetitionDone(true)
      setTimeout(() => {
        if (questionInputRef.current) {
          questionInputRef.current.focus()
        }
      }, 0) // Use a minimal delay
    }
  }

  const handleRevealAnswer = (event: any) => {
    if (event.key === 'Enter') {
      if (inputValue.includes('please') || inputValue.includes('answer')) {
        setPhilAnswer(randomAnswer)
      } else {
        const splitString = inputValue.split('.')
        const extractedPhilAnswer = splitString[0]
        setPhilAnswer(extractedPhilAnswer)
      }

      setQuestionInputValue('')
      setIsPetitionDone(false)
      setInputValue('')
    }
  }

  const handleStartAgain = () => {
    setPhilAnswer('')
  }

  return (
    <main className='bg-black h-screen'>
      <div className='container mx-auto pt-10'>
        <h1 className='text-white font-bold text-5xl text-center mb-4'>
          Phil Answers
        </h1>
        <div className='text-center mb-4 text-lg text-white'>
          Type your petition first, then ask your question.
        </div>
        <div className='text-center mb-4 text-lg text-gray-900'>
          {inputValue}.
        </div>

        {philAnswer ? (
          <>
            <div className='text-white text-center text-5xl'>{philAnswer}</div>
            <div className='text-center'>
              <button
                onClick={handleStartAgain}
                className='bg-white mt-4 text-black px-4 py-3 hover:bg-gray-400 transition duration-300'
              >
                Start again
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Start of Input */}
            <div className='text-center w-1/3 mx-auto relative'>
              {/* Petition */}
              <input
                ref={realInputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                className='bg-white px-5 py-3 w-full outline-none'
                placeholder='Enter your petition'
                type='text'
              />
              {/* Fake input */}
              {inputValue && (
                <input
                  value={philValue}
                  readOnly
                  className={`absolute top-0 bg-white h-full w-full flex items-center px-5 outline-none`}
                  onFocus={handleFakeInputFocus}
                />
              )}
            </div>

            <div
              className={`text-gray-400 text-center mt-2 mb-5 ${
                inputValue ? 'opacity-100' : 'opacity-0'
              }`}
            >{`If you're done, press enter button.`}</div>

            <div className='text-center w-1/3 mx-auto relative'>
              {/* Question */}
              <input
                ref={questionInputRef}
                value={questionInputValue}
                onChange={(e) => setQuestionInputValue(e.target.value)}
                className='bg-white px-5 py-3 w-full outline-none disabled:opacity-50 disabled:cursor-not-allowed'
                placeholder={`${
                  isPetitionDone
                    ? 'Type your question here'
                    : 'Please finish your petition above...'
                }`}
                type='text'
                disabled={!isPetitionDone}
                onKeyDown={handleRevealAnswer}
              />
            </div>
            {/* End of Input */}
          </>
        )}
      </div>
      <div className='text-center mt-4'>
        <Link className='text-blue-500' href='/how-to'>
          How to use this?
        </Link>
      </div>
    </main>
  )
}
