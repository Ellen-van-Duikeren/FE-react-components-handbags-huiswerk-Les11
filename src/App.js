import React from 'react';
import './App.css';
import Button from './components/Button';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import Product from './components/Product';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Tile from './components/Tile';


function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button
              buttonText="to the collection"
              toBeDisabled={false}
          />
          <Button
              buttonText="shop all bags"
              toBeDisabled={false}
          />
          <Button
              buttonText="pre-orders"
              toBeDisabled={true}
          />
        </nav>

        <main>
          <Product
              spanText="Best seller"
              imgName={bag1}
              name="The handy bag"
              price="400"
          />

          <Product
              spanText="Best seller"
              imgName={bag2}
              name="The stylish bag"
              price="250"
          />

          <Product
              spanText="New collection"
              imgName={bag3}
              name="The simple bag"
              price="300"
          />

          <Product
              spanText="New collection"
              imgName={bag4}
              name="The trendy bag"
              price="150"
          />
        </main>

        <footer>
          <Tile
              imgName={brand}
          />

          <Tile
              name="The brand"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae rerum
              totam unde.
              Ab, aliquid dolore eum exercitationem natus saepe."</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae rerum totam unde.
              Ab, aliquid dolore eum exercitationem natus saepe. </p>
          </Tile>

          <Tile
              name="Our story"
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis cum delectus dignissimos
              distinctio incidunt minus neque, reprehenderit voluptatem voluptatum. A animi aspernatur
              delectus doloremque ea eaque eius, expedita explicabo harum laborum nam quam repellendus
              sapiente temporibus unde voluptas voluptates.</p>
          </Tile>

          <Tile
              imgName={our_story}
          />


        </footer>


      </>
  );
}

export default App;



