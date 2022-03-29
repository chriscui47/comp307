import React, { useState } from 'react';
import { useEffect } from 'react';

import styles from './DashElement.module.css';


function DashElement(props) {
    return (
        <div>
        <h2>{props.title}</h2>
        <button>Select</button>
        </div>
    );
}

export default DashElement;