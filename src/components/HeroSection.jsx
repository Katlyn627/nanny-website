import CustomImage from "./CustomImage";

export default function HeroSection() {
    const images = [
        "/images/gallery/img_1.jpg",
        "/images/gallery/img_2.jpg",
        "/images/gallery/img_3.jpg",
        "/images/gallery/img_4.jpg",
        "/images/gallery/img_5.jpg",
        "/images/gallery/img_6.jpg",
        "/images/gallery/img_7.jpg",
        "/images/gallery/img_8.jpg",
        "/images/gallery/img_9.jpg",
    ]
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title"> What started my nanny journey?</h1>
        <p className="info"> As a recent graduate of culinary school I didn't feel like immediatly settling down and finding a job I wanted to explore and see the world so I decided to start on a few small au pair websites and see if I could be a nanny. Fast forward almost 15 years and I have created my own thriving business.</p>
        <button className="btn">Explore Now</button>
        </div>
      <div className=" col gallery">
        {images.map((src, index) =>(
            <CustomImage key={index} imgSrc={src} pt={"90%"}/>
        ))}  
      </div>
    </div>
  );
}
