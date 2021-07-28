
import { createAsparagus } from "./seeds/asparagus.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js"



const asparagusObject = createAsparagus()
console.log(asparagusObject)

const sunflowerObject = createSunflower()
console.log(sunflowerObject)

const wheatObject = createWheat()
console.log(wheatObject)

const potatoObject = createPotato()
console.log(potatoObject)

const soybeanObject = createSoybean()
console.log(soybeanObject)

const cornArray = createCorn()
console.log(cornArray)




export const plantSeeds = (plantingPlanArray) => {
    for (const array of plantingPlanArray) {
        for (const plant of array) {
            if (plant.type === "asparagus") {
                addPlant(createAsparagus())
            } else if (plant.type === "soybean") {
                addPlant(createSoybean() ) 
            } else if (plant.type === "sunflower") {
                addPlant(createSunflower() ) 
            } else if (plant.type === "wheat") {
                addPlant(createWheat() ) 
            } else if (plant.type === "potato") {
                addPlant(createPotato())  
            } else if  (plant.type === "corn") {
                addPlant(createCorn()) 
                }
                 
            }
            
        }
        
    }



        


// Create a scripts/tractor.js module.
// In this module, define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter).
// The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays.
// // Example growing plan. Actual plan is bigger.
// [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]
// As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
// Take that seed and add it to the array of plants in the field module.
// Checking Your Logic
// In the main.js module, invoke the function that plants all of the seeds, and then get the plants array from the fields.js module. Then use console.log() to see if the plants array has been populated correctly.