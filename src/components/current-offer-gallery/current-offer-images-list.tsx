import CurrentOfferImagesItem from './current-offer-images-item';

type CurrentOfferImagesListProps = {
  images: string[];
}

function CurrentOfferImagesList({images}: CurrentOfferImagesListProps): JSX.Element {
  return(
    <div className="offer__gallery">
      {images.map((image) => (
        <CurrentOfferImagesItem
          key={image}
          image={image}
        />
      ))}
    </div>
  );
}

export default CurrentOfferImagesList;
