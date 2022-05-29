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

    const handleClick = (name) => {
        const index = charList.findIndex(elem => elem.name === name);
        const oldList = structuredClone(charList);
        if(!charList[index].clicked){
            oldList[index].clicked = true;
            shuffle(oldList);
            setCharList(oldList);
            setScore(score+1); 
        }
        else {
            setScore(0);
            shuffle(initialList);
            setCharList(initialList);
        }
    }

    //Durstenfeld shuffle
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    return (
        <div className="">
            <div className="h-full w-3/4 mx-auto m-0 grow grid grid-cols-4">
                <div className="bg-blue-900 absolute top-32 right-0 w-36 h-16 text-white text-xl px-1">
                    <p>Score: {score}</p>

                </div>
                {
                   charList?.map((elem, index)=> {
                       return <CharacterCard name={elem.name} image={elem.image} key={index} handleClick={handleClick} />
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
