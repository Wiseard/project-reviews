import { useState } from 'react'
import reviews from './data'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

function App() {
  const [value, setValue] = useState(0)
  function previous() {
    setValue((value) => (value - 1 + reviews.length) % reviews.length)
  }
  function next() {
    setValue((value) => (value + 1) % reviews.length)
  }

  function randomUser() {
    const number = Math.floor(Math.random() * reviews.length)
    if (number === value) {
      setValue((value) => (value + 1) % reviews.length)
    } else {
      setValue(number)
    }
  }
  return (
    <main>
      <UserProfile value={value} />
      <div className="btns">
        <button onClick={previous} className="btn-prev" type="button">
          <BsChevronLeft />
        </button>
        <button onClick={next} className="btn-next" type="button">
          <BsChevronRight />
        </button>
      </div>
      <button onClick={randomUser} className="btn-random" type="button">
        Surprise me
      </button>
    </main>
  )
}

const UserProfile = ({ value }) => {
  const { name, job, image, text } = reviews[value]
  return (
    <article>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{job}</h3>
      <p>{text}</p>
    </article>
  )
}

export default App
