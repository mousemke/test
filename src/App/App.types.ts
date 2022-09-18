/**
 *
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
      credits: number
    };
  }
  name: string;
  provider: string;
  tags: string[];
  type: string;
  updatedAt: string;
  updatedBy: string | null;
  version: string;
};

/**
 *
 */
export type Blocks = Block[];

export interface ItemsInCart {
  [id: string]: Block
};
