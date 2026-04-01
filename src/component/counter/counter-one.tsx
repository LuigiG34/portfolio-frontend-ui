function MarqueImage({ src }: { src: string }) {
  return <img src={src} alt="marque-img" style={{ height: 'auto' }} />
}
export default function CounterOne() {
  return (
    <div className="slide-funfact-height slide-funfact p-relative d-flex align-items-center justify-content-center">
      <div className="img-marq slide-funfact-overlay">
        <div className="middle-shadow">
          <span></span>
        </div>
        <div className="slide-img-left">
          <div className="box">
            <MarqueImage src="/assets/img/home-05/marque/marque-1.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-2.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-3.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-4.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-5.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-6.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-7.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-8.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-9.jpg" />
          </div>
          <div className="box">
            <MarqueImage src="/assets/img/home-05/marque/marque-1.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-2.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-3.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-4.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-5.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-6.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-7.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-8.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-9.jpg" />
          </div>
        </div>
        <div className="slide-img-right">
          <div className="box">
            <MarqueImage src="/assets/img/home-05/marque/marque-1.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-2.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-3.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-4.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-5.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-6.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-7.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-8.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-9.jpg" />
          </div>
          <div className="box">
            <MarqueImage src="/assets/img/home-05/marque/marque-1.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-2.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-3.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-4.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-5.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-6.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-7.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-8.jpg" />
            <MarqueImage src="/assets/img/home-05/marque/marque-9.jpg" />
          </div>
        </div>
      </div>

      <div className="slide-funfact-wrap">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-12 mb-30">
                <div className="slide-funfact-item text-center">
                  <h4>Tech Stack</h4>
                  <span>Les technologies que j'utilise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
