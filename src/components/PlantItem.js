import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function handleClick(plantName) {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
}

function PlantItem({ name, cover, isBestSale, isSpecialOffer, light, water, price }) {
    return (
        <li className="lmj-plant-item" onClick={() => handleClick}>
            <span className="lmj-plant-item-price">{price}€</span>
            <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover" />
            {name}
            {isBestSale ? <span className="lmj-best">Best 🔥</span> : null}
            {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>
        </li>
    );
}

export default PlantItem;
