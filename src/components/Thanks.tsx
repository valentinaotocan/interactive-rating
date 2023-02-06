import thankYouImage from '../assets/images/illustration-thank-you.svg';
type ThanksProps = {
  isRating: number;
};
function Thanks({ isRating }: ThanksProps) {
  return (
    <div className="thanks">
      <div className="thanks__image">
        <img src={thankYouImage} alt="Thank You Image" />
      </div>
      <p className="thanks__text-selected">You selected out {isRating} of 5</p>
      <h2 className="heading">Thank you!</h2>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
export default Thanks;