import { useContext } from "react";
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";
import { MoneyContext } from "../Grandpa/Grandpa";

const Dad = ({asset}) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1500)}>+ 1500</button>
        </div>
    );
};

export default Dad;