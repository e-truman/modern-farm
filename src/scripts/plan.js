





const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

export const createPlan = () => {
    const plan = []

    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }

    return plan
}










/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()




// In the plan.js module, there is a createPlan() function that is exported. In the main.js module, import that function and invoke it. Since that function returns a value, you need to store that value in a variable named yearlyPlan.

// Remember that to assign what a function returns as a value of a variable, the syntax is...

// const appropriatelyNamedVariable = theFunctionThatReturnsAValue()
// Then use console.log() to output the value of yearlyPlan to the developer console in Chrome.

