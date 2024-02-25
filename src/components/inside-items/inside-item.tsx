function InsideItem({insideItem}: {insideItem: string}): JSX.Element {
  return(
    <li className="offer__inside-item">
      {insideItem}
    </li>
  );
}

export default InsideItem;
