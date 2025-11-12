import { decryptData } from '../utils/encryption';

// 🔓 Selector لقراءة البيانات بعد فك التشفير
export const selectEncryptedDataUser = (state) => {
  const encrypted = state.datauser.datauser;
  return decryptData(encrypted);
};

// 📊 Selectors للبيانات المشفرة فقط (لا تظهر المحتوى الحقيقي)
export const selectEncryptedDataUser = (state) => state.datauser.datauser;
export const selectDataProfileNow = (state) => state.datauser.ProfileSnageNow;
// export const selectLoading = (state) => state.datauser.loading;
// export const selectError = (state) => state.datauser.error;

// 👤 Selector لبيانات محددة بعد فك التشفير
// export const selectUserName = (state) => {
//   const user = selectEncryptedDataUser(state);
//   return user?.name || 'Unknown';
// };

// export const selectUserEmail = (state) => {
//   const user = selectEncryptedDataUser(state);
//   return user?.email || 'No email';
// };