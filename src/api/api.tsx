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
  const response = await fetch(`${window.location.href}blocks`).catch((err) =>
    setError(err)
  );

  if (response) {
    try {
      const res = await response.json();

      if (res.error) {
        setError(res.error);
      } else {
        const blocks = (res.data as Blocks).filter(
          (b) => b.metadata.blockPricingStrategy.name === "simple"
        );
        setBlocks(blocks);
      }
    } catch (e: any) {
      setError(e.message as string);
    }
  }
};

export default { getBlocks };
