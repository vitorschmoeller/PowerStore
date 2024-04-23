import tiktok from '../../assets/images/tiktokmedia.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import linkedin from '../../assets/images/linkedin.png'
import * as S from './styles'
const Footer = () => {
  return (
    <S.Container>
      <S.Align className="container">
        <S.LinkContainer>
          <h3>
            #POWER <br /> EPISODES
          </h3>
          <p>get your monthly update of all things power</p>
          <S.InputContainer>
            <label htmlFor="email">Email</label>
            <button>SUBSCRIBE</button>
          </S.InputContainer>
          <input type="email" id="email" />
          <S.CheckContainer>
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe">
              I consent to POWER storing my information so that they <br /> may
              contact me in the future
            </label>
          </S.CheckContainer>
        </S.LinkContainer>
        <S.LinkContainer>
          <h4>EXPLORE</h4>
          <a href="">Shop</a>
          <a href="">Build a bundle</a>
          <a href="">Subscribe & Save</a>
          <a href="">Our story</a>
          <a href="">Blog</a>
        </S.LinkContainer>
        <S.LinkContainer>
          <h4>Help</h4>
          <a href="">Faqs</a>
          <a href="">Your Subscription</a>
          <a href="">Informed Sport Certification</a>
          <a href="">Contact</a>
        </S.LinkContainer>
        <S.LinkContainer>
          <h4>Legal</h4>
          <a href="">Returns & Refund policy</a>
          <a href="">Terms of service</a>
          <a href="">Privacy policy</a>
        </S.LinkContainer>
        <S.LinkContainer>
          <h4>FOLLOW US</h4>
          <div className="flex">
            <S.SocialMedia src={tiktok} alt="" />
            <S.SocialMedia src={facebook} alt="" />
            <S.SocialMedia src={instagram} alt="" />
            <S.SocialMedia src={linkedin} alt="" />
          </div>
        </S.LinkContainer>
      </S.Align>
    </S.Container>
  )
}

export default Footer
