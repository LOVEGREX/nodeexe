import React from 'react';

interface PlayerProps {
    src : string;
}

const Player: React.FC<PlayerProps> = ( { src } ) => {
    return(
        <div className = 'Player'>
            <body data-name={ src }>
                you are watching now
            </body>
        </div>
    );
};

export default Player;