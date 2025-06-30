import React from 'react';
import '../App.css';
import 'reactjs-popup/dist/index.css';



const Menu = () => {

    const [allchecked, setAllChecked] = React.useState([]);
    function handleChange(e) {
        if (e.target.checked) {
            setAllChecked([...allchecked, e.target.value]);
        } else {
            setAllChecked(allchecked.filter((item) => item !== e.target.value));
        }
    }

    return(
            <body>
            <div className='list'>
                <div className="popItem">
                    <h3 className="pop">Popular Items</h3>
                    <p className="topt">The most commonly order items and dishes from this store.</p>
                    <div>
                        <input value="sr" type="checkbox" onChange={handleChange} />
                        <span>65. Spring Roll $4.50</span>
                        <p class="desc">(shrimp or park)</p>
                    </div>
                    <div>
                        <input value="sbp" type="checkbox" onChange={handleChange} />
                        <span>77. Special Beff Pho $10.50</span>
                        <p class="desc">(Sliced beef, meatballs, tendon, tripe, and brisket.)</p>
                    </div>
                    <div>
                        <input value="b/m" type="checkbox" onChange={handleChange} />
                        <span>79. Beef & meatball $9.50</span>
                    </div>
                    <div>
                        <input value="itt" type="checkbox" onChange={handleChange} />
                        <span>52. Iced Thai Tea $4.95</span>
                    </div>
                    <div>
                        <input value="vp" type="checkbox" onChange={handleChange} />
                        <span>82. Veggie Pho $8.95</span>
                    </div>
                    <div>
                        <input value="cp" type="checkbox" onChange={handleChange} />
                        <span>81. Chicken Pho $9.50</span>
                        <p className="desc">(Shedded chicken with chicken broth.)</p>
                    </div>
                    <div>
                        <input value="er" type="checkbox" onChange={handleChange} />
                        <span>70. Egg Rolls $3.50</span>
                        <p className="desc">(Deep fried with clear noodles, veggies, with side of chill sauce.)</p>
                    </div>
                    <div>
                        <input value="chickfr" type="checkbox" onChange={handleChange} />
                        <span>94. Chicken fried rice $9.95</span>
                        <p className="desc">(add sunny side-up egg for an additional extra charge.)</p>
                    </div>
                    <div>
                        <input value="comfr" type="checkbox" onChange={handleChange} />
                        <span>95. Combination fried rice $10.95</span>
                        <p className="desc">(Add sunny side-up egg for an additional extra charge.)</p>
                    </div>
                    <div>
                        <input value="ttni" type="checkbox" onChange={handleChange} />
                        <span>20. Thai tea $4.50</span>
                        <p className="desc">(No Iced)</p>
                    </div>
                <h3 className="pop">Menu</h3>
                <div className="sandwiches">
                    <h4 className="itemName">Vietnamese Sandwiches</h4>
                    <p className="topt">Toasted Vietnamese sub with cucmber, pickled carrots, daikon, </p>
                    <div>
                        <input value="vs" type="checkbox" onChange={handleChange} />
                        <span>71. Vietnamese special $6.50</span>
                        <p className="desc">(Assorted cold cut meats with homemade pate spread.)</p>
                    </div>
                    <div>
                        <input value="gb" type="checkbox" onChange={handleChange} />
                        <span>72. Grilled Beef $6.50</span>
                        <p className="desc">(Add sunny side-up egg for an additional extra charge.)</p>
                    </div>
                    <div>
                        <input value="gp" type="checkbox" onChange={handleChange} />
                        <span>73. Grilled Pork $6.50</span>
                        <p className="desc">(Add sunny side-up egg for an additional extra charge)</p>
                    </div>
                    <div>
                        <input value="gc" type="checkbox" onChange={handleChange} />
                        <span>74. Grilled Chicken $5.50</span>
                        <p className="desc">(Add sunny side-up egg for an additional extra charge.)</p>
                    </div>
                    <div>
                        <input value="tf" type="checkbox" onChange={handleChange} />
                        <span>75. Tofu $5.50</span>
                        <p className="desc">(Add sunny side-up egg for an additional extra charge.)</p>
                    </div>
                    <div>
                        <input value="es" type="checkbox" onChange={handleChange} />
                        <span>76. Egg Sandwiches $4.50</span>
                        <p className="desc">(add sunny side-up egg for an additional extra charge.)</p>
                    </div>
                </div>
                <div className="pho">
                    <h4 className="itemName">Pho</h4>
                    <p className="desc">Seasoned broth served with rice noodles topped with fresh cilantro, scallions and sliced onions,</p>
                    <p className="desc">additions on the side include: fresh bean, sprouts, lime, jalapenos, and basil.</p>
                    <div>
                        <input value="sbp" type="checkbox" onChange={handleChange} />
                        <span>77. Special Beef Pho $10.50</span>
                        <p className="desc">Sliced beef, meatballs, tendon, tripe, and brisket</p>
                    </div>
                    <div>
                        <input value="bp" type="checkbox" onChange={handleChange} />
                        <span>78. Beef Pho $9.00</span>
                        <p className="desc">Sliced beef</p>
                    </div>
                    <div>
                        <input value="bmb" type="checkbox" onChange={handleChange} />
                        <span>79. Beef & Meatball $9.50</span>
                        <p className="desc">Slice beef and meatball</p>
                    </div>
                    <div>
                        <input value="mb" type="checkbox" onChange={handleChange} />
                        <span>80. Meatball $8.95</span>
                    </div>
                    <div>
                        <input value="cp" type="checkbox" onChange={handleChange} />
                        <span>81. Chaicken Pho $9.50</span>
                        <p className="desc">Shedded chicken with chicken broth.</p>
                    </div>
                    <div>
                        <input value="vp" type="checkbox" onChange={handleChange} />
                        <span>82. Veggie Pho $8.95</span>
                        <p className="desc">Steamed carrots, steamed broccoli and tofu.</p>
                    </div>
                </div>
                <div className="sr">
                    <h4 className="itemName">Fresh Summer Rolls</h4>
                    <p className="desc">Rice paper wrapped with lettuce, rice noodle, fresh, cucumber</p>
                    <p className="desc">and house peanut sauce. Two rolls per order.</p>
                </div>
            </div>
          </div>
         </body>
    )
}

export default Menu;