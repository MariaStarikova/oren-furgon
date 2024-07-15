import React from 'react';
import Information from '../Information/Information';
import Experience from '../Experience/Experience';
import Services from '../Services/Services';
import Brand from '../Brand/Brand';
import Map from '../Map/Map';

function Main() {
    return(
        <main>
            <Information />
            <Experience />
            <Services />
            <Brand />
            <Map />
        </main>
    )
}

export default Main