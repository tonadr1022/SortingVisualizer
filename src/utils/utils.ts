interface PauseParams {
  numColumns: number;
  speedMultiplier: number;
}
/**
 * pauses execution for x milliseconds
 */
export const pause = async ({
  numColumns,
  speedMultiplier,
}: PauseParams): Promise<void> => {
  const waitTime = 500 / numColumns / speedMultiplier;
  console.log(waitTime);

  await new Promise((resolve) => setTimeout(resolve, waitTime));
};
