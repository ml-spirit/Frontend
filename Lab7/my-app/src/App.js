import React, { useState } from 'react';
import './App.css';
import GoodsCard from './GoodsCard';

function Header() {
  const [changed4, setChanged4] = useState(false);
  const [changed5, setChanged5] = useState(false);

  return (
    <header>
      <h1>Лабораторна робота 4, Основи Front-End технологій</h1>
      <h2>Лозінська Марія В'ячеславівна</h2>
      <p>Дата народження: <b>28.02.2007</b>, Київ</p>

      <div
          id="element4"
          className={changed4 ? "changed" : ""}
          onClick={() => setChanged4(!changed4)}
      >
          Освіта: Ліцей №142, м.Київ;
      </div>

      <div
          id="element5"
          className={changed5 ? "changed" : ""}
          onClick={() => setChanged5(!changed5)}
      >
          НТУУ "КПІ", м. Київ
      </div>
    </header>
  )
}

function MainContent() {
  return (
    <div>
      <p>Хоббі:</p>
      <ul>
      <li>Малювання</li>
      <li>Комп'ютерні ігри</li>
      <li>Книжки</li>
      <li>Спорт</li>
      </ul>

      <p>Улюблені фільми:</p>
      <ol>
      <li>"Гаррі Поттер і келих вогню", 2005 рік</li>
      <li>"Школа добра і зла", 2022 рік</li>
      <li>Серіал "Бріджертони", 2020 рік</li>
      <li>"Шрек", 2001 рік</li>
      </ol>

      <p>Опис улюбленого міста:</p>
      <p>Варша́ва (пол. Warszawa), офіційно столичне місто Варшава (пол. miasto stołeczne Warszawa) — столиця Польщі з 1596, порт на річці Вісла, адміністративний центр Мазовецького воєводства. Місто є місцем розташування центральних органів влади Республіки Польща, іноземних місій, штаб-квартир значної кількості підприємств та громадських об'єднань, що працюють в Польщі.</p>
    </div>
  )
}


function Footer() {
    const [images, setImages] = useState([]);
    const [imageSize, setImageSize] = useState(300);

    function addImage() {
        setImages([...images, Date.now()]);
    }

    function increaseImage() {
        setImageSize(imageSize + 20);
    }

    function decreaseImage() {
        setImageSize(Math.max(20, imageSize - 20));
    }

    function deleteImage() {
        setImages(images.slice(0, -1));
    }

    return (
        <footer>
            <div id="imageContainer">
                {images.map((id) => (
                    <a
                        key={id}
                        href="https://uk.wikipedia.org/wiki/Варшава"
                    >
                        <img
                            src="/Warsaw.jpg"
                            alt="Фото"
                            style={{ width: imageSize + "px" }}
                        />
                    </a>
                ))}
            </div>

            <div className="buttons">
                <button onClick={addImage}>Додати</button>
                <button onClick={increaseImage}>Збільшити</button>
                <button onClick={decreaseImage}>Зменшити</button>
                <button onClick={deleteImage}>Видалити</button>
            </div>
        </footer>
    );
}

function GoodsGallery() {
    return (
        <div>
            <h2>Галерея товарів</h2>

            <table className="goods-gallery">
                <tr>
                  <td>
                    <GoodsCard
                        name="Мандарин"
                        price={25000}
                        image="/images/nemorange_.jpg"
                    />
                  </td>

                  <td>
                    <GoodsCard
                        name="Яблуко"
                        price={15000}
                        image="/images/apple.jpg"
                    />
                  </td>
                </tr>


                <tr>
                  <td>
                    <GoodsCard
                        name="Груша"
                        price={2500}
                        image="/images/grusha.jpg"
                    />
                  </td>

                  <td>
                    <GoodsCard
                        name="Лимон"
                        price={1800}
                        image="/images/Lemon.jpg"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <GoodsCard
                        name="Гранат"
                        price={900}
                        image="/images/Mongraned.jpg"
                    />
                  </td>

                  <td>
                    <GoodsCard
                        name="Цибуля"
                        price={8500}
                        image="/images/onion.jpg"
                    />
                  </td>
                </tr>
            </table>
        </div>
    );
}

function App() {
  return <div>
    <Header />
    <MainContent />
    <Footer />
    <GoodsGallery />
  </div>;
}

export default App;