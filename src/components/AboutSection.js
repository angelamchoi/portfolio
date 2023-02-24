import AngelaChoi from '../img/AngelaChoi.jpg';
const AboutSection = () => {
  return (
    <div>
      <div className ="description">
        <div className="title">
          <div className="hide">
            <h2>Hi, I'm Angela</h2>
            </div>
            <div className="hide">
              <h2>and I'm a full stack developer</h2>
            <div className="hide">
                <h2>based in <span>Toronto.</span></h2>
            </div>
          </div>
        </div>
        <p>I love to combine my coding skills to help my community.</p>
        <button>Let's Connect!</button>
        <img src={AngelaChoi} alt="Angela Choi"/>
      </div>
    </div>
  )
}

export default AboutSection;