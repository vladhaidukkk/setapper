import { CheckCircleIcon, ExclamationCircleIcon, ExclamationIcon, InformationCircleIcon } from '@heroicons/react/solid';

const notificationConstants = {
  ICONS: {
    success: CheckCircleIcon,
    error: ExclamationCircleIcon,
    info: InformationCircleIcon,
    warning: ExclamationIcon,
    default: false,
  },
  ICON_CLASSES: {
    success: 'text-emerald-600',
    error: 'text-rose-500',
    info: 'text-indigo-500',
    warning: 'text-amber-500',
    default: '',
  },
  PROGRESS_CLASSES: {
    success: 'from-emerald-500 to-emerald-600',
    error: 'from-rose-500 to-rose-600',
    info: 'from-indigo-500 to-indigo-600',
    warning: 'from-amber-500 to-amber-600',
    default: 'from-indigo-500 to-indigo-600',
  },
};

export default notificationConstants;
