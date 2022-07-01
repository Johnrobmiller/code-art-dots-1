export const X_MAX = 140;
const screenRes = window.innerHeight / window.innerWidth;
export const Y_MAX = Math.floor(X_MAX * screenRes);

export const PIXEL_POS_MULTIPLIER = window.innerWidth / X_MAX;
// max radius is 1
export const DOT_RADIUS_MULTIPLIER = window.innerHeight / Y_MAX / 2;

export const STARTING_TIME = 99999;

export const MAX_MOMENTUM = 0.1

export const ACCELERATION_RATE = 0.2
export const DEACCELERATION_RATE = ACCELERATION_RATE * 2