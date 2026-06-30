const NETWORK_DELAY = 1200;

export const delay = (ms: number = NETWORK_DELAY) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const simulateNetworkError = (chance = 0) => {
  if (Math.random() < chance) {
    throw new Error('Something went wrong. Please try again.');
  }
};