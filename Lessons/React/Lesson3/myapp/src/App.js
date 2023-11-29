import './App.css';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  const data = [
    {
      id: 1,
      title: 'Iphone X',
      image:
        'https://www.einfo.co.nz/media/catalog/product/cache/a38d1c83e0d63148b81a03ec284a15b5/i/2/i256s_4.jpg',
      brand: 'Apple',
      price: 1000,
      description: 'smartphone',
    },
    {
      id: 2,
      title: 'Game NoteBook',
      image:
        'https://tec.by/images/stories/virtuemart/product/asus-rog-strix-g15-g513qe-3.jpg',
      brand: 'Asus',
      price: 3000,
      description: 'notebook',
    },
    {
      id: 3,
      title: 'Galaxy S33',
      image:
        'https://img.global.news.samsung.com/global/wp-content/uploads/2018/09/galaxy-a7_main_1.jpg',
      brand: 'Samsung',
      price: 1300,
      description: 'smartphone',
    },
  ];

  return (
    <div>
      {data.map((elem) => (
        <ProductCard
          key={elem.id}
          title={elem.title}
          image={elem.image}
          brand={elem.brand}
          price={elem.price}
          description={elem.description}
        />
      ))}
    </div>
  );
}

export default App;
