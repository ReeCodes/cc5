onEvent('recipes', event => {


let tc_casting_basin = (castingInput, cast_consumed, fluid_name, amount, result, cooling_time, id) => {
  event.recipes.tconstruct.casting_basin({
    cast: {	type: 'mantle:intersection', ingredients: [ Ingredient.of(castingInput).toJson() ] },
    cast_consumed: cast_consumed,
    fluid: { name: fluid_name, amount: amount },
	result: result,
	cooling_time: cooling_time
  }).id('tconstruct:smeltery/casting/basin/'+id)
}

tc_casting_basin('kubejs:exquisite_core', true, 'tconstruct:molten_quartz', 144 * 16, 'refinedstorage:machine_casing', 200, 'casing/refined_casing')

tc_casting_basin('kubejs:obsolescent_core', true, 'tconstruct:molten_steel', 144 * 8, 'rftoolsbase:machine_frame', 200, 'casing/rf_base_frame')

tc_casting_basin('kubejs:effervescent_core', true, 'tconstruct:molten_nickel', 144 * 8, 'ftbic:machine_block', 200, 'casing/ic_machine_block')

tc_casting_basin('kubejs:deliquescent_core', true, 'tconstruct:molten_obsidian', 4000, 'woot:machine_casing', 200, 'casing/woot_machine_casing')

var removedItems = ['refinedstorage:machine_casing', 'rftoolsbase:machine_frame', 'ftbic:machine_block'];

removedItems.forEach(r => {
        event.remove({ output: r });
    })
});

