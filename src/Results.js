import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h3>{props.results.phonetic}</h3>
        </section>
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
        <section className="imageCarousel">
          <h2>Images</h2>
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={props.imageResults.photos[0].src.landscape}
                    alt={props.imageResults.photos[0].alt}
                    className="d-block w-100 resulingImage"
                  ></img>
                </div>
                <div class="carousel-item">
                  <img
                    src={props.imageResults.photos[1].src.landscape}
                    alt={props.imageResults.photos[1].alt}
                    className="d-block w-100 resulingImage"
                  ></img>
                </div>
                <div class="carousel-item">
                  <img
                    src={props.imageResults.photos[2].src.landscape}
                    alt={props.imageResults.photos[2].alt}
                    className="d-block w-100 resulingImage"
                  ></img>
                </div>
              </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
