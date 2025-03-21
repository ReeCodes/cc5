onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anyfood', table => {
		table.addPool(pool => {
			pool.rolls = 3
			Ingredient.of([
				'@irregularchef',
				'@seasonals',
				'@pamhc2foodextended',
				'@pamhc2foodcore',
				'@create_confectionery',
				'druidcraft:blueberry_muffin',
				'druidcraft:apple_elderberry_crumble',
				'druidcraft:elderflower_cordial',
				'largemeals:rice_pudding',
				'farmersrespite:coffee',
				'farmersrespite:green_tea_cookie',
				'farmersrespite:nether_wart_sourdough',
				'farmersrespite:black_cod',
				'farmersrespite:tea_curry',
				'farmersrespite:blazing_chili',
				'farmersrespite:coffee_cake',
				'farmersrespite:coffee_cake_slice',
				'farmersrespite:rose_hip_pie',
				'farmersrespite:rose_hip_pie_slice',
				'/farmersrespite:.+_tea/',
				'/mysticalworld:.+_cordial/',
				'/farmersdelight:cooked_.+/',
				'/farmersdelight:.+_pie/',
				'farmersdelight:sweet_berry_cheesecake',
				'/farmersdelight:.+_cookie/',
				'/farmersdelight:.+_slice/',
				'farmersdelight:melon_popsicle',
				'/farmersdelight:.+_salad/',
				'farmersdelight:barbecue_stick',
				'/farmersdelight:.+_sandwich/',
				'farmersdelight:hamburger',
				'farmersdelight:mutton_wrap',
				'farmersdelight:dumplings',
				'farmersdelight:dumplings',
				'farmersdelight:cabbage_rolls',
				'farmersdelight:cooked_rice',
				'/farmersdelight:.+_stew/',
				'/farmersdelight:.+_soup/',
				'farmersdelight:pasta_with_meatballs',
				'farmersdelight:pasta_with_mutton_chop',
				'farmersdelight:squid_ink_pasta',
				'farmersdelight:roasted_mutton_chops',
				'farmersdelight:vegetable_noodles',
				'farmersdelight:steak_and_potatoes',
				'farmersdelight:ratatouille',
				'farmersdelight:grilled_salmon',
				'farmersdelight:roast_chicken',
				'farmersdelight:stuffed_pumpkin',
				'farmersdelight:honey_glazed_ham',
				'farmersdelight:shepherds_pie',
				'copperpot:autumnal_agar',
				'copperpot:aestival_agar',
				'copperpot:brumal_agar',
				'copperpot:vernal_agar',
				'copperpot:baked_alaska_slice',
				'copperpot:adzuki_paste',
				'copperpot:maple_bacon_fudge',
				'copperpot:mint_meringue',
				'copperpot:creeping_yogurt',
				'copperpot:mooncake',
				'copperpot:sourdough',
				'copperpot:carrot_cupcake',
				'copperpot:tropical_meringue',
				'peculiars:yucca_ice_cream',
				'peculiars:yucca_milkshake',
				'peculiars:yucca_fudge',
				'peculiars:yucca_cake',
				'peculiars:aloe_ice_cream',
				'peculiars:aloe_milkshake',
				'peculiars:aloe_jelly_slice',
				'peculiars:aloe_berry_smoothie',
				'peculiars:aloe_cake',
				'peculiars:passionfruit_ice_cream',
				'peculiars:passionfruit_milkshake',
				'peculiars:passionfruit_cake',
				'peculiars:tropical_salad',
				'neapolitan:chocolate_bar',
				'neapolitan:chocolate_spider_eye',
				'neapolitan:chocolate_ice_cream',
				'neapolitan:chocolate_cake',
				'neapolitan:chocolate_milkshake',
				'neapolitan:strawberry_pips',
				'neapolitan:strawberries',
				'neapolitan:white_strawberries',
				'neapolitan:strawberry_ice_cream',
				'neapolitan:strawberry_milkshake',
				'neapolitan:strawberry_scones',
				'neapolitan:strawberry_cake',
				'neapolitan:vanilla_fudge',
				'neapolitan:vanilla_ice_cream',
				'neapolitan:vanilla_cake',
				'neapolitan:vanilla_pudding',
				'neapolitan:vanilla_milkshake',
				'neapolitan:banana_ice_cream',
				'neapolitan:banana_cake',
				'neapolitan:dried_banana',
				'neapolitan:banana_milkshake',
				'neapolitan:banana_bread',
				'neapolitan:mint_candies',
				'neapolitan:mint_ice_cream',
				'neapolitan:mint_milkshake',
				'neapolitan:cooked_mint_chops',
				'neapolitan:roasted_adzuki_beans',
				'neapolitan:adzuki_bun',
				'neapolitan:adzuki_ice_cream',
				'neapolitan:adzuki_stew',
				'neapolitan:adzuki_cake',
				'neapolitan:adzuki_milkshake',
				'neapolitan:chocolate_strawberries',
				'neapolitan:vanilla_chocolate_fingers',
				'neapolitan:strawberry_banana_smoothie',
				'neapolitan:mint_chocolate',
				'neapolitan:strawberry_bean_bonbons',
				'neapolitan:adzuki_curry',
				'neapolitan:neapolitan_ice_cream',
				'cookielicious:vanilla_cookie',
				'cookielicious:chocolate_cookie',
				'cookielicious:strawberry_cookie',
				'cookielicious:banana_cookie',
				'cookielicious:mint_cookie',
				'cookielicious:adzuki_cookie',
				'/trickortreat:.+goodie_bag/',
				'ars_nouveau:source_berry_pie',
				'ars_nouveau:source_berry_roll',
				'create:builders_tea'
			]).filter(Ingredient.of([
				'pamhc2foodextended:hoisinsauceitem',
				'farmersdelight:honey_glazed_ham_block',
				'farmersdelight:shepherds_pie_block',
				'farmersdelight:roast_chicken_block',
				'pamhc2foodextended:fivespiceitem',
				'pamhc2foodextended:hotsauceitem',
				'pamhc2foodextended:relishitem',
				'pamhc2foodextended:ketchupitem',
				'pamhc2foodextended:mustarditem',
				'pamhc2foodextended:sesameoilitem',
				'pamhc2foodextended:soysauceitem',
				'pamhc2foodextended:blackpepperitem',
				'pamhc2foodextended:saltandpepperitem',
				'pamhc2foodextended:mushroomoilitem',
				'pamhc2foodcore:cookingoilitem',
				'pamhc2foodcore:vinegaritem',
				'pamhc2foodcore:freshwateritem',
				'pamhc2foodcore:freshmilkitem',
				'pamhc2foodcore:saltitem',
				'pamhc2foodcore:flouritem',
				'pamhc2foodcore:doughitem',
				'pamhc2foodcore:batteritem',
				'pamhc2foodcore:creamitem',
				'pamhc2foodcore:butteritem',
				'pamhc2foodcore:bakewareitem',
				'pamhc2foodcore:cuttingboarditem',
				'pamhc2foodcore:juiceritem',
				'pamhc2foodcore:grinderitem',
				'pamhc2foodcore:mixingbowlitem',
				'pamhc2foodcore:potitem',
				'pamhc2foodcore:rolleritem',
				'pamhc2foodcore:saucepanitem',
				'pamhc2foodcore:skilletitem',
				'pamhc2foodcore:mayonaiseitem',
				'pamhc2foodextended:saladdressingitem',
				'/create_confectionery:.+brick.+/',
				'create_confectionery:crushed_cocoa',
				'create_confectionery:cocoa_powder',
				'create_confectionery:cocoa_butter',
				'create_confectionery:black_chocolate_bucket',
				'create_confectionery:white_chocolate_bucket',
				'create_confectionery:ruby_chocolate_bucket',
				'create_confectionery:caramel_bucket',
				'seasonals:pumpkin_ice_cream_block',
				'seasonals:sweet_berry_ice_cream_block'
			]).not()).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 1.0,
							"max": 2.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
		})
	})
})