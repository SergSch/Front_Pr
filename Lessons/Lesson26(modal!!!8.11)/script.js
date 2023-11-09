const root = document.querySelector('#root');
const div_product_wrapper = document.createElement('div');
div_product_wrapper.classList.add('product_wrapper');
root.append(div_product_wrapper);

async function getProducts() {
  let url = 'https://dummyjson.com/products';
  let res = await fetch(url);
  let data = await res.json();
  render(data.products);
}

function render(data) {
  for (let elem of data) {
    // Создание элементов
    const productCard = document.createElement('div');
    const product_img = document.createElement('div');
    const title = document.createElement('p');
    const price = document.createElement('p');

    // Заполнение элементов
    productCard.classList.add('product_card');
    product_img.classList.add('product_img');

    product_img.style.backgroundImage = `url(${elem.images[0]})`;
    title.innerText = `Title: ${elem.title}`;
    price.innerText = `Price: ${elem.price}`;

    // Вставка элементов
    div_product_wrapper.append(productCard);
    productCard.append(product_img, title, price);

    // Интеграция событий внутри элементов
    productCard.addEventListener('click', () => {
      modal(elem);
    });
  }
}

function modal(data) {
  // Modal area
  const div_modal_area = document.createElement('div');
  div_modal_area.classList.add('modal_area');
  // Modal container
  const div_modal = document.createElement('div');
  div_modal.classList.add('modal');

  //   Заполнение окна
  const div_img_slider = document.createElement('div');
  const div_modal_content = document.createElement('div');
  const div_modal_content_info = document.createElement('div');
  const div_modal_main_img = document.createElement('div');

  div_modal.append(div_img_slider, div_modal_content);
  div_modal_content.append(div_modal_main_img, div_modal_content_info);

  div_img_slider.classList.add('modal_content_slider');
  div_modal_content.classList.add('modal_content');
  div_modal_content_info.classList.add('content_info');
  div_modal_main_img.classList.add('main_img');

  div_modal_main_img.style.backgroundImage = `url(${data.images[0]})`;

  for (let img of data.images) {
    const img_elem = document.createElement('img');
    img_elem.src = img;
    div_img_slider.append(img_elem);

    img_elem.addEventListener('click', () => {
      div_modal_main_img.style.backgroundImage = `url(${img})`;
    });
  }

  // -------------------

  const p_title = document.createElement('p');
  const p_descr = document.createElement('p');
  const p_price = document.createElement('p');
  const p_brand = document.createElement('p');

  p_title.innerText = `Title: ${data.title}`;
  p_descr.innerText = `Description: ${data.description}`;
  p_price.innerText = `Price: ${data.price}`;
  p_brand.innerText = `Brand: ${data.brand}`;

  div_modal_content_info.append(p_title, p_brand, p_descr, p_price);

  div_modal_area.append(div_modal);
  root.append(div_modal_area);

  div_modal.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  div_modal_area.addEventListener('click', () => {
    div_modal_area.remove();
  });
}

getProducts();
