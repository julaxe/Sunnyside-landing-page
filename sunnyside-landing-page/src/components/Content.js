import React from "react";
import "../styles/content.css";
import "../styles/scrollarrow.css";
import orange from "../images/desktop/image-header.jpg";
import egg from "../images/desktop/image-transform.jpg";
import cup from "../images/desktop/image-stand-out.jpg";
import cherry from "../images/desktop/image-graphic-design.jpg";
import fullOrange from "../images/desktop/image-photography.jpg";
import thomas from "../images/image-thomas.jpg";
import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";
import galleryMilk from "../images/desktop/image-gallery-milkbottles.jpg";
import galleryOrange from "../images/desktop/image-gallery-orange.jpg";
import galleryCone from "../images/desktop/image-gallery-cone.jpg";
import gallerySugar from "../images/desktop/image-gallery-sugarcubes.jpg";

function ContentBox({ title, children }) {
  return (
    <div className="text-block">
      <h1>{title}</h1>
      <p>{children}</p>
      <a href="">LEARN MORE</a>
    </div>
  );
}
function ImgBox({ title, children, img }) {
  return (
    <div className="img-block">
      <img src={img} alt={img} />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
export default function Content() {
  return (
    <div className="content">
      <div className="we-are-creatives">
        <h1>WE ARE CREATIVES</h1>
        <div className="icon">
          <div className="arrow"></div>
        </div>
        <img src={orange} alt="half orange" />
      </div>
      <div className="six-squares">
        <ContentBox title="Transform your brand">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </ContentBox>
        <ImgBox img={egg}></ImgBox>
        <ImgBox img={cup}></ImgBox>
        <ContentBox title="Stand out to the right audience">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places.
        </ContentBox>
        <ImgBox img={cherry} title="Graphic Design">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients attention.
        </ImgBox>
        <ImgBox img={fullOrange} title="Photography">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </ImgBox>
      </div>
      <div className="reviews-container">
        <h4>CLIENT TESTIMONIALS</h4>
        <div className="reviews">
          <div className="review">
            <img src={emily} alt="" />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="signature">
              <span>Emily R.</span>
              <p>Marketing Director</p>
            </div>
          </div>
          <div className="review">
            <img src={thomas} alt="" />
            <p>
              Sunnyside's enthusasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
            <div className="signature">
              <span>Thomas S.</span>
              <p>Chief Operating Officer</p>
            </div>
          </div>

          <div className="review">
            <img src={jennie} alt="" />
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. <br /> Highly recommended!
            </p>
            <div className="signature">
              <span>Jennie F.</span>
              <p>Business Owner</p>
            </div>
          </div>
        </div>
      </div>
      <div className="four-squares">
        <ImgBox img={galleryMilk} />
        <ImgBox img={galleryOrange} />
        <ImgBox img={galleryCone} />
        <ImgBox img={gallerySugar} />
      </div>
    </div>
  );
}
