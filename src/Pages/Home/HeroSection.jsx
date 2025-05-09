export default function HeroSection() {
  return (
    <div>
       <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, I'm Vikas Luhar  </p>
                    <h1 className="hero--section--title">
                    <span className="hero--section--title--color">FrontEnd Developer</span>
                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor <br/> libero molestias deserunt nesciunt. Deserunt, impedit.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    </div>
  )
}