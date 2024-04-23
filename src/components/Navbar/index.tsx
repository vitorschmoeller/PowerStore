import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { open } from '../../store/reducers/cart'

import cartIcon from '../../assets/images/cartIcon.png'

import * as S from './styles'
import { useState } from 'react'
const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>('')
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const [isMenuOpne, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  const handleSetActiveLink = (id: string) => {
    setActiveLink(id)
  }

  return (
    <S.Header className="container">
      <S.Navbar>
        <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpne)}>
          <span />
          <span />
          <span />
        </S.Hamburguer>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          {' '}
          <S.ALink
            title="Click here to access categories"
            margin="marginRight"
            to="/categories"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            SHOP
            {isDropdownVisible && (
              <div className="dropdownContent">
                <HashLink to="/categories#whey">Whey</HashLink>
                <HashLink to="/categories#creatina">Creatine</HashLink>
                <HashLink to="/categories#treino">Pre-workout</HashLink>
                <HashLink to="/categories#pasta">Peanut butter</HashLink>
              </div>
            )}
          </S.ALink>
          <S.ALink title="Click here to acess categories" to="/categories">
            BUILD A ORDER
          </S.ALink>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {' '}
          <Link to="/">
            <h1>PowerBlendz</h1>
          </Link>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          {' '}
          <S.ALink
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleSetActiveLink('about')}
            title="Click here to acess categories"
            to="/about"
            margin="marginRight"
          >
            ABOUT
          </S.ALink>
          <S.CardButton role="button" onClick={() => dispatch(open())}>
            <img src={cartIcon} alt="" />
          </S.CardButton>
        </div>
      </S.Navbar>
      <S.navPhone className={isMenuOpne ? 'is-open' : ''}>
        <S.ALink title="Click here to acess categories" to="/categories">
          SHOP
        </S.ALink>
        <S.ALink title="Click here to acess categories" to="/categories">
          BUILD A ORDER
        </S.ALink>
        <S.ALink title="Click here to acess categories" to="/about">
          ABOUT
        </S.ALink>
      </S.navPhone>
    </S.Header>
  )
}

export default Navbar
