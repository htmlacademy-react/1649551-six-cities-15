import { insideItems } from '../../consts/consts';
import InsideItem from './inside-item';

function InsideItemList(): JSX.Element {
  return(
    <ul className="offer__inside-list">
      {insideItems.map((item) => (
        <InsideItem
          key={item}
          insideItem={item}
        />
      ))}
    </ul>
  );
}

export default InsideItemList;
