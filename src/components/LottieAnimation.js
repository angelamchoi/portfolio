
import Lottie from 'lottie-web'
import {useEffect, } from 'react'

const LottieAnimation = () => {
  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: document.getElementById('lottie'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../img/animation.json'),
    })
    return () => instance.destroy();
  }, [])
  return (
    <div className="container" id="lottie"></div>
  )
}
export default LottieAnimation;


