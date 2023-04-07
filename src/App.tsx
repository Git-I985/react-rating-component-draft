import React, { useEffect, useState } from "react";
import { Rating } from "./Rating";

const InteractiveRating = ({ label = "", once = false }) => {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(4);
  const [changed, setChanged] = useState(false);

  const computed = hoverRating || rating;

  return (
    <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
      <div style={{ display: "inline-block" }}>
        <Rating
          hoverable={!(once && changed)}
          rating={rating}
          onRatingChange={(r) => {
            if (once && changed) return;
            setRating(r);
            setChanged(true);
          }}
          onRatingHover={(r) => {
            setHoverRating(r);
          }}
        />
      </div>
      <span>
        {label}: {computed}
      </span>
    </div>
  );
};

export default () => (
  <>
    <Rating rating={3} total={10} />
    <Rating rating={3.6} total={10} />
    <Rating rating={2.15} total={10} />
    <Rating rating={2.5} />
    <Rating rating={4.7} />
    <Rating rating={5} />
    <Rating rating={4} />
    <h2>Hoverable</h2>
    <Rating hoverable={true} rating={3} total={10} />
    <Rating hoverable={true} rating={3.6} total={10} />
    <Rating hoverable={true} rating={2.15} total={10} />
    <Rating hoverable={true} rating={2.5} />
    <Rating hoverable={true} rating={4.7} />
    <Rating hoverable={true} rating={5} />
    <InteractiveRating label={"Saves state, changable"} />
    <InteractiveRating label={"Saves state, not changable"} once={true} />
  </>
);
