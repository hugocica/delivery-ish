export interface IProduct {
  id: string;
  title: string;
  rgb: boolean;
  images: {
    url: string;
  }[];
  productVariants: {
    availableDate: string;
    productVariantId?: string;
    price: number;
    inventoryItemId: string;
    shortDescription?: string | null;
    title: string;
    published: any;
    volume?: string;
    volumeUnit?: any;
    description?: any;
    subtitle?: string;
    components: [];
  }[];
}
