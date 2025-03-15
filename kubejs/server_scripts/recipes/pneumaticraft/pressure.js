onEvent('recipes', e => {
  function pressure(inputs, result, rCount, pressure) {
    e.recipes.pneumaticcraft.pressure_chamber({
      inputs: inputs,
      pressure: pressure,
      results: [{
        item: result,
        count: rCount
      }]
    }).id(`kubejs:pressure/${result.replace(':', '/')}`)
  }

  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'gobber2:gobber2_glob',
    'count': 4
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'wyrmroost:blue_geode',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:diamond',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'buddycards:buddysteel_ingot',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:ingots/cobalt',
    'count': 1
  }], 'gobber2:gobber2_ingot', 1, 2.0)
  e.remove({ id: 'gobber2:gobber2_ingot' })
  
  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'gobber2:gobber2_glob_nether',
    'count': 4
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'wyrmroost:red_geode',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'druidcraft:amber',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:ingots/netherite',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'gobber2:gobber2_ingot',
    'count': 1
  }], 'gobber2:gobber2_ingot_nether', 1, 4.0)
  e.remove({ id: 'gobber2:gobber2_ingot_nether' })
  
 pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'gobber2:gobber2_glob_end',
    'count': 4
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'wyrmroost:purple_geode',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'undergarden:forgotten_ingot',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'byg:pendorite_ingot',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'gobber2:gobber2_ingot_nether',
    'count': 1
  }], 'gobber2:gobber2_ingot_end', 1, 5.5)
  e.remove({ id: 'gobber2:gobber2_ingot_end' })
  
  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'createaddition:overcharged_alloy',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:ingots/refined_radiance',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:ingots/shadow_steel',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'envirocore:xerothium_crystal',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'immersiveengineering:dust_hop_graphite',
    'count': 8
  }], 'kubejs:uninspiring_rainbow_gem', 1, 5.0)
  
  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'forbidden_arcanus:stellarite_block',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'resourcefulbees:rgbee_honeycomb_block',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:nether_star',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'kubejs:rainbow_gem',
    'count': 9
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:bedrock',
    'count': 1
  }], 'kubejs:uninspiring_rainbow_block', 1, 5.5)
})