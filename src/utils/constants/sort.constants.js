import {
  CalendarIcon,
  ClockIcon,
  PencilAltIcon,
  PencilIcon,
  SortAscendingIcon,
  SortDescendingIcon,
} from '@heroicons/react/solid';

const sortConstants = {
  SETUPS: {
    iterOptions: [
      { value: 'title', label: 'Title', Icon: PencilIcon },
      { value: 'description', label: 'Description', Icon: PencilAltIcon },
      { value: 'createdAt', label: 'Creation', Icon: CalendarIcon },
      { value: 'modifiedAt', label: 'Modification', Icon: ClockIcon },
    ],
    orderOptions: [
      { value: 'asc', label: 'Asc', Icon: SortAscendingIcon },
      { value: 'desc', label: 'Desc', Icon: SortDescendingIcon },
    ],
  },
  PRESETS: {
    iterOptions: [
      { value: 'title', label: 'Title', Icon: PencilIcon },
      { value: 'description', label: 'Description', Icon: PencilAltIcon },
    ],
    orderOptions: [
      { value: 'asc', label: 'Asc', Icon: SortAscendingIcon },
      { value: 'desc', label: 'Desc', Icon: SortDescendingIcon },
    ],
  },
};

export default sortConstants;
