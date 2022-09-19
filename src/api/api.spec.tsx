import { getBlocks } from "./api";

window.fetch = jest.fn();

const block1 = {
  metadata: {
    blockPricingStrategy: {
      name: "simple"
    }
  }
};
const block2 = {
  metadata: {
    blockPricingStrategy: {
      name: "complex"
    }
  }
};
const block3 = {
  metadata: {
    blockPricingStrategy: {
      name: "simple"
    }
  }
};

const exampleBlocks = [block1, block2, block3];

describe("getBlocks", () => {
  it("should get the blocks, filter out non simple pricing and set them", async () => {
    const setBlocksSpy = jest.fn();
    const setErrorSpy = jest.fn();

    (window.fetch as jest.Mock).mockImplementationOnce(async () => ({
      json: async () => ({ data: exampleBlocks })
    }));

    await getBlocks(setBlocksSpy, setErrorSpy);

    expect((window.fetch as jest.Mock).mock.calls[0][0]).toBe(
      "http://localhost/blocks"
    );

    expect(setBlocksSpy).toHaveBeenCalledTimes(1);
    expect(setBlocksSpy).toHaveBeenCalledWith([block1, block3]);

    (window.fetch as jest.Mock).mockReset();
  });

  it("should fire an error if returned by the server", async () => {
    const setBlocksSpy = jest.fn();
    const setErrorSpy = jest.fn();

    (window.fetch as jest.Mock).mockImplementationOnce(async () => ({
      json: async () => ({ data: exampleBlocks, error: "bad" })
    }));

    await getBlocks(setBlocksSpy, setErrorSpy);

    expect(setBlocksSpy).toHaveBeenCalledTimes(0);
    expect(setErrorSpy).toHaveBeenCalledTimes(1);
    expect(setErrorSpy).toHaveBeenCalledWith("bad");

    (window.fetch as jest.Mock).mockReset();
  });

  it("should fire an error if something in parsing goes wrong", async () => {
    const setBlocksSpy = jest.fn();
    const setErrorSpy = jest.fn();

    (window.fetch as jest.Mock).mockImplementationOnce(async () => ({
      json: async () => exampleBlocks
    }));

    await getBlocks(setBlocksSpy, setErrorSpy);

    expect(setBlocksSpy).toHaveBeenCalledTimes(0);
    expect(setErrorSpy).toHaveBeenCalledTimes(1);
    expect(setErrorSpy).toHaveBeenCalledWith(
      "Cannot read properties of undefined (reading 'filter')"
    );

    (window.fetch as jest.Mock).mockReset();
  });
});
