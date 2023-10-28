export const loopFromZero = (n, callback) => Array.from({ length: n }, (_, index) => callback(index));
export const loopFromOne = (n, callback) => Array.from({ length: n }, (_, index) => callback(index + 1));





