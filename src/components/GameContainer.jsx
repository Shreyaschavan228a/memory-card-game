import CharacterCard from "./CharacterCard";
import luffy from "../assets/luffy.jpg";
import chopper from "../assets/chopper.jpg";
import zoro from "../assets/zoro.jpg";
import nami from "../assets/nami.jpg";
import usopp from "../assets/usopp.jpg";
import sanji from "../assets/sanji.jpg"
import robin from "../assets/robin.jpg";
import franky from "../assets/franky.jpg";
import brook from "../assets/brook.jpg";
import jinbei from "../assets/jinbei.jpg";
import ace from "../assets/ace.jpg";
import hancock from "../assets/hancock.jpg";
import mihawk from "../assets/mihawk.jpg";
import shanks from "../assets/shanks.jpg";
import garp from "../assets/garp.jpg";
import roger from "../assets/roger.jpg";
import { useState } from "react";


const GameContainer = () => {
    const [score, setScore] = useState(0);
    const [charList, setCharList] = useState(initialList);

    return (
        <div className="">
            <div className="h-full w-3/4 mx-auto m-0 grow grid grid-cols-4">
                {
                   charList?.map((elem, index)=> {
                       return <CharacterCard name={elem.name} clicked={elem.clicked} image={elem.image} key={index} />
                   }) 
                }
            </div>
        </div>
    );
};



const initialList = [
    {
        name: "Monkey D. Luffy",
        image: luffy,
        clicked: false,
    },
    {
        name: "Tony Tony Chopper",
        image: chopper,
        clicked: false,
    },
    {
        name: "Roronoa Zoro",
        image:zoro, 
        clicked: false,
    },
    {
        name: "Nami",
        image: nami,
        clicked: false,
    },
    {
        name: "Usopp",
        image: usopp,
        clicked: false,
    },
    {
        name: "Sanji",
        image: sanji,
        clicked: false,
    },
    {
        name: "Nico Robin",
        image: robin,
        clicked: false,
    },
    {
        name: "Franky",
        image: franky,
        clicked: false,
    },
    {
        name: "Brook",
        image: brook,
        clicked: false,
    },
    {
        name: "Jinbei",
        image: jinbei,
        clicked: false,
    },
    {
        name: "Ace",
        image: ace,
        clicked: false,
    },
    {
        name: "Boa Hancock",
        image: hancock,
        clicked: false,
    },
    {
        name: "Dracule Mihawk",
        image: mihawk,
        clicked: false,
    },
    {
        name: "Shanks",
        image: shanks,
        clicked: false,
    },
    {
        name: "Monkey D. Garp",
        image: garp,
        clicked: false,
    },
    {
        name: "Gol D. Roger",
        image: roger,
        clicked: false,
    },
];

export default GameContainer;
