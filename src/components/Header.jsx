import image from '../assets/logo.png';

const Header = () => {
    return (
        <div className="flex items-center justify-center border-b-2 bg-blue-500 border-blue-900 h-32 flex-col gap-1">
            <img alt="one-piece-logo" src={image} className="w-36 my-0 h-auto"></img> 
            <h1 className="text-2xl font-bold border-blue-900 text-blue-900 m-t-0">Memory Game</h1>
        </div>
    );
}

export default Header;