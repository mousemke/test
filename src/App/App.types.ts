/**
 * The block object, as retrieved by the api
 */
export type Block = {
  createdAt: string;
  createdBy: string | null;
  description: string;
  displayId: string;
  displayName: string;
  id: string;
  isAccessGranted: boolean;
  isCreditPurchaseRequired: boolean;
  isPublic: boolean;
  isPublicVersion: boolean;
  isRestricted: boolean;
  isValid: boolean;
  manifestVersion: number;
  metadata: {
    blockPricingStrategy: {
      credits: number;
      direction: string;
      name: string;
      unit: string;
    };
    blockThumbnailUrl: string;
    pricingStrategy: {
      type: string;
      credits: number;
    };
  };
  name: string;
  provider: string;
  tags: string[];
  type: string;
  updatedAt: string;
  updatedBy: string | null;
  version: string;
};

/**
 * An array of blocks
 */
export type Blocks = Block[];

/**
 * The shopping cart. An object of blocks entered by id to preserve uniqueness
 */
export interface ItemsInCart {
  [id: string]: Block;
}
