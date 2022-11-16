import React from 'react';

function Button({buttonText, toBeDisabled}) {
    return (
        <button
            type="button"
            onClick={() => console.log(buttonText)}
            disabled={toBeDisabled}
        >
            {buttonText}
        </button>

    );
}

export default Button;