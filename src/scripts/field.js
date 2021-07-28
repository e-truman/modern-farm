const plants = []

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject) === true) {
        for (const seedObject of plants) {
            plants.push(seedObject)
        }} else {
            plants.push(seedObject)   
    }
   
}

export const usePlants = () => {
    
    return plants
}