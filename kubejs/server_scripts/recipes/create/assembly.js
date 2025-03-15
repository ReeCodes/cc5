onEvent('recipes', event => {
	
var transItem = 'kubejs:uninspiring_rainbow_gem';

event.recipes.createSequencedAssembly([
  'kubejs:rainbow_gem',
], transItem, [
	event.recipes.createDeploying(transItem, [transItem, 'quark:rainbow_rune']).processingTime(50),
	event.recipes.createDeploying(transItem, [transItem, 'forbidden_arcanus:stellarite_piece']).processingTime(50),
	event.recipes.createDeploying(transItem, [transItem, 'enigmaticlegacy:astral_dust']).processingTime(50),
	event.recipes.createDeploying(transItem, [transItem, 'apotheosis:ancient_shard']).processingTime(50),
	event.recipes.createFilling(transItem, [transItem, Fluid.of('resourcefulbees:rainbow_honey', 250)]),
	event.recipes.createPressing(transItem, transItem)
]).transitionalItem(transItem).loops(8).id('create:sequenced_assembly/rainbow_gem')

var transItem = 'kubejs:rainbow_gem';

event.recipes.createSequencedAssembly([
  'ironfurnaces:rainbow_plating',
], transItem, [
	event.recipes.createDeploying(transItem, [transItem, '#forge:plates/constantan']).processingTime(50),
	event.recipes.createDeploying(transItem, [transItem, '#forge:plates/steel']).processingTime(50),
	event.recipes.createPressing(transItem, transItem)
]).transitionalItem(transItem).loops(5).id('create:sequenced_assembly/rainbow_plating')

//phantasmal_ingot

var transItem = 'mana-and-artifice:vinteum_ingot';

event.recipes.createSequencedAssembly([
  'iceandfire:ghost_ingot',
], transItem, [
	event.recipes.createDeploying(transItem, [transItem, 'iceandfire:ectoplasm']).processingTime(50),
	event.recipes.createDeploying(transItem, [transItem, 'iceandfire:ectoplasm']).processingTime(50),
	event.recipes.createPressing(transItem, transItem)
]).transitionalItem(transItem).loops(2).id('create:sequenced_assembly/ghost_ingot')

//galvanizing_process

var transItem = '#forge:plates/nickel';

event.recipes.createSequencedAssembly([
  'ftbic:industrial_grade_metal',
], transItem, [
	event.recipes.createFilling(transItem, [transItem, Fluid.of('tconstruct:molten_zinc', 144)]),
	event.recipes.createDeploying(transItem, [transItem, '#forge:dusts/coal_coke']).processingTime(50),
	event.recipes.createDeploying(transItem, [transItem, '#forge:plates/aluminum']).processingTime(50),
	event.recipes.createDeploying(transItem, [transItem, '#forge:dusts/iron']).processingTime(50),
]).transitionalItem(transItem).loops(1).id('create:sequenced_assembly/galvanizing_process')

//bhc_canisters

var transItem = 'bhc:canister';

event.recipes.createSequencedAssembly([
  'bhc:red_heart_canister',
], transItem, [
	event.recipes.createDeploying(transItem, [transItem, 'bhc:red_heart']),
	event.recipes.createDeploying(transItem, [transItem, '#forge:bones/wither']),
	event.recipes.createDeploying(transItem, [transItem, 'bhc:relic_apple']),
	event.recipes.createDeploying(transItem, [transItem, '#forge:gems/carminite']),
	event.recipes.createPressing(transItem, transItem)
]).transitionalItem(transItem).loops(1).id('create:sequenced_assembly/red_heart_canister')

event.remove({ output: 'bhc:red_heart_canister' })

var transItem = 'bhc:red_heart_canister'

event.recipes.createSequencedAssembly([
  'bhc:yellow_heart_canister',
], transItem, [
	event.recipes.createDeploying(transItem, [transItem, 'bhc:yellow_heart']),
	event.recipes.createDeploying(transItem, [transItem, 'minecraft:enchanted_golden_apple']),
	event.recipes.createDeploying(transItem, [transItem, '#forge:ingots/queens_slime']),
	event.recipes.createPressing(transItem, transItem)
]).transitionalItem(transItem).loops(1).id('create:sequenced_assembly/yellow_heart_canister')

event.remove({ output: 'bhc:yellow_heart_canister' })

var transItem = 'bhc:yellow_heart_canister';

event.recipes.createSequencedAssembly([
  'bhc:green_heart_canister',
], transItem, [
	event.recipes.createDeploying(transItem, [transItem, 'bhc:green_heart']),
	event.recipes.createDeploying(transItem, [transItem, 'forcecraft:bottled_wither']),
	event.recipes.createDeploying(transItem, [transItem, '#forge:ingots/terrasteel']),
	event.recipes.createPressing(transItem, transItem)
]).transitionalItem(transItem).loops(1).id('create:sequenced_assembly/green_heart_canister')

event.remove({ output: 'bhc:green_heart_canister' })

var transItem = 'bhc:green_heart_canister';

event.recipes.createSequencedAssembly([
  'bhc:blue_heart_canister',
], transItem, [
	event.recipes.createDeploying(transItem, [transItem, 'bhc:blue_heart']),
	event.recipes.createDeploying(transItem, [transItem, 'kubejs:rainbow_gem']),
	event.recipes.createDeploying(transItem, [transItem, 'gobber2:gobber2_ingot_end']),
	event.recipes.createPressing(transItem, transItem)
]).transitionalItem(transItem).loops(1).id('create:sequenced_assembly/blue_heart_canister')

event.remove({ output: 'bhc:blue_heart_canister' })

//FTB-IC circuits

var transItem = 'ftbic:industrial_grade_metal';

event.recipes.createSequencedAssembly([
  'ftbic:electronic_circuit',
], transItem, [
	event.recipes.createDeploying(transItem, [transItem, 'ftbic:lv_cable']),
	event.recipes.createDeploying(transItem, [transItem, '#forge:plates/tin']),
	event.recipes.createDeploying(transItem, [transItem, '#forge:plates/gold']),
	event.recipes.createDeploying(transItem, [transItem, '#forge:dusts/redstone'])
]).transitionalItem(transItem).loops(2).id('create:sequenced_assembly/electronic_circuit')

event.remove({ output: 'ftbic:electronic_circuit' })

var transItem = 'ftbic:electronic_circuit';

event.recipes.createSequencedAssembly([
  'ftbic:advanced_circuit',
], transItem, [
	event.recipes.createDeploying(transItem, [transItem, 'ftbic:mv_cable']),
	event.recipes.createDeploying(transItem, [transItem, 'ftbic:advanced_alloy']),
	event.recipes.createDeploying(transItem, [transItem, 'powah:steel_energized']),
	event.recipes.createDeploying(transItem, [transItem, '#forge:dusts/redstone'])
]).transitionalItem(transItem).loops(2).id('create:sequenced_assembly/advanced_circuit')

event.remove({ output: 'ftbic:advanced_circuit' })

var transItem = 'ftbic:advanced_circuit';

event.recipes.createSequencedAssembly([
  'ftbic:iridium_circuit',
], transItem, [
	event.recipes.createDeploying(transItem, [transItem, 'ftbic:hv_cable']),
	event.recipes.createDeploying(transItem, [transItem, 'ftbic:graphene']),
	event.recipes.createDeploying(transItem, [transItem, 'ftbic:iridium_alloy']),
	event.recipes.createDeploying(transItem, [transItem, '#forge:dusts/redstone'])
]).transitionalItem(transItem).loops(2).id('create:sequenced_assembly/iridium_circuit')

event.remove({ output: 'ftbic:iridium_circuit' })

})