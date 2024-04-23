import * as S from './styles'
import dailyExpress from '../../assets/images/SCROOLL/dailyexpress.png'
import sherluxe from '../../assets/images/SCROOLL/Sheerluxe-logo-white.webp.png'
import mensFitness from '../../assets/images/SCROOLL/mensFitness.png'
import womenRuning from '../../assets/images/SCROOLL/womenRuning.png'
const Scrolling = () => {
  return (
    <S.Container>
      <div className="container">
        <span>AS SEEN IN</span>
      </div>
      <div className="images-container">
        <img src={dailyExpress} alt="" />
        <img src={sherluxe} alt="" />
        <img src={mensFitness} alt="" />
        <img src={womenRuning} alt="" />
        <img src={dailyExpress} alt="" />
        <img src={sherluxe} alt="" />
        <img src={mensFitness} alt="" />
        <img src={womenRuning} alt="" />
        <img src={dailyExpress} alt="" />
        <img src={sherluxe} alt="" />
        <img src={mensFitness} alt="" />
        <img src={womenRuning} alt="" />
        <img src={dailyExpress} alt="" />
        <img src={sherluxe} alt="" />
        <img src={mensFitness} alt="" />
        <img src={womenRuning} alt="" />
      </div>
    </S.Container>
  )
}

export default Scrolling
