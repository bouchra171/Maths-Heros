import React, { useState } from "react";
import "../Style/Style.css";
import { useNavigate } from 'react-router-dom';

function ChoicePage() {
    const navigate = useNavigate();
    const [pseudonym, setPseudonym] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleClearStorage = () => {
        localStorage.removeItem('pseudonyms');
        setErrorMessage("Les pseudonymes précédents ont été supprimés. Veuillez entrer votre pseudonyme à nouveau.");
    };

    const handleGameChoice = (path) => {
        if (!pseudonym.trim()) {
            setErrorMessage("Veuillez renseigner un pseudonyme avant de commencer le jeu.");
            return;
        }

        const existingPseudonyms = JSON.parse(localStorage.getItem('pseudonyms') || '[]');

        if (existingPseudonyms.length >= 1000) {
            setErrorMessage("Nombre maximum de pseudonymes atteint. Veuillez essayer plus tard.");
            return;
        }

        if (existingPseudonyms.includes(pseudonym)) {
            setErrorMessage("Ce pseudonyme est déjà utilisé. Veuillez en choisir un autre.");
            return;
        }

        existingPseudonyms.push(pseudonym);
        localStorage.setItem('pseudonyms', JSON.stringify(existingPseudonyms));

        localStorage.setItem('currentPseudonym', pseudonym);
        navigate(path);
    };

    return (
        <div className="choice-container container mt-5 animated-entry">
            <h1 className="text-center mb-4">Choisissez un jeu</h1>
            {errorMessage === "Nombre maximum de pseudonymes atteint. Veuillez essayer plus tard." &&
                <button onClick={handleClearStorage} className="btn btn-warning">Effacer les anciens pseudonymes</button>
            }
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="mb-3">
                <label className="form-label" htmlFor="pseudonymInput">Entrez votre pseudonyme:</label>
                <input
                    id="pseudonymInput"
                    type="text"
                    className="form-control"
                    value={pseudonym}
                    maxLength={30} 
                    onChange={(e) => {
                        setErrorMessage(null);
                        setPseudonym(e.target.value);
                    }}
                    aria-label="Entrez votre pseudonyme"
                />
            </div>

          
            <div className="game-choice-buttons">
                <button
                    className="choice-button btn btn-primary mb-2"
                    onClick={() => handleGameChoice("/addition")}
                >
                     jeu Addition
                </button>
                <button
                    className="choice-button btn btn-secondary mb-2"
                    onClick={() => handleGameChoice("/soustraction")}
                >
                   jeu Subtraction
                </button>
                <button
                    className="choice-button btn btn-success mb-2"
                    onClick={() => handleGameChoice("/multiplication")}
                >
                   jeu Multiplication
                </button>

                <button
                    className="choice-button btn btn-success mb-2"
                    onClick={() => handleGameChoice("/division")}
                >
                  jeu  Division
                </button>
            </div>
        </div>
    );
}

export default ChoicePage;
