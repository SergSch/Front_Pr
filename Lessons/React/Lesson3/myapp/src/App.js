import './App.css';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  return (
    <div>
      <ProductCard
        title={'Iphone X'}
        image={
          'https://www.einfo.co.nz/media/catalog/product/cache/a38d1c83e0d63148b81a03ec284a15b5/i/2/i256s_4.jpg'
        }
        brand={'Apple'}
        price={1000}
        description={'smartphone'}
      />
      <ProductCard
        title={'Asus'}
        image={
          'https://tec.by/images/stories/virtuemart/product/asus-rog-strix-g15-g513qe-3.jpg'
        }
        brand={'Asus'}
        price={3000}
        description={'Laptope'}
      />
      <ProductCard
        title={'Samsung'}
        image={
          'https://img.global.news.samsung.com/global/wp-content/uploads/2018/09/galaxy-a7_main_1.jpg'
        }
        brand={'Samsung'}
        price={2000}
        description={'smartphone'}
      />
    </div>
  );
}

export default App;
