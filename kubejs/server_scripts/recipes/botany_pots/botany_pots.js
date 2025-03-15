// priority: 100

events.listen('recipes', function (event) {	
	var colors = [
    'white',
    'light_gray',
    'gray',
    'black',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'light_blue',
    'cyan',
    'blue',
    'purple',
    'magenta',
    'pink',
    'brown'
  ]
  
  var pots = [
    'botanypots:botany_pot',
    'botanypots:white_botany_pot',
    'botanypots:orange_botany_pot',
    'botanypots:magenta_botany_pot',
    'botanypots:light_blue_botany_pot',
    'botanypots:yellow_botany_pot',
    'botanypots:lime_botany_pot',
    'botanypots:pink_botany_pot',
    'botanypots:gray_botany_pot',
    'botanypots:light_gray_botany_pot',
    'botanypots:cyan_botany_pot',
    'botanypots:purple_botany_pot',
    'botanypots:blue_botany_pot',
    'botanypots:brown_botany_pot',
    'botanypots:green_botany_pot',
    'botanypots:red_botany_pot',
    'botanypots:black_botany_pot'
  ]

	event.shaped('botanypots:hopper_botany_pot', [
      'MPM',
      ' H '
    ], {
      M: Item.of('naturesaura:effect_powder', {effect:"naturesaura:plant_boost"}),
      P: 'botanypots:botany_pot',
      H: 'botania:hopperhock_chibi'
      }),
	
	utils.listOf(colors).forEach(function (color) {
	event.shaped(item.of('botanypots:hopper_' + color + '_botany_pot'), [
      'MPM',
      ' H '
    ], {
      M: Item.of('naturesaura:effect_powder', {effect:"naturesaura:plant_boost"}),
      P: 'botanypots:' + color + '_botany_pot',
      H: 'botania:hopperhock_chibi'
    })
	
	
	event.shapeless(item.of('botanypots:' + color + '_botany_pot'), [pots, '#forge:dyes/' + color])
	event.shapeless(item.of('botanypots:hopper_' + color + '_botany_pot'), ['#botanypots:hopper_botany_pots', '#forge:dyes/' + color])
	})
});

onEvent('recipes', e => {
	
function makeSoil(input, name, categories, growthModifier) {
        e.recipes.botanypots.soil({
            input: {
                item: input
            },
            display: {
                block: input
            },
            categories: categories,
            growthModifier: growthModifier
        }).id('kubejs:botany_pots/soil/' + name)
    }

    makeSoil('kubejs:evershifting_soil', 'stellar_soil', ['dirt', 'farmland', 'magical'], 0.75)
	makeSoil('twilightforest:uberous_soil', 'tw_soil', ['dirt', 'farmland', 'magical'], 0.5)
})