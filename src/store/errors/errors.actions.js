import errorsSlice from 'store/errors/errors.slice';
import { getErrorMessage } from 'utils/helpers';

const { handled, cleared } = errorsSlice.actions;

const handleError =
  ({ key, error }) =>
  (dispatch) => {
    const errorMessage = getErrorMessage(error);
    dispatch(handled({ key, error: errorMessage }));
  };

const clearErrors = () => (dispatch) => {
  dispatch(cleared());
};

export { handleError, clearErrors };
