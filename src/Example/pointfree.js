import React from 'react';
import { both, either } from 'ramda';
// pointfree  就是如何进行函数式编程的答案 函数定义不包含关于其参数的信息
// 它使程序变得更简单、更简洁，这并不总是一件好事，但它确实可以做到。
// 它使算法更加清晰。 通过只关注被组合的函数，我们可以更好地了解正在发生的事情，而不会受到数据参数的干扰。
// 它迫使我们更多地思考正在进行的转换，而不是正在转换的数据。
// 它帮助我们把我们的功能看作是可以处理不同类型数据的通用构建块，而不是把它们看作是对特定类型数据的操作。 通过给数据起一个名字，我们可以锁定我们关于在哪里可以使用我们的函数的想法。 通过省略数据的争论，我们可以更有创造力。
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
