// Email validation using a simple regex pattern
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation for German format
export const isValidPhone = (phone: string): boolean => {
  // Allows formats like: +49123456789, 0123456789, +49 123 456789
  const phoneRegex = /^(\+49|0)[0-9\s]{7,14}$/;
  return phoneRegex.test(phone);
};