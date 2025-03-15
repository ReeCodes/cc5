onEvent('chest.loot_tables', event => {
event.addChest('kubejs:loot_randomizer/anylogistics', table => {
table.addPool(pool => {
    pool.rolls = [1,2]
	Ingredient.of(['@integratedtunnels', 'inspirations:pipe', 'engineersdecor:straight_pipe_valve', 'engineersdecor:straight_pipe_valve_redstone', 'engineersdecor:straight_pipe_valve_redstone_analog', 'immersiveengineering:fluid_pipe', '/immersiveengineering:.+onveyor.+/', 'modularrouters:item_router', '/industrialforegoing:conveyo.+/', 'storagenetwork:kabel', 'storagenetwork:storage_kabel', 'storagenetwork:import_kabel', 'storagenetwork:import_filter_kabel', 'storagenetwork:filter_kabel', 'storagenetwork:export_kabel']).filter(Ingredient.of(['integratedtunnels:part_importer_world_energy', 'integratedtunnels:part_exporter_world_energy', 'integratedtunnels:part_importer_world_item', 'integratedtunnels:part_exporter_world_item', 'integratedtunnels:part_importer_world_fluid', 'integratedtunnels:part_exporter_world_fluid', 'integratedtunnels:part_importer_world_block', 'integratedtunnels:part_exporter_world_block', 'integratedtunnels:part_player_simulator']).not()).stacks.forEach(stack => {
            pool.addEntry({
              "type": "minecraft:item",
			  "functions": [
            {
              "function": "minecraft:set_count",
              "count": {
                "min": 4.0,
                "max": 10.0,
                "type": "minecraft:uniform"
              }
            }
          ],
              "name": stack.id
            })
		})
	Ingredient.of(['/modularrouters:.+modul.+/', 'supplementaries:faucet', 'quark:chute', 'pneumaticcraft:omnidirectional_hopper', 'minecraft:hopper', 'modularrouters:item_router']).filter(Ingredient.of(['/modularrouters:creative_module/']).not()).stacks.forEach(stack => {
            pool.addEntry({
              "type": "minecraft:item",
			  "functions": [
            {
              "function": "minecraft:set_count",
              "count": {
                "min": 1.0,
                "max": 3.0,
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