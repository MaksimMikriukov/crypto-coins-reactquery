import React from 'react';

const Coins = ({data}) => {
    return (
        <div>
            {data.map((obj) => (
                <div className="coin">
                    <div className="label">
                        <img
                            className="imgcoin"
                            width={50}
                            height={50}
                            src={obj.icon}
                        />
                        <h3>{obj.name}</h3>
                    </div>
                    <div className="price">
                        <h3>{obj.price}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Coins;