onEvent('recipes', event => {

let energize = (inputs, result, energy, id) => {
  event.recipes.powah.energizing({
    ingredients: inputs.map(r => Ingredient.of(r).toJson()),
	energy: energy,
	result: Item.of(result).toResultJson()
  }).id('powah:energizing/' + id)
}

//CUSTOM
energize(['#forge:ingots/iridium', 'ftbic:advanced_alloy', 'powah:steel_energized', '#forge:dusts/diamond'], '2x ftbic:iridium_alloy', 1000000, 'iridium_alloy')
energize(['#forge:ingots/uranium'], '4x powah:uraninite', 5000, 'uraninite')
energize(['#forge:gems/coal_coke', 'kubejs:rainbow_gem', 'quark:rainbow_rune'], 'ironfurnaces:rainbow_coal', 120000, 'rainbow_coal')
energize(['xreliquary:molten_core', 'create:cinder_flour', '#forge:ingots/signalum'], '2x druidcraft:blazing_steel', 30000, 'blazing_steel')
energize(['#forge:ingots/draconium', 'nourished_end:voidsteel_ingot', 'minecraft:ender_eye'], 'draconicevolution:dislocator', 1000000, 'dislocator')
energize(['minecraft:diamond_block', 'refinedstorage:quartz_enriched_iron_block', 'refinedstorage:wireless_grid', 'refinedstorage:wireless_fluid_grid', 'refinedstorage:wireless_crafting_monitor'], 'universalgrid:wireless_universal_grid', 500000, 'wireless_universal_grid')

//MODIFIED
energize(['#forge:ingots/steel', '#forge:ingots/gold'], 'powah:steel_energized', 10000, 'energized_steel')
energize(['#blue_skies:gems/aquite', '#forge:gems/sapphire'], '2x powah:crystal_niotic', 300000, 'niotic_crystal')
energize(['#forge:gems/emerald', '#blue_skies:gems/diopside'], '2x powah:crystal_spirited', 1000000, 'spirited_crystal')
energize(['#forge:nether_stars', '#blue_skies:storage_blocks/ventium', '#forge:storage_blocks/redstone', 'powah:blazing_crystal_block'], '16x powah:crystal_nitro', 2000000, 'nitro_crystal')
energize(['druidcraft:blazing_steel', 'minecraft:magma_cream', 'botania:quartz_blaze'], '2x powah:crystal_blazing', 120000, 'blazing_crystal')

var removedItems = [
	'powah:steel_energized',
	'powah:crystal_blazing', 
	'powah:crystal_niotic',
	'powah:crystal_spirited',
	'powah:crystal_nitro',
	'ftbic:iridium_alloy', 
	'/draconicevolution:dislocator/',
	'universalgrid:wireless_universal_grid'
	];

removedItems.forEach(r => {
        event.remove({ output: r })
    })
})