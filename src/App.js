import { Fragment } from "react";
import hi from "./App.module.css";
function App() {
  return (
    <Fragment>
      <h5 className={hi.menu}>
        <span className={hi.border}>THE MENU</span>
      </h5>

      <div className={hi.box}>Food Items</div>

      <div className={hi.mainbox}>
        <div>
          <h5 className={hi.h5}>Bread Basket</h5>
          <p className={hi.p}>
            Assortment of fresh baked fruit breads and muffins 5.50
          </p>
          <br></br>

          <h5 className={hi.h5}>Honey Almond Granola with Fruits</h5>
          <p className={hi.p}>
            Natural cereal of honey toasted oats, raisins, almonds and dates
            7.00
          </p>
          <br></br>

          <h5 className={hi.h5}>Belgian Waffle</h5>
          <p className={hi.p}>Vanilla flavored batter with malted flour 7.50</p>
          <br></br>

          <h5 className={hi.h5}>Scrambled eggs</h5>
          <p className={hi.p}>
            Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50
          </p>
          <br></br>

          <h5 className={hi.h5}>Blueberry Pancakes</h5>
          <p className={hi.p}>With syrup, butter and lots of berries 8.50</p>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
