import Thanks from "./Thanks";
import Rating from "./Rating";
import { useState } from "react";

function Card() {
  const [isRating, setIsRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="card">
      {isRating !== null && isSubmitted ? (
        <Thanks isRating={isRating} />
      ) : (
        <Rating
          isRating={isRating}
          onRate={(rating) => setIsRating(rating)}
          isSubmitted={isSubmitted}
          onSubmit={setIsSubmitted}
        />
      )}
    </div>
  );
}
export default Card;
