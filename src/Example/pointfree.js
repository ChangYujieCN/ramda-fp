import React from 'react';
import { both, either } from 'ramda';

const Pointfree = () => {
    const wasBornInCountry = person => person.birthCountry === "USA"
    const wasNaturalized = person => Boolean(person.naturalizationDate)
    const isOver18 = person => person.age >= 18

    // const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person)
    // const isEligibleToVote = person => isOver18(person) && isCitizen(person)
    // --------------
    // const isCitizen = person => either(wasBornInCountry, wasNaturalized)(person)
    // const isEligibleToVote = person => both(isOver18, isCitizen)(person)
    // -------------
    // const isCitizen = either(wasBornInCountry, wasNaturalized)
    // const isEligibleToVote = both(isOver18, isCitizen)
    return (
        <div>

        </div>
    );
};

export default Pointfree;
