import {useEffect,useState} from 'react'


function showPokemonComponent({index}){
    const [imageSrc,setImageSrc] = useState("");
    const pokeID = index;
    function confirm(){
        alert("confirmed"+pokeID)
    }

    useEffect(()=>{
        const pokeID = index;
        const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`;
        setImageSrc(src);
        console.log("pokeID:", pokeID, " imageSrc:", src);
    },[index]);
    return (
        <>
        <div className="storeComponent">
        <img src= {imageSrc} alt="Loading" className="storeComponent" />
        </div>
        <button onClick={confirm}>Confirm</button>
        </>
    )
}
export default showPokemonComponent;