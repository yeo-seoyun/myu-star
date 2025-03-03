import { useState } from "react";

import LinkCard from "../components/LinkCard";

import '../styles/Home.css';
import { MdPets } from "react-icons/md";

function Home() {
    const [isPetRegistered, setIsPetRegistered] = useState(false);

    // const handleRegisterPet = () => {
    //     setIsPetRegistered(true);
    // };

    return (
        <div className="home-page">
            { !isPetRegistered ? (
                <div className="home-container">
                    <div className="pet-container">
                        
                    </div>

                    <div>
                        <LinkCard />
                    </div>
                </div>
            ) : (
                <div className="home-container">
                    <div className="pet-container">
                        <div className="not-registered">
                            <button type="button" className="add-pet">
                                <MdPets /> 
                                <sapn>반려동물 등록하고 추억을 남겨보세요.</sapn>
                            </button>
                        </div>
                    </div>

                    <div>
                        dd
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home;