import usersSlice from './users.slice';
import { handleError } from '../errors/errors.actions';
import { errorConstants } from '../../utils/constants';
import { usersService } from '../../services';

const { received, requested, failed } = usersSlice.actions;

const loadUsers = () => async (dispatch) => {
  dispatch(requested());
  try {
    const data = await usersService.getUsers();
    dispatch(received(data));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.USERS, error }));
  }
};

export { loadUsers };
