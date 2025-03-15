onEvent('recipes', event => {
	
let dissolute = (inputs, fluid, fluidAmount, p_time, result, id) => {
  event.recipes.industrialforegoing.dissolution_chamber({
    input: inputs.map(r => Item.of(r).toJson()),
	inputFluid: JSON.stringify({ FluidName: fluid, Amount: fluidAmount }),
	processingTime: p_time,
    output: Ingredient.of(result).toResultJson()
  }).id('industrialforegoing:dissolute/'+id)
}

dissolute([
'#forge:ingots/enderium', '#forge:gems/ametrine', '#forge:ingots/enderium', 
'#forge:gems/ametrine', '#forge:gems/ametrine', 
'#forge:ingots/enderium', '#forge:gears/bronze', '#forge:ingots/enderium'], 
'materialis:molten_pink_slime', 144*4, 800, '1x kubejs:pearlescent_core', 'core/pearlescent')

dissolute([
'ftbic:advanced_alloy', 'powah:steel_energized', 'ftbic:advanced_alloy', 
'powah:steel_energized', 'powah:steel_energized', 
'ftbic:advanced_alloy', '#forge:gears/iridium', 'ftbic:advanced_alloy'], 
'industrialforegoing:ether_gas', 500, 800, '1x kubejs:effervescent_core', 'core/effervescent')

dissolute([
'#forge:ingots/steel', '#forge:ingots/electrum', '#forge:ingots/steel', 
'#forge:ingots/electrum', '#forge:ingots/electrum', 
'#forge:ingots/steel', '#forge:gears/force', '#forge:ingots/steel'], 
'industrialforegoing:essence', 500, 800, '1x kubejs:exquisite_core', 'core/exquisite')

dissolute([
'#forge:ingots/uranium', 'tconstruct:ender_slime_crystal', '#forge:ingots/uranium', 
'tconstruct:ender_slime_crystal', 'tconstruct:ender_slime_crystal', 
'#forge:ingots/uranium', '#forge:gears/emerald', '#forge:ingots/uranium'], 
'tconstruct:molten_queens_slime', 144*4, 800, '1x kubejs:viridescent_core', 'core/viridescent')

dissolute([
'#forge:ingots/compressed_iron', '#forge:ingots/zinc', '#forge:ingots/compressed_iron', 
'#forge:ingots/zinc', '#forge:ingots/zinc', 
'#forge:ingots/compressed_iron', '#forge:gears/nickel', '#forge:ingots/compressed_iron'], 
'industrialforegoing:latex', 500, 800, '1x kubejs:obsolescent_core', 'core/obsolescent')

dissolute([
'malum:hallowed_gold_ingot', '#forge:ingots/elementium', 'malum:hallowed_gold_ingot', 
'woot:si_plate', 'woot:si_plate', 
'malum:hallowed_gold_ingot', '#forge:gears/signalum', 'malum:hallowed_gold_ingot'], 
'integrateddynamics:liquid_chorus', 500, 800, '1x kubejs:deliquescent_core', 'core/deliquescent')

dissolute([
'#forge:ingots/lumium', 'kubejs:rainbow_gem', '#forge:ingots/lumium', 
'kubejs:rainbow_gem', 'kubejs:rainbow_gem', 
'#forge:ingots/lumium', '#forge:gears/lumium', '#forge:ingots/lumium'], 
'materialis:molten_draconium_awakened', 144*4, 800, '1x kubejs:luminescent_core', 'core/luminescent')

});