onEvent('block.loot_tables', event => {
	event.addBlock('kubejs:lootblock_builder', table => {
		//FUNCTIONAL BLOCKS	
		table.addPool(pool => {
			pool.rolls = 2
			Ingredient.of(['@adchimneys', '@additional_lights', '@mcwdoors', '@mcwtrpdoors', 'minecraft:painting', '@mcwlights', '@mcwfurnitures', 'fairylights:garland', 'fairylights:letter_bunting', 'fairylights:pennant_bunting', 'fairylights:oil_lantern', 'fairylights:candle_lantern', 'fairylights:incandescent_light', 'supplementaries:doormat', 'supplementaries:candle_holder', 'supplementaries:crimson_lantern', 'supplementaries:brass_lantern', 'supplementaries:copper_lantern', 'supplementaries:candelabra_silver', 'supplementaries:candelabra', 'supplementaries:gold_gate', 'supplementaries:iron_gate', 'supplementaries:spring_launcher', 'supplementaries:speaker_block', 'supplementaries:turn_table', 'supplementaries:redstone_illuminator', 'supplementaries:bellows', 'supplementaries:clock_block', 'supplementaries:pulley_block', 'supplementaries:pedestal', 'supplementaries:planter', 'supplementaries:sign_post_polished', 'supplementaries:hanging_sign_polished', 'supplementaries:item_shelf', 'supplementaries:statue', 'supplementaries:flower_box', 'supplementaries:blackboard', 'supplementaries:notice_board']).filter(Ingredient.of(['/additional_lights:soul_wand/', '/mcwdoors:print_.+/']).not()).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"weight": 75,
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 2.0,
							"max": 4.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/anyfairylight",
				"weight": 25
			})
			console.info(`Builder's Order - Generated Blocks(Small Decorations): ` + pool.entries.size())
		})
		//MAIN BLOCKS
		table.addPool(pool => {
			pool.rolls = 4
			Ingredient.of([
				'@chisel', '@masonry', '@ceramics', '@crumbs', '@decorative_blocks', '@addendum', '@chipped', '@cookielicious', '@enviromats', '/eidolon:smooth_stone.+/', '/eidolon:polished_planks.+/', 'eidolon:polished_wood_pillar', 'cyclic:mason_cobble', 'cyclic:mason_stone', 'cyclic:mason_steel', 'cyclic:mason_iron', 'cyclic:mason_plate', '/extcaves:bricks_ice.+/', '/extcaves:bricks_snow.+/', '/extcaves:.+lavastone.+/', '/mysticalworld:.+mud.+/', '/mysticalworld:.+mushroom.+/', '/mysticalworld:.+thatch.+/', '/mysticalworld:.+stone.+/', '/mysticalworld:.+iron.+/', '/mysticalworld:.+terracotta.+/', '/create:.+window.+/', '/create:.+(diorite|granite|andesite|limes|dolomite|gabbro|scoria).+/', '/engineersdecor:.+dense.+/', '/engineersdecor:.+brick.+/', '/byg:.+dacite.+/', '/byg:.+mossy.+/', '/byg:.+red_rock.+/', '/byg:.+rocky.+/', '/byg:.+scoria.+/', '/byg:.+soap.+/', '/byg:.+sand.+/', '/byg:.+thatch.+/', '/quark:.+(iron_plate|granite|diorite|andesite|jasper|slate|turf|thatch|shingles|sandy|snow|sandstone|quilted|magma|blackstone|cobblestone|dirt|basalt|sturdy_stone|midori).+/', '/dustrial_decor:.+(padded|industrial_iron|sheet_metal|cinder|cardboard|neon|black).+/', 'dustrial_decor:chain_link_fence', 'dustrial_decor:barbed_chain_link_fence', 'dustrial_decor:barbed_iron_bars', '/create_confectionery:.+bricks.+/', '/supplementaries:(dau|timber|stone_til).+/', 'valhelsia_structures:metal_framed_glass_pane', 'valhelsia_structures:metal_framed_glass', 'valhelsia_structures:paper_wall', '/chineseworkshop:(black_brick|white_ash|rammed_earth|andesite).+/', 'chineseworkshop:red_stained_wooden_planks', 'chineseworkshop:red_pillar', 'chineseworkshop:dark_green_pillar', 'chineseworkshop:black_clay_block', 'chineseworkshop:yellow_clay_block'
			]).filter(Ingredient.of([
				'ceramics:unfired_clay_plate', 'ceramics:clay_plate', '/ceramics:cracked_clay_bucket/', 'ceramics:unfired_clay_bucket', '/ceramics:clay_bucket/', '/ceramics:clay_helmet/', '/ceramics:clay_chestplate/', '/ceramics:clay_leggings/', '/ceramics:clay_boots/', 'ceramics:terracotta_gauge', '/ceramics:.+_gauge/', '/ceramics:.+cistern/', '/extcaves:.+stalagmite.+/', '/extcaves:.+stalactite.+/', 'extcaves:lavastone', '/extcaves:.+pebble.+/', '/extcaves:.+rockpile.+/', 'mysticalworld:stonepetal', 'mysticalworld:iron_dust', 'create:andesite_encased_shaft', 'create:andesite_casing', 'create:andesite_funnel', 'create:andesite_tunnel', 'create:andesite_alloy', 'byg:dacite', 'byg:podzol_dacite', 'byg:overgrown_dacite', 'byg:red_rock', 'byg:rocky_stone', 'byg:scoria_stone', 'byg:soapstone', 'byg:black_sand', 'byg:white_sand', 'byg:blue_sand', 'byg:purple_sand', 'byg:pink_sand', 'byg:nylium_soul_sand', 'byg:quartzite_sand', 'byg:end_sand', 'quark:jasper', 'quark:slate', 'quark:dirty_glass', 'quark:dirty_glass_pane', 'quark:dirty_shard', '/crumbs:.+_barrel/', '/crumbs:.+_crafting_table/', '/chisel:iron_chisel/', '/chisel:diamond_chisel/', '/chisel:hitech_chisel/', 'chisel:offset_tool', 'chisel:auto_chisel', 'ceramics:kiln', '/ceramics:clay_bucket/', '/ceramics:.+faucet/', '/ceramics:.+channel/', '/ceramics:unfired_.+/', '/ceramics:porcelain_.+/', 'ceramics:milk_clay_bucket', '/ceramics:cracked_clay_bucket/', '/chisel:(metals|emerald|redstone|carpet|coal|end_stone|glowstone|purpur|prismarine|quartz).+/', '/dustrial_decor:.+(door|trapdoor)/', 'dustrial_decor:sheet_metal', 'dustrial_decor:rusty_sheet_metal', 'dustrial_decor:cardboard', '/dustrial_decor:cardboard_helmet/', '/dustrial_decor:cardboard_chestplate/', '/dustrial_decor:cardboard_leggings/', '/dustrial_decor:cardboard_boots/', '/addendum:.+(end_stone|purpur).+/', '/chipped:.+(end_stone|purpur|gilded|obsidian|glowstone|redstone_lamp|carpet|soul|cobweb|lantern|wart|lily|torch|roots|fungus|mushroom|vine|sprouts|hay).+/', 'chipped:botanist_workbench', 'chipped:glassblower', 'chipped:carpenters_table', 'chipped:loom_table', 'chipped:mason_table', 'chipped:alchemy_bench', 'chipped:mechanist_workbench', 'cookielicious:vanilla_cookie', 'cookielicious:chocolate_cookie', 'cookielicious:strawberry_cookie', 'cookielicious:banana_cookie', 'cookielicious:mint_cookie', 'cookielicious:adzuki_cookie'
			]).not()).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 32.0,
							"max": 64.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
			console.info(`Builder's Order - Generated Blocks(Main Blocks): ` + pool.entries.size())
		})
		//SECONDARY BLOCKS
		table.addPool(pool => {
			pool.rolls = 2
			Ingredient.of(['@mcwbridges', '@mcwroofs', '@mcwwindows', '@mcwfences', '@blockcarpentry', '@framedblocks', '@omgourd', '@chineseworkshop', '/engineersdecor:.+shingle.+/', '/dustrial_decor:.+lantern/', 'charm:redstone_lantern', '#lanterncolors:lanterns', '/supplementaries:(hanging_sign|sign_post)_.+/', 'valhelsia_structures:brazier', 'valhelsia_structures:soul_brazier', '/valhelsia_structures:.+_post/']).filter(Ingredient.of(['chineseworkshop:safe_debug_stick', 'chineseworkshop:black_clay', 'chineseworkshop:black_brick', 'chineseworkshop:yellow_clay', 'chineseworkshop:yellow_brick', 'mcwbridges:pliers', 'mcwroofs:roofing_hammer', 'mcwwindows:hammer', '/mcwtrpdoors:print_.+/', 'blockcarpentry:hammer', 'blockcarpentry:texture_wrench', 'blockcarpentry:chisel', 'blockcarpentry:paintbrush', '/framedblocks:framed_hammer/', '/framedblocks:framed_wrench/', '/framedblocks:framed_blueprint/', '/mcwroofs:tile_.+/', 'mcwroofs:rain_gutter']).not()).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 4.0,
							"max": 16.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
			console.info(`Builder's Order - Generated Blocks(Block Parts): ` + pool.entries.size())
		})
	})
})