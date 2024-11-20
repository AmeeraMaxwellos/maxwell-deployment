export interface Order {
    orderNumber: string;
    datePlaced: string;
    totalAmount: number;
    items: OrderItem[];
  }

  export interface OrderItem {
    status: string;
    name: string;
    price: number;
    originalPrice: number;
    discountPercent: number;
    imageUrl: string;
    deliveryDate: string;
    quantity: number;
  }