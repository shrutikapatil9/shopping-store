class HttpService {
  async getProducts() {
    return [
      {
        _id: '1',
        title: 'Denim Jacket',
        price: 2199,
       imgUrl: '/images/benjamin-voros-TnNo84AJJ5A-unsplash.jpg',
        description: 'Stylish blue denim jacket perfect for casual wear.'
      },
      {
        _id: '2',
        title: 'Summer Dress',
        price: 1899,
        imgUrl: '/images/vanessa-serpas-U0m4t8tD8Sk-unsplash.jpg',
        description: 'Lightweight summer dress in floral print.'
      },
      {
        _id: '3',
        title: 'Leather Boots',
        price: 3499,
        imgUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=60',
        description: 'Durable leather boots suitable for all seasons.'
      }
    ];
  }
}
export default HttpService;

