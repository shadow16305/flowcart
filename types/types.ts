interface Products {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category?: string;
}

interface SingleProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  rating: number;
  category: string;
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

interface CreateUserParams {
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
}

interface UpdateUserParams {
  firstName: string;
  lastName: string;
  photo: string;
}

interface Reviews {
  _id: string;
  firstName: string;
  lastName: string;
  text: string;
  clerkId: string;
  productId: string;
  createdAt: Date;
  photo: string;
}
