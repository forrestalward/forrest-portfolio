import { Link } from 'react-router-dom'
import './index.scss'
import LogoLetter from '../../assets/images/forrie.dev-icon.svg'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import Logo from './Logo/index'

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray = ['o', 'r', 'r', 'e', 's', 't']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    '',
    'S',
    't',
    'a',
    'c',
    'k',
    '',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={LogoLetter} alt="f" />
          <AnimatedLetters
            strArray={nameArray}
            idx={15}
            letterClass={letterClass}
          />
          <br />
          <AnimatedLetters
            strArray={jobArray}
            idx={21}
            letterClass={letterClass}
          />
        </h1>
        <h2>Frontend Developer / React Expert / Tall Guy</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
