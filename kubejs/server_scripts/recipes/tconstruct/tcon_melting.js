onEvent('recipes', event => {

let tc_melting = (meltingInput, resultFluid, temp, time, id) => {
  event.recipes.tconstruct.melting({
    ingredient: Ingredient.of(meltingInput).toJson(),
	result: resultFluid.toJson(),
    temperature: temp,
	time: time
  }).id('tconstruct:smeltery/melting/'+id)
}

tc_melting('#forge:ingots/force', Fluid.of('forcecraft:fluid_force_source', 144), 600, 107, 'ingots/force')
tc_melting('#forge:nuggets/force', Fluid.of('forcecraft:fluid_force_source', 144), 600, 107, 'nuggets/force')
})