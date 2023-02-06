import iconStar from "../assets/images/icon-star.svg";
// import divHandler from "../components/Card";

type RatingProps = {
  isRating: number | null;
  onRate: (rating: number) => void;
  isSubmitted: boolean;
  onSubmit: (submitted: boolean) => void;
};

export default function Rating({ isRating, onRate, isSubmitted, onSubmit }: RatingProps) {
  // const divHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   onRate(Number(e.currentTarget.textContent))
  //   // setIsRating(Number(e.currentTarget.textContent));
  // };
  return (
    <div className="rating">
      <div className="rating__image-star circle-star">
        <img src={iconStar} alt="Icon Star" />
      </div>
      <h2 className="heading">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating__grade">
        {[1, 2, 3, 4, 5].map((rate) => {
          const clickHandler = () => onRate(rate);
          return (
            <div
              key={rate}
              className={`circle ${isRating === rate ? "active" : ""}`}
              onClick={clickHandler}
            >
              {rate}
            </div>
          );
        })}
      </div>
      <button
        disabled={isRating === null}
        className="rating__btn"
        onClick={() => onSubmit(!isSubmitted)}
      >
        Submit
      </button>
    </div>
  );
}
