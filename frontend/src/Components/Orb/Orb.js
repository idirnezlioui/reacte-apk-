// components/Orb/Orb.js
import React from 'react';
import { OrbStyled, getMoveOrb } from '../../styles/orbStyle';
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {
    const { width, height } = useWindowSize();
    const moveOrb = getMoveOrb(width, height);

    return <OrbStyled animation={moveOrb} />;
}

export default Orb;
