const CharacterCard = (props) => {
    const {image, name, handleClick} = props;
    return (
        <div className="bg-orange-300 text-black rounded-sm flex flex-col align-center w-max p-4 justify-center m-6" onClick={() => handleClick(name)}>
            <img src={image} alt={name} className="h-48 w-48 border-blue-900 mx-auto"></img>
            <p className="text-center text-xl m-2 m-b-0 w-48 h-8">{name}</p>
        </div>
    );
}

export default CharacterCard;