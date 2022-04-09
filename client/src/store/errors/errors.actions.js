import errorsSlice from 'store/errors/errors.slice';
import { getErrorMessageHelper } from 'utils/helpers';

const { handled, cleared } = errorsSlice.actions;

const handleError =
  ({ type, error }) =>
  (dispatch) => {
    const errorMessage = getErrorMessageHelper(error);
    dispatch(handled({ type, error: errorMessage }));
  };

const clearErrors = () => (dispatch) => {
  dispatch(cleared());
};

export { handleError, clearErrors };
