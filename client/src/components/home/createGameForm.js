import React from 'react';

const CreateGameForm = ({ handleInputChange, namePlayerOne, namePlayerTwo, handleSubmit, renderError }) => (
    <div className="container">
        <h3>Enter player's names to start</h3>

        <div className="form-input">
            <label>Player 1 *</label>
            <input type="text" name="namePlayerOne" value={namePlayerOne} 
                onChange={e => handleInputChange(e)}/>
        </div>
        <div className="form-input">
            <label>Player 2 *</label>
            <input type="text" name="namePlayerTwo" value={namePlayerTwo} 
                onChange={e => handleInputChange(e)}/>
        </div>
        {renderError()}
        <div className="form-input">
            <button onClick={() => handleSubmit()}>
                Start
            </button>
        </div>
    </div>
);

export default CreateGameForm;
