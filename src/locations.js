import React, { Component } from 'react';

const LocationMenu = ({
    name,
    handleUpdate
}) => (
    <select>
        <option onClick={handleUpdate} value={name}>{name}</option>
    </select>

);

export default LocationMenu;