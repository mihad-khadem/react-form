import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";
import Spacial from "../Spacial/Spacial";

const Cousin = ({name}) => {
    const grandGift = useContext(AssetContext)
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            {name === 'Anik' && <Spacial></Spacial>}
        </div>
    );
};

export default Cousin;