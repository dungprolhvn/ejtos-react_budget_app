import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }

    return (
        <div className='alert alert-info'>
            <label htmlFor="dropdown">Currency: </label>
            <select id="dropdown" className="form-select" onChange={handleCurrencyChange}>
                <option value="$" selected={currency === '$'}>
                    $ Dollar
                </option>
                <option value="£" selected={currency === '£'}>
                    £ Pound
                </option>
                <option value="€" selected={currency === '€'}>
                    € Euro
                </option>
                <option value="₹" selected={currency === '₹'}>
                    ₹ Ruppee
                </option>
            </select>
        </div>
    );
};
export default ChangeCurrency;