import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Tomato',
      slug: 'Best-Tomato',
      category: 'veg',
      image: '/images/tomato.jpg',
      price: 20,
      quality: 'First quality',
      rating: 4.8,
      numReviews: 255,
      stockKgs: 50,
      description: 'A Famous Farmer',
    },
    {
      name: 'Brinjal',
      slug: 'Best-Brinjal',
      category: 'veg',
      image: '/images/brinjal.jpg',
      price: 60,
      quality: 'First quality',
      rating: 4.5,
      numReviews: 202,
      stockKgs: 10,
      description: 'A Famous Farmer',
    },
    {
      name: 'Onion',
      slug: 'Best-Onion',
      category: 'Dryveg',
      image: '/images/onion.jpg',
      price: 25,
      quality: 'First quality',
      rating: 4.6,
      numReviews: 300,
      stockKgs: 100,
      description: 'A Famous Farmer',
    },
    {
      name: 'corinder',
      slug: 'Best-corinder',
      category: 'greenveg',
      image: '/images/corinder.jpg',
      price: 5,
      quality: 'First quality',
      rating: 4.0,
      numReviews: 100,
      stockKgs: 5,
      description: 'A Famous Farmer',
    },
    {
      name: 'Tomato',
      slug: 'low-Tomato',
      category: 'veg',
      image: '/images/tomato.jpg',
      price: 10,
      quality: 'second quality',
      rating: 3.8,
      numReviews: 28,
      stockKgs: 10,
      description: 'A dummy Farmer',
    },
    {
      name: 'Beetroot',
      slug: 'Best-Beetroot',
      category: 'veg',
      image: '/images/beetroot.jpg',
      price: 40,
      quality: 'First quality',
      rating: 4.2,
      numReviews: 155,
      stockKgs: 10,
      description: 'A Farmer',
    },
  ],
};

export default data;
