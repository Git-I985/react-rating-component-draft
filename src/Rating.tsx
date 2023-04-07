import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { Star } from "./Star";
import { getFillPercentsFromRating } from "./getFillPercentsFromRating";

interface RatingProps {
  rating: number;
  total?: number;
  hoverable?: boolean;
  onRatingChange?: (rating: number) => void;
  onRatingHover?: (rating: number) => void;
}

export const Rating: React.FC<RatingProps> = ({
  rating = 5,
  total = 5,
  hoverable = false,
  onRatingChange = () => {},
  onRatingHover = () => {}
}) => {
  const [state, setState] = useState<number | null>(null);

  const computedRating = useMemo(() => (state === null ? rating : state), [
    state,
    rating
  ]);

  useEffect(() => {
    onRatingHover(state);
  }, [state]);

  const onHover = useCallback(
    (e: React.MouseEvent<HTMLElement>, hoveredStarIndex: number) => {
      if (!hoverable) return;
      const position = e.pageX - e.currentTarget.offsetLeft;
      const width = e.currentTarget.offsetWidth;
      const positionPercent = Math.round(position / (width / 100)) / 100;
      setState(parseFloat((hoveredStarIndex + positionPercent).toFixed(1)));
    },
    [hoverable, onRatingHover]
  );

  const onLeave = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!hoverable) return;
      setState(null);
    },
    [hoverable]
  );

  const stars = useMemo(
    () =>
      getFillPercentsFromRating(computedRating, total).map((percent, key) => (
        <div
          onMouseMove={(e) => onHover(e, key)}
          onMouseLeave={(e) => onLeave(e)}
          onClick={() => onRatingChange(computedRating)}
          style={{ display: "inline" }}
          key={key}
        >
          <Star fillPercent={percent} />
        </div>
      )),
    [computedRating, total, onHover, onLeave, onRatingChange]
  );

  return <div>{stars}</div>;
};
