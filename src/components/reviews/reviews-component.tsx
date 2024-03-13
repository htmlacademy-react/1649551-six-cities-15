import ReviewsListComponent from './reviews-list-component';
import ReviewsFormComponent from './reviews-form-component';

type ReviewsComponentProps = {
  isAuth: boolean;
}

function ReviewsComponent({isAuth}: ReviewsComponentProps): JSX.Element {

  return(
    <section>
      <ReviewsListComponent />
      {isAuth && <ReviewsFormComponent />}
    </section>
  );
}

export default ReviewsComponent;
