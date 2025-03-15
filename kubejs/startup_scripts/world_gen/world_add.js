onEvent('worldgen.add', event => {

  event.addOre(ore => {
    ore.block = 'kubejs:fossilized_remains'
    ore.spawnsIn.blacklist = false
    ore.spawnsIn.values = [ 
      '#minecraft:base_stone_overworld'
    ]
    
    ore.biomes.blacklist = true
    ore.biomes.values = [
      '#nether'
    ]
    
    ore.clusterMinSize = 1
    ore.clusterMaxSize = 3
    ore.clusterCount = 9
    ore.minHeight = 0
    ore.maxHeight = 32
    ore.squared = true
  })
})