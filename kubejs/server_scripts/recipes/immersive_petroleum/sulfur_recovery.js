onEvent('recipes', event => {
let hydrotreater = (inputFluid, secFluid, resultFluid, secResult, timeValue, energyValue, id) => {
  event.recipes.immersivepetroleum.hydrotreater({
	input: inputFluid,
	secondary_input: secFluid,
	result: resultFluid.toJson(),
	secondary_result: {
      item: secResult[0].item,
      chance: secResult[0].chance
    },
    time: timeValue,
	energy: energyValue
  }).id('immersivepetroleum:hydrotreater/' + id)
}

let fluid_tag = (fluidTag, fluidAmount) => (
    {
        tag: fluidTag,
        amount: fluidAmount
    }
);

	hydrotreater(
	fluid_tag('forge:diesel_sulfur', 7), 
	fluid_tag('minecraft:water', 7),
	Fluid.of('immersivepetroleum:diesel', 7), 
	[{item: 'emendatusenigmatica:sulfur_dust', chance: 0.02}], 1, 512, 'sulfur_recovery')
});