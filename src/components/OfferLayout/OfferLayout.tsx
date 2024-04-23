import Offer from "./Offer/Offer";
import styles from "./OfferLayout.module.css";

interface OffersProps {
  offers: any;
}

const OfferLayout = (offers: OffersProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {offers.offers.map((offer: any) => (
        <Offer key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

export default OfferLayout;
