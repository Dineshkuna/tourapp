import React from "react";
import World from "../../../../assets/images/world.png";
import Heroimg1 from "../../../../assets/images/hero-img01.jpg";
import Heroimg2 from "../../../../assets/images/hero-img02.jpg";
import HeroVideo from "../../../../assets/images/hero-video.mp4";
import './HeroSlide.css'

const HeroSlide = () => {
  return (
    <div>
      <section className="heroSection">
        <div className="heroMatter">
          <p className="heroMatter1">
            <p className="herodesc1">Know before you go{" "}</p>
            <img className="heroLogo" width={50} height={50} src={World} alt="WorldLogo" />
          </p>
          <p className="herodesc2"><b className="herodesc4">Travelling opens the doors to creating</b> <b className="herodesc3">memories</b></p>
          <p className="herodesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita fuga, nemo eaque similique veritatis, accusamus dignissimos debitis ipsam suscipit reiciendis sequi odio deserunt ea error facere doloremque molestiae at doloribus repellat magni dolorem dolor? Velit voluptates ratione assumenda voluptate ut est dolorum a quo, quia cupiditate pariatur accusantium deserunt!
          </p>
        </div>
        <div className="heroSnap">
          <img className="Heroimg1" width={180} height={428} src={Heroimg1} alt="Heroimg1" />
          <video className="HeroVideo"  width="190" height="450" controls >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img className="Heroimg2" width={180} height={428} src={Heroimg2} alt="Heroimg2" />
        </div>
      </section>
    </div>
  );
};

export default HeroSlide;
