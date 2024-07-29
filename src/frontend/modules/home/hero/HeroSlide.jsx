import React from "react";
import World from "../../../../assets/images/world.png";
import Heroimg1 from "../../../../assets/images/hero-img01.jpg";
import Heroimg2 from "../../../../assets/images/hero-img02.jpg";
import HeroVideo from "../../../../assets/images/hero-video.mp4";

const HeroSlide = () => {
  return (
    <div>
      <section>
        <span>
          <div>
            <p>
              Know before you go{" "}
              <img width={50} height={50} src={World} alt="WorldLogo" />
            </p>
            <p>Travelling opens the doors to creating memories</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              quam, eveniet, cupiditate quaerat sint ullam debitis officiis cum
              adipisci excepturi consequuntur ea natus cumque animi explicabo
              voluptates, aspernatur quos magnam!
            </p>
          </div>

          <img width={180} height={428} src={Heroimg1} alt="Heroimg1" />
          <video width="200" height="500" controls  muted >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img width={180} height={428} src={Heroimg2} alt="Heroimg2" />
        </span>
      </section>
    </div>
  );
};

export default HeroSlide;
