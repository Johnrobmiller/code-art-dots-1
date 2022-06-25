
export const X_MAX = 92;

// TODO: make this dynamic
const screenRes = window.innerHeight / window.innerWidth
export const Y_MAX = Math.floor(X_MAX * screenRes)

export const PIXEL_POS_MULTIPLIER = window.innerWidth / X_MAX
// max radius is 1
export const DOT_RADIUS_MULTIPLIER = window.innerHeight / Y_MAX


export const STARTING_TIME = 99999
export const TEMPO = 10000