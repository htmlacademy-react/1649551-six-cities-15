function CurrentOfferImagesItem({image}: {image:string}): JSX.Element {
  return(
    <div className="offer__image-wrapper">
      <img className="offer__image" src={image} alt="Photo studio" />
    </div>
  );
}

export default CurrentOfferImagesItem;
