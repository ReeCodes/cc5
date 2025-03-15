/*const colorCode = Array(16777215).fill(1).map((x, y) => x + y);*/ //don't do this!

onEvent('chest.loot_tables', event => {
event.addChest('kubejs:loot_randomizer/anyfairylight', table => {
	
var colorCode = [
3289650, 
3949738, 
8606770, 
1481884, 
6316128, 
6192150, 
3847130, 
10329495, 
8439583, 
13061821, 
16351261, 
15961002, 
8991416, 
11546150, 
16383998, 
16701501
]

table.addPool(pool => {
    pool.rolls = 1
	colorCode.forEach(color => {
	const c = `{color:${color}}`
	Ingredient.of(['@fairylights']).filter(Ingredient.of(['fairylights:garland', '/fairylights:letter_bunting/', '/fairylights:pennant_bunting/', 'fairylights:oil_lantern', 'fairylights:candle_lantern', 'fairylights:incandescent_light']).not()).stacks.forEach(lights => {
pool.addEntry({
          "type": "minecraft:item",
          "name": lights.id,
          "functions": [
            {
              "function": "minecraft:set_count",
              "count": {
                "min": 1,
                "max": 4
              }
            },
            {
              "function": "minecraft:set_nbt",
              "tag": c
            }
			]
			})
		})
	})
	})
})
})