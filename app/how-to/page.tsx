import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-black h-screen'>
      <div className='container mx-auto'>
        <div className='pt-10 lg:w-1/2 mx-auto'>
          <h1 className='text-white text-4xl text-start font-bold uppercase'>
            What is Phil Answers?
          </h1>
          <p className='text-white text-start mx-auto mt-3'>
            This app is inspired by one of my childhood moments. As a kid, I was
            always tricked by my elder friends on workshops using a website
            called Peter Answers. It is basically a website to trick people.
          </p>
          <p className='text-white text-start mx-auto mt-3'>
            {`If you don't know about it, then you'd be surprise how this website
            can guess you and everything that happens around you.`}
          </p>
        </div>
        <hr className='mt-9' />
        <div className='py-10 lg:w-1/2 mx-auto'>
          <h1 className='text-white text-4xl text-start font-bold uppercase'>
            How to trick people?
          </h1>
          <p className='text-white text-start mx-auto mt-3'>
            <strong>STEP 1:</strong> Go to the petition input field.
          </p>
          <p className='text-white text-start mx-auto mt-3'>
            <strong>STEP 2:</strong>{' '}
            {`Notice that when you type, it doesn't show
            you what you are really typing. But instead, it shows "Phil please
            answer"`}
          </p>
          <p className='text-white text-start mx-auto mt-3'>
            <strong>STEP 3:</strong>{' '}
            {`That's when you can type your answer
            without your screen viewer knowing it.`}
          </p>
          <p className='text-white text-start mx-auto mt-3'>
            <strong>STEP 4:</strong>{' '}
            {`After typing your answer, you have to hit
            period on your keyboard to let the program knows that you're done
            typing your answer.`}
          </p>
          <p className='text-white text-start mx-auto mt-3'>
            <strong>STEP 5:</strong> Continue typing until you finish the whole
            petition.
          </p>
          <p className='text-white text-start mx-auto mt-3'>
            <strong>STEP 6:</strong> Hit enter key so that the question field
            becomes active.
          </p>
          <p className='text-white text-start mx-auto mt-3'>
            <strong>STEP 7:</strong> Type your question and hit enter. You are
            now able to surprise your friends.
          </p>
        </div>
      </div>
      <hr />
      <div className='text-center mt-10'>
        <Link href='/' className='text-blue-500'>
          Go back
        </Link>
      </div>
    </div>
  )
}

export default page
