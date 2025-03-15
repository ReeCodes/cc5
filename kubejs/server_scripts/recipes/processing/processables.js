onEvent('recipes', event => {
	
let rolling = (input, result, id) => {
  event.recipes.createaddition.rolling({
    input: Ingredient.of(input).toJson(),
    result: Item.of(result).toResultJson()
  }).id('createaddition:rolling/'+id)
}

var ee_processed = [
	'iron', 
	'gold', 
	'diamond', 
	'emerald', 
	'lapis', 
	'copper', 
	'aluminum', 
	'silver', 
	'lead', 
	'nickel', 
	'uranium', 
	'tin', 
	'zinc', 
	'cobalt', 
	'iridium', 
	'sapphire', 
	'bronze', 
	'brass', 
	'constantan', 
	'electrum', 
	'steel', 
	'invar', 
	'signalum', 
	'lumium', 
	'enderium'
	];

//rods
ee_processed.forEach(m => {
	if (!['emerald', 'diamond', 'lapis', 'sapphire'].includes(m)) {
rolling('#forge:ingots/'+m, '2x #forge:rods/'+m, m+'_rod')
event.recipes.immersiveengineeringMetalPress('2x #forge:rods/'+m, '#forge:ingots/'+m, 'immersiveengineering:mold_rod').id('immersiveengineering:metalpress/rod_'+m)
	}
	if (['emerald', 'diamond', 'lapis', 'sapphire'].includes(m)) {
rolling('#forge:gems/'+m, '2x #forge:rods/'+m, m+'_rod')
event.recipes.immersiveengineeringMetalPress('2x #forge:rods/'+m, '#forge:gems/'+m, 'immersiveengineering:mold_rod').id('immersiveengineering:metalpress/rod_'+m)
	}
})

ee_processed.forEach(m => {
	//wires
	if (['lead', 'enderium'].includes(m)) {
		rolling('#forge:plates/'+m, '2x #forge:wires/'+m, m+'_plate')
	}
	if (['enderium'].includes(m)) {
		event.recipes.immersiveengineeringMetalPress('2x #forge:wires/'+m, '#forge:ingots/'+m, 'immersiveengineering:mold_wire').id('immersiveengineering:metalpress/wire_'+m)
	}
	//plates
	if (!['emerald', 'diamond', 'lapis', 'sapphire'].includes(m)) {
		event.recipes.createPressing(['#forge:plates/'+m], '#forge:ingots/'+m).id('create:pressing/'+m+'_plate')
		event.recipes.immersiveengineeringMetalPress('#forge:plates/'+m, '#forge:ingots/'+m, 'immersiveengineering:mold_plate').id('immersiveengineering:metalpress/plate_'+m)
	}
	if (['emerald', 'diamond', 'lapis', 'sapphire'].includes(m)) {
		event.recipes.createPressing(['#forge:plates/'+m], '#forge:gems/'+m).id('create:pressing/'+m+'_plate')
		event.recipes.immersiveengineeringMetalPress('#forge:plates/'+m, '#forge:gems/'+m, 'immersiveengineering:mold_plate').id('immersiveengineering:metalpress/plate_'+m)
	}
})

ee_processed.push('force', 'compressed_iron');

//gears
ee_processed.forEach(m => {
	
	if (!['emerald', 'diamond', 'lapis', 'sapphire'].includes(m)) {
event.recipes.immersiveengineeringMetalPress('#forge:gears/'+m, '4x #forge:ingots/'+m, 'immersiveengineering:mold_gear').id('immersiveengineering:metalpress/gear_'+m)
	}
	if (['emerald', 'diamond', 'lapis', 'sapphire'].includes(m)) {
event.recipes.immersiveengineeringMetalPress('#forge:gears/'+m, '4x #forge:gems/'+m, 'immersiveengineering:mold_gear').id('immersiveengineering:metalpress/gear_'+m)
	}
})

ee_processed.splice(-2)

})