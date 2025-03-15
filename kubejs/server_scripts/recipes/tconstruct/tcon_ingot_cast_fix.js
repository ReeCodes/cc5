onEvent('recipes', event => {
	
let tc_casting = (castingInput, cast_consumed, slot_switch, fluid_tag, amount, result, cooling_time, id) => {
  event.recipes.tconstruct.casting_table({
    cast: Ingredient.of(castingInput).toJson(),
    cast_consumed: cast_consumed,
	switch_slots: slot_switch,
    fluid: { tag: fluid_tag, amount: 144 * amount },
	result: result,
	cooling_time: cooling_time
  }).id('tconstruct:smeltery/casts/'+id+'_casts/ingots')
}

let tc_molding = (moldingInput, pattern, result, id) => {
  event.recipes.tconstruct.molding_table({
    material: Ingredient.of(moldingInput).toJson(),
    pattern: Ingredient.of(pattern).toJson(),
	result: result
  }).id('tconstruct:smeltery/casts/'+id+'_casts/ingots')
}

tc_casting('#forge:ingots', true, true, 'forge:molten_gold', 1, 'tconstruct:ingot_cast', 57, 'gold')

tc_molding('tconstruct:blank_red_sand_cast', '#forge:ingots', 'tconstruct:ingot_red_sand_cast', 'red_sand')
tc_molding('tconstruct:blank_sand_cast', '#forge:ingots', 'tconstruct:ingot_sand_cast', 'sand')

var removedItems = ['tconstruct:ingot_cast', 'tconstruct:ingot_sand_cast', 'tconstruct:ingot_red_sand_cast'];

removedItems.forEach(r => {
        event.remove({ output: r });
    })
});