function shapedRecipe(result, pattern, key) {
    return { result: result, pattern: pattern, key: key };
}

onEvent('recipes', event => {

    var recipes = [
	
		shapedRecipe('tanknull:tank_1', ['AAA', 'ABA', 'AAA'], {
				A: '#evilcraft:gems/dark',
				B: 'immersiveengineering:wooden_barrel'
			}),
			
		shapedRecipe('tanknull:tank_2', ['AAA', 'ABA', 'AAA'], {
				A: '#forge:storage_blocks/redstone',
				B: 'tanknull:tank_1'
			}),
			
		shapedRecipe('tanknull:tank_3', ['AAA', 'ABA', 'AAA'], {
				A: '#forge:storage_blocks/electrum',
				B: 'tanknull:tank_2'
			}),
			
		shapedRecipe('tanknull:tank_4', ['AAA', 'ABA', 'AAA'], {
				A: '#forge:storage_blocks/emerald',
				B: 'tanknull:tank_3'
			}),
			
		shapedRecipe('tanknull:tank_5', ['AAA', 'ABA', 'AAA'], {
				A: '#forge:storage_blocks/diamond',
				B: 'tanknull:tank_4'
			}),
			
		shapedRecipe('tanknull:tank_6', ['AAA', 'ABA', 'AAA'], {
				A: '#forge:storage_blocks/manyullyn',
				B: 'tanknull:tank_5'
			}),
			
		shapedRecipe('tanknull:tank_7', ['AAA', 'ABA', 'AAA'], {
				A: 'kubejs:rainbow_gem',
				B: 'tanknull:tank_6'
			}),
	
		shapedRecipe('powah:reactor_starter', ['ABA', 'BCB', 'ABA'], {
            A: 'powah:uraninite',
            B: 'powah:capacitor_basic_tiny',
            C: 'create:shadow_steel_casing'
        }),
		
		shapedRecipe('powah:reactor_basic', ['ABA', 'BCB', 'ABA'], {
            A: 'powah:uraninite',
            B: 'powah:capacitor_basic',
            C: 'powah:reactor_starter'
        }),
		
		shapedRecipe('powah:reactor_hardened', ['ABA', 'BCB', 'ABA'], {
            A: 'powah:uraninite',
            B: 'powah:capacitor_hardened',
            C: 'powah:reactor_basic'
        }),
		
		shapedRecipe('powah:reactor_blazing', ['ABA', 'BCB', 'ABA'], {
            A: 'powah:uraninite',
            B: 'powah:capacitor_blazing',
            C: 'powah:reactor_hardened'
        }),
		
		shapedRecipe('powah:reactor_niotic', ['ABA', 'BCB', 'ABA'], {
            A: 'powah:uraninite',
            B: 'powah:capacitor_niotic',
            C: 'powah:reactor_blazing'
        }),
		
		shapedRecipe('powah:reactor_spirited', ['ABA', 'BCB', 'ABA'], {
            A: 'powah:reactor_niotic',
            B: 'powah:capacitor_spirited',
            C: 'kubejs:viridescent_core'
        }),
		
		shapedRecipe('powah:reactor_nitro', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:storage_blocks/uraninite',
            B: 'powah:capacitor_nitro',
            C: 'powah:reactor_spirited'
        }),
	
		shapedRecipe('industrialforegoing:dryrubber', ['AAA', 'AAA', 'AAA'], {
				A: 'myrtrees:latex'
			}),
			
		shapedRecipe('ftbic:nuclear_reactor', ['ABA', 'BCB', 'ABA'], {
            A: 'ftbic:reactor_plating',
            B: 'create:refined_radiance_casing',
            C: 'ftbic:advanced_machine_block'
        }),
		
		shapedRecipe('4x ftbic:copper_coil', [' A ', 'ABA', ' A '], {
            A: '#forge:wires/copper',
            B: 'ftbic:advanced_alloy'
        }),
			
		shapedRecipe('4x forbidden_arcanus:candle', [' A ', ' B ', ' C '], {
				A: 'forbidden_arcanus:candle',
				B: 'resourcefulbees:wax',
				C: '#forge:nuggets/iron'
			}),
	
		shapedRecipe('#forge:storage_blocks/bitumen', ['AAA', 'AAA', 'AAA'], {
				A: '#forge:gems/bitumen'
			}),
	
        shapedRecipe('enderstorage:ender_tank', ['ABA', 'CDC', 'AEA'], {
            A: 'minecraft:blaze_rod',
            B: '#forge:wool',
            C: 'minecraft:obsidian',
            D: 'minecraft:cauldron',
			E: 'botania:ender_air_bottle'
        }),
		
		shapedRecipe('enderstorage:ender_chest', ['ABA', 'CDC', 'AEA'], {
            A: 'minecraft:blaze_rod',
            B: '#forge:wool',
            C: 'minecraft:obsidian',
            D: 'naturesaura:ender_crate',
			E: 'botania:ender_air_bottle'
        }),
		
		shapedRecipe(Item.of('calemiutils:wallet', '{balance:1}'), ['AAA', 'CBC', 'AAA'], {
            A: 'minecraft:leather',
            B: 'calemiutils:coin_copper',
            C: 'minecraft:paper'
        }),
		
		shapedRecipe('#forge:ingots/platinum', ['AAA', 'AAA', 'AAA'], {
            A: '#forge:nuggets/platinum'
        }),
		
		shapedRecipe('forbidden_arcanus:orb_of_temporary_flight', [' A ', 'ABA', ' A '], {
            A: 'forbidden_arcanus:xpetrified_orb',
            B: 'forbidden_arcanus:golden_feather'
        }),
		
		shapedRecipe('quark:oak_chest', ['AAA', 'A A', 'AAA'], {
            A: ['/biomesoplenty:.+_planks/', '/byg:.+_planks/', '/quark:.+_stained_planks$/']
        }),
		
		shapedRecipe('botania:enchanted_soil', ['A  ', 'B  ', '   '], {
            A: 'botania:overgrowth_seed',
            B: 'minecraft:grass_block'
        }),
		
		shapedRecipe('kubejs:purifying_rune', ['AAA', 'ABA', 'AAA'], {
            A: '/relics:rune.+/',
            B: 'bountifulbaubles:spectral_silt'
        }),
		
		shapedRecipe('forcecraft:force_ingot', ['AAA', 'ABA', 'AAA'], {
            A: 'forcecraft:force_gem',
            B: ['minecraft:iron_ingot', 'minecraft:gold_ingot']
        }),
		
		shapedRecipe('forcecraft:force_log', [' A ', 'ABA', ' A '], {
            A: 'forcecraft:force_gem',
            B: '#minecraft:logs'
        }),
		
		shapedRecipe(Item.of('minecraft:tipped_arrow', 8, {Potion:"mowziesmobs:long_poison_resist"}), ['AAA', 'ABA', 'AAA'], {
            A: 'minecraft:arrow',
            B: 'pandoras_creatures:acidic_archvine_tongue'
        }),
		
		shapedRecipe('ironfurnaces:netherite_furnace', 
		[
		'ABA',
		'BCB',
		'ADA'
		], {
            A: 'minecraft:netherite_ingot',
            B: 'naturesaura:tainted_gold',
            C: 'ironfurnaces:obsidian_furnace',
            D: 'minecraft:netherite_block'
        }),
		
		shapedRecipe('ironfurnaces:rainbow_core', ['AAA', 'BAB', 'AAA'], {
            A: 'ironfurnaces:rainbow_plating',
            B: 'ironfurnaces:netherite_furnace'
        }),
		
		shapedRecipe('botania:forest_eye', ['ABA', 'BCB', 'ABA'], {
            A: 'botania:manasteel_ingot',
            B: 'botania:livingrock',
            C: 'upgrade_aquatic:elder_eye'
        }),
		
		shapedRecipe('cyclic:spawner_seeker', ['ABA', 'BCB', 'ABA'], {
            A: '#forge:dyes/purple',
            B: 'forbidden_arcanus:spawner_scrap',
            C: 'minecraft:ender_eye'
        }),
		
		shapedRecipe('engineerstools:redia_tool', ['AB ', 'CD ', '  E'], {
            A: 'mysticalworld:lead_axe',
            B: 'mysticalworld:lead_pickaxe',
            C: 'mysticalworld:lead_shovel',
            D: 'immersiveengineering:stick_treated',
			E: 'forbidden_arcanus:obsidian_ingot'
        }),
		
		shapedRecipe('cyclic:evoker_fang', [
		'ABC',
		' DB',
		'D A'
		], {
            A: 'meetyourfight:mossy_tooth',
            B: 'druidcraft:amber_block',
            C: 'farlanders:endumium_block',
            D: 'evilcraft:dark_stick'
        }),
		
		//securityCraft
		
		shapedRecipe('securitycraft:portable_radar', [
		' A ',
		'ABA',
		' A '
		], {
            A: 'buildersaddition:entity_detector',
            B: 'minecraft:redstone'
        }),
		
		shapedRecipe('securitycraft:protecto', [
		'ABA',
		'ACA',
		'AAA'
		], {
            A: '#forge:ingots/steel',
            B: 'securitycraft:portable_radar',
			C: 'evilcraft:environmental_accumulation_core'
        }),
		
		shapedRecipe('securitycraft:retinal_scanner', [
		'ABA',
		'ACA',
		'AAA'
		], {
            A: '#securitycraft:reinforced/stone',
            B: 'securitycraft:username_logger',
			C: 'quark:ender_watcher'
        }),
		
		shapedRecipe('securitycraft:sentry', [
		' B ',
		'ACA',
		'ADA'
		], {
            A: 'securitycraft:reinforced_iron_block',
            B: 'minecraft:dispenser',
			C: 'immersiveengineering:circuit_board',
			D: 'securitycraft:portable_radar'
        }),
		
		shapedRecipe(Item.of('trailmix:nyan_pig_launcher').toResultJson(), ['AAA', 'ABA', 'AAA'], {
            A: 'kubejs:rainbow_gem',
			B: Item.of('trailmix:tmpp_launcher').toResultJson()
        }),
		
		shapedRecipe('druidcraft:crate', ['ABA', 'B B', 'ABA'], {
            A: '#minecraft:planks',
            B: 'druidcraft:rockroot'
        }),
		
		shapedRecipe('snailmail:snail_box', ['AAA', 'ABA', 'AAA'], {
            A: 'autumnity:snail_shell_piece',
            B: 'minecraft:nautilus_shell'
        }),
		
		
		shapedRecipe('whisperwoods:hand_of_fate', ['   ', ' A ', 'BBB'], {
            A: '/relics:wool_mitten/',
            B: 'minecraft:stone_slab'
        }),
		
		shapedRecipe('cyclic:fisher', ['ABA', 'BCB', 'ABA'], {
            A: 'upgrade_aquatic:driftwood_planks',
            B: 'minecraft:cobweb',
            C: 'aquaculture:neptunes_bounty'
        }),
		
		shapedRecipe('cyclic:terra_preta', ['AAA', 'ABA', 'AAA'], {
            A: 'minecraft:podzol',
            B: 'farmingforblockheads:red_fertilizer'
        }),
		
		shapedRecipe(Item.of('cyclic:dark_glass', 8), ['AAA', 'ABA', 'AAA'], {
            A: 'industrialforegoing:dark_glass',
            B: 'forbidden_arcanus:dark_nether_star'
        }),
		
		shapedRecipe('javd:portal_block', ['AAA', 'ABA', 'AAA'], {
            A: 'quark:basalt',
            B: 'charm:ender_pearl_block'
        }),
		
		shapedRecipe('druidcraft:growth_lamp', ['ABA', 'BCB', 'ABA'], {
			A: 'druidcraft:rockroot',
			B: 'minecraft:emerald',
			C: 'naturesaura:spawn_lamp'
		}),
		
		shapedRecipe('undergarden:catalyst', ['ABA', 'BCB', 'ABA'], {
			A: 'minecraft:gold_ingot',
			B: 'mysticalworld:quicksilver_ingot',
			C: 'druidcraft:moonstone'
		}),
		
		shapedRecipe('xreliquary:fertile_lily_pad', ['ABA', 'BCB', 'ABA'], {
			A: 'botania:fertilizer',
			B: 'xreliquary:fertile_essence',
			C: 'minecraft:lily_pad'
		}),
		
		shapedRecipe('cyclic:water_candle', [' A ', 'BAB', 'BCB'], {
			A: '#forge:storage_blocks/lapis',
			B: 'astralsorcery:nocturnal_powder',
			C: 'minecraft:light_weighted_pressure_plate'
		}),
		
		shapedRecipe('cyclic:ender_eye_reuse', ['ABA', 'BAB', 'ABA'], {
            A: 'minecraft:ender_eye',
            B: 'forbidden_arcanus:stellarite_piece'
        }),
		
		
		shapedRecipe(Item.of('engineersdecor:metal_bar', 6), ['  A', ' A ', 'A  '], {
			A: '#forge:rods/iron'
		}),
		
		shapedRecipe(Item.of('immersiveengineering:stick_treated', 4), ['A  ', 'A  ', '   '], {
			A: 'immersiveengineering:treated_wood_horizontal'
		})
    ];
    recipes.forEach(recipe => {
        event.shaped(recipe.result, recipe.pattern, recipe.key);
    });
});