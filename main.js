const meals = 
[{name:'meat',vegetarian:false},{name:'grass',vegetarian:true},{name:'plants',vegetarian:true}]

const vegMeals = meals.filter(({vegetarian}) =>{
    return vegetarian;
})

console.log(vegMeals);