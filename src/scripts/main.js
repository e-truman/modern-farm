import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"


const asparagusObject = createAsparagus()
// console.log(asparagusObject)

const sunflowerObject = createSunflower()
// console.log(sunflowerObject)

const wheatObject = createWheat()
// console.log(wheatObject)

const potatoObject = createPotato()
// console.log(potatoObject)

const soybeanObject = createSoybean()
// console.log(soybeanObject)

const cornArray = createCorn()
// console.log(cornArray)


// console.log(Array.isArray(cornArray))


addPlant(asparagusObject)
addPlant(sunflowerObject)
addPlant(wheatObject)
addPlant(potatoObject)
addPlant(soybeanObject)
addPlant(cornArray)

const plantArray = usePlants()

// console.log(plantArray)




console.log("Welcome to the main module")


const yearlyPlan = createPlan()

// console.log(yearlyPlan)



plantSeeds(yearlyPlan)

const plantsArray= usePlants() 
// console.log(plantsArray)