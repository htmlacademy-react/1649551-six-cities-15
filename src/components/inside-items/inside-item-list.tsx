import InsideItem from './inside-item';

type InsideItemListProps = {
  items: string[];
}

function InsideItemList({items}:InsideItemListProps): JSX.Element {
  return(
    <ul className="offer__inside-list">
      {items.map((item) => (
        <InsideItem
          key={item}
          insideItem={item}
        />
      ))}
    </ul>
  );
}

export default InsideItemList;
