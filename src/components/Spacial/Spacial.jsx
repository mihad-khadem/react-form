import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Spacial = ({asset}) => {
    const grandGift = useContext(AssetContext)
    return (
        <div>
            <h2>Spacial</h2>
            <p> has: {asset}</p>
            <p>Also Have: {grandGift}</p>
        </div>
    );
};

export default Spacial;