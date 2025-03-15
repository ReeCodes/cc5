onEvent('chest.loot_tables', event => {
event.addChest('kubejs:loot_randomizer/anyengineer', table => {
table.addPool(pool => {
    pool.rolls = 2
	Ingredient.of(['/immersiveengineering:sheetmetal.+/', '/immersiveengineering:.+sheetmetal.+/', '/immersiveengineering:chute_.+/', '/immersiveengineering:.+cret.+/', '/immersivepetroleum:asphal.+/', 'immersiveengineering:cushion']).filter(Ingredient.of(['immersiveengineering:concrete_sheet', 'immersiveengineering:concrete_bucket', '/engineersdecor:sign_.+/']).not()).stacks.forEach(stack => {
            pool.addEntry({
              "type": "minecraft:item",
			  "functions": [
            {
              "function": "minecraft:set_count",
              "count": {
                "min": 12.0,
                "max": 18.0,
                "type": "minecraft:uniform"
              }
            }
          ],
              "name": stack.id
            })
		})
	})
table.addPool(pool => {
    pool.rolls = 1
	Ingredient.of(['immersiveengineering:insulating_glass', '/immersiveengineering:.+_post/', '/immersiveengineering:.+_wallmount/', '/immersiveengineering:metal_ladder_.+/', '/immersiveengineering:.+scaffol.+/', 'immersiveengineering:balloon', 'immersiveengineering:strip_curtain', 'immersiveengineering:lantern', '/immersiveengineering:.+onveyor.+/', 'immersiveposts:postbase','/immersiveposts:fence_.+/']).stacks.forEach(stack => {
            pool.addEntry({
              "type": "minecraft:item",
			  "functions": [
            {
              "function": "minecraft:set_count",
              "count": {
                "min": 3.0,
                "max": 6.0,
                "type": "minecraft:uniform"
              }
            }
          ],
              "name": stack.id
            })
		})
	})
table.addPool(pool => {
    pool.rolls = [0,1]
	Ingredient.of(['immersiveengineering:electric_lantern', 'immersiveengineering:furnace_heater', 'immersiveengineering:fluid_sorter', 'immersiveengineering:item_batcher', 'immersiveengineering:sorter', 'immersiveengineering:logic_unit', 'immersiveengineering:light_engineering', 'immersiveengineering:heavy_engineering', 'immersiveengineering:rs_engineering', 'engineersdecor:small_freezer', 'engineersdecor:small_waste_incinerator', 'engineersdecor:small_tree_cutter', 'engineersdecor:small_block_breaker', 'engineersdecor:factory_placer', 'engineersdecor:factory_dropper', 'engineersdecor:factory_hopper', 'engineersdecor:labeled_crate', 'immersiveengineering:floodlight', 'engineersdecor:small_fluid_funnel', 'engineersdecor:fluid_barrel', 'engineersdecor:small_milking_machine']).stacks.forEach(stack => {
            pool.addEntry({
              "type": "minecraft:item",
			  "functions": [
            {
              "function": "minecraft:set_count",
              "count": {
                "min": 0.0,
                "max": 1.0,
                "type": "minecraft:uniform"
              }
            }
          ],
              "name": stack.id
            })
		})
	})
})
})