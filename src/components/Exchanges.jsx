import React, { useState } from 'react'

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';


const Exchanges = () => {
    const { data: cryptoExchanges, isFetching } = useGetExchangesQuery();
    console.log("Exchanges", cryptoExchanges);

    if (!cryptoExchanges?.data) return <Loader />;

    return (
        <div>
            Exchanges
            {cryptoExchanges.data.exchanges.map((val, index) => (
                <p>{val.name}</p>
            ))}
        </div>
    )
}

export default Exchanges
