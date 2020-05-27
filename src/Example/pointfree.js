import React from 'react';
import { both, either ,equals,gte,ifElse,__,always,inc,curry,filter,pipe,} from 'ramda';

const Pointfree = () => {
    // const forever21 = age => ifElse(gte(__, 21), always(21), inc)(age)
    // const forever21_ = ifElse(gte(__, 21), always(21), inc)

    //const alwaysDrivingAge = age => ifElse(lt(__, 16), always(16), identity)(age)
    //const alwaysDrivingAge = when(lt(__, 16), always(16))

    // const water = temperature => cond([
    //   [equals(0),   always('water freezes at 0°C')],
    //   [equals(100), always('water boils at 100°C')],
    //   [T,           temp => `nothing special happens at ${temp}°C`]
    // ])(temperature)
    // const water = cond([
    //     [equals(0),   always('water freezes at 0°C')],
    //     [equals(100), always('water boils at 100°C')],
    //     [T,           temp => `nothing special happens at ${temp}°C`]
    // ])

    const wasBornInCountry = (person) => equals(person.birthCountry, 'USA');
    const wasNaturalized = (person) => Boolean(person.naturalizationDate);
    const isOver18 = (person) => gte(person.age, 18);

    const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person)
    const isEligibleToVote = person => isOver18(person) && isCitizen(person)
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
