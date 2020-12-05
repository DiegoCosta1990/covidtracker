import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, Typography } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

function CountryPicker({ handleCountryChange }) {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

         fetchAPI();
    }, [setFetchedCountries]);

    return (
        <div>
            <FormControl className={styles.formControl}>
                <Typography variant="h6" align="justify" className={styles.typography}>Select a Country:</Typography>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;
