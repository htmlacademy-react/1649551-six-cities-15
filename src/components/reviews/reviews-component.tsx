import { AuthorizationStatus } from '../../consts/consts';
import ReviewsListComponent from './reviews-list-component';
import ReviewsFormComponent from './reviews-form-component';

type ReviewsComponentProps = {
  authorizationStatus: AuthorizationStatus;
}

function ReviewsComponent({authorizationStatus}: ReviewsComponentProps): JSX.Element {

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  return(
    <section>
      <ReviewsListComponent />
      {isAuth && <ReviewsFormComponent />}
    </section>
  );
}

export default ReviewsComponent;
