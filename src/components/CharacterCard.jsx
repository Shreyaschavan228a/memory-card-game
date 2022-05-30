const CharacterCard = (props) => {
    const {image, name, handleClick} = props;
    return (
        <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-black rounded-lg flex flex-col align-center w-max shadow-xl p-4 justify-center m-6 hover:from-orange-600 hover:via-orange-500 hover:to-orange-400 ease-in-out duration-1800" onClick={() => handleClick(name)}>
            <img src={image} alt={name} className="h-48 w-48 border-blue-900 mx-auto"></img>
            <p className="text-center text-xl m-2 m-b-0 w-48 h-8">{name}</p>
        </div>
    );
}

export default CharacterCard;