import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';
import localStorageService from './localStorage.service';
import firebaseService from './firebase.service';

const firebaseStorage = getStorage(firebaseService);

const uploadAvatar = async (file) => {
  const accountId = localStorageService.getAccountId();
  try {
    const fileRef = ref(firebaseStorage, `avatar-${accountId}`);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  } catch (error) {
    const { message } = error;
    toast.error(message);
  }
};

const storageService = {
  uploadAvatar,
};

export default storageService;
