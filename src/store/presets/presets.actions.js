import presetsSlice from 'store/presets/presets.slice';
import { presetsService } from 'services';
import { handleError } from 'store/errors/errors.actions';
import { errorConstants } from 'utils/constants';

const { requested, received, failed } = presetsSlice.actions;

const loadPresets = () => async (dispatch) => {
  dispatch(requested());
  try {
    const data = await presetsService.getPresets();
    dispatch(received(data));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError({ type: errorConstants.types.PRESETS, error }));
  }
};

export { loadPresets };
