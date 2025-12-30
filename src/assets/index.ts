// Export SVG asset paths for use in the package
// These paths are relative to the dist/assets directory when the package is built
export const drivingLicense = './assets/driving-license.svg';
export const idCard = './assets/id-card.svg';
export const idCardBack = './assets/idcardback.svg';
export const internationalPassport = './assets/internation-passport.svg';

// Export all assets as an object for convenience
export const assets = {
  drivingLicense,
  idCard,
  idCardBack,
  internationalPassport,
} as const;

