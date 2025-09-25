export const USER_PREFERENCES = {
  name: "Alex",
  likes: ["Pizza", "Burger"],
  loyaltyPoints: 125,
  isHonorStudent: true
};

export const REWARDS = [
  { id: 1, title: "Free Drink", pointsRequired: 50 },
  { id: 2, title: "Discount Voucher", pointsRequired: 100 }
];

export const FOOD_ITEMS = [
  { id: 1, name: "Veggie Pizza", category: "Pizza", price: 8.99, image: "/images/pizza.jpg", isTrending: true, sustainabilityScore: 4.5, carbonFootprint: 2.3 },
  { id: 2, name: "Cheese Burger", category: "Burger", price: 5.99, image: "/images/burger.jpg", isTrending: false, sustainabilityScore: 3.8, carbonFootprint: 3.0 },
  // Add more items here
];
