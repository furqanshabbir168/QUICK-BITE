import React from "react";
import './ExploreMenu.css'
import Menu from "../../assets/Menu";

function ExploreMenu ({category , setCategory}) {
    return(
        <div className="menu" id="menu">
            <h1>Explore our menu</h1>
            <p>Explore our diverse menu filled with mouthwatering burgers, crispy fries, cheesy pizzas, refreshing drinks, and much more—crafted to satisfy every craving!</p>
            <div className="menu-list">
            {Menu.map((menu)=>{
                return <div key={menu.id}>
                    <div>
                        <img onClick={()=>{setCategory(menu.name)}} className={category===menu.category?"active":""} src={menu.image} alt="" />
                    </div>
                    <div>
                        <h3>{menu.name}</h3>
                    </div>
                </div>
            })}
            </div>
            <hr />
        </div>
    );
}
export default ExploreMenu