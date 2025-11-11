// src/utils/dateUtils.js
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ar } from 'date-fns/locale';

// دالة أساسية لعرض التاريخ النسبي
export const formatRelativeDate = (dateString) => {
  try {
    const date = parseISO(dateString);
    return formatDistanceToNow(date, { 
      addSuffix: true,
      locale: ar
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'تاريخ غير معروف';
  }
};

// دالة متقدمة مع خيارات متعددة
export const formatDate = (dateString, options = {}) => {
  const {
    type = 'relative', // relative, short, medium, long
    withTime = false
  } = options;

  try {
    const date = parseISO(dateString);

    if (type === 'relative') {
      return formatRelativeDate(dateString);
    }

    // للتنسيقات الأخرى نستخدم toLocaleDateString
    const formatOptions = {
      short: { day: '2-digit', month: '2-digit', year: 'numeric' },
      medium: { day: '2-digit', month: 'short', year: 'numeric' },
      long: { day: '2-digit', month: 'long', year: 'numeric' }
    };

    let formatted = date.toLocaleDateString('ar-EG', formatOptions[type]);
    
    if (withTime) {
      const time = date.toLocaleTimeString('ar-EG', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      formatted += ` - ${time}`;
    }

    return formatted;
  } catch (error) {
    return 'تاريخ غير معروف';
  }
};