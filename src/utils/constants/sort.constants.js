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
      { value: 'title', label: 'Title', icon: PencilIcon },
      { value: 'description', label: 'Description', icon: PencilAltIcon },
      { value: 'createdAt', label: 'Creation', icon: CalendarIcon },
      { value: 'modifiedAt', label: 'Modification', icon: ClockIcon },
    ],
    orderOptions: [
      { value: 'asc', label: 'Asc', icon: SortAscendingIcon },
      { value: 'desc', label: 'Desc', icon: SortDescendingIcon },
    ],
  },
  PRESETS: {
    iterOptions: [
      { value: 'title', label: 'Title', icon: PencilIcon },
      { value: 'description', label: 'Description', icon: PencilAltIcon },
    ],
    orderOptions: [
      { value: 'asc', label: 'Asc', icon: SortAscendingIcon },
      { value: 'desc', label: 'Desc', icon: SortDescendingIcon },
    ],
  },
};

export default sortConstants;
