/**
 * Pauses execution for x milliseconds
 */
export const pause = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 10));
};
