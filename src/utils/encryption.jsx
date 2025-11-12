import CryptoJS from 'crypto-js';

// مفتاح التشفير - سيتم تخزينه في مكان آمن
const SECRET_KEY = 'my_super_secure_key_32_chars_long!';

// 🔐 تشفير البيانات قبل حفظها في الـ state
export const encryptData = (data) => {
  try {
    if (!data) return null;
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    return encrypted;
  } catch (error) {
    console.error('Encryption failed:', error);
    return null;
  }
};

// 🔓 فك التشفير عند قراءة البيانات من الـ state
export const decryptData = (encryptedData) => {
  try {
    if (!encryptedData) return null;
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted ? JSON.parse(decrypted) : null;
  } catch (error) {
    console.error('Decryption failed:', error);
    return null;
  }
};