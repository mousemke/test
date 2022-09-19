import type { Blocks } from "../App";

/**
 *
 * @param setBlocks
 * @param setError
 */
export const getBlocks = async (
  setBlocks: React.Dispatch<React.SetStateAction<Blocks>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  try {
    const response = await fetch(`${window.location.href}blocks`);

    const res = await response?.json();

    if (res.error) {
      setError(res.error);
    } else {
      const blocks = (res.data as Blocks).filter(
        (b) => b.metadata.blockPricingStrategy.name === "simple"
      );
      setBlocks(blocks);
    }
    // JS errors actually can be anything but ts does not like it to be any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    setError(e.message as string);
  }
};

export default { getBlocks };
