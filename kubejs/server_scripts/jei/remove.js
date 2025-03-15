// priority: 500

onEvent('recipes', event => {

    var outputRemovals = [
		'cyclic:ender_pearl_mounted',
	
		'/inventorypets:nugget_.+/',
		
		'/farmersdelight:iron_knife/',
	
		'/tanknull:tank.+/',
		
		'chisel:charcoal/raw',
	
		'woot:si_dust',
		
		'enigmaticlegacy:extradimensional_eye',
		'enigmaticlegacy:animal_guide',
		'enigmaticlegacy:hunter_guide',
		
        'ftbic:mixed_metal_blend',
		
		'/powah:reactor_.+/',
		
		'enigmaticlegacy:mining_charm',
		'enigmaticlegacy:monster_charm',
		'enigmaticlegacy:iron_ring',
		'enigmaticlegacy:mending_mixture',
		'enigmaticlegacy:infinimeal',
		
        '/chiselsandbits:chisel_netherite/',

        'forbidden_arcanus:obsidian_with_iron',
		'forbidden_arcanus:candle',

        'bountifulbaubles:broken_black_dragon_scale',
        'bountifulbaubles:resplendent_token',

        'rftoolsbase:machine_base',

        '/bountifulbaubles:(sunglasses|balloon|.+_mirror|amulet_cross|obsidian_skull|gloves_dexterity|lucky_horseshoe|shield_cobalt|amulet.+)/',

        'waystones:warp_dust',

        'woot:machine_casing',

        'ftbic:industrial_grade_metal',

        'rftoolsbase:dimensionalshard',

        'tropicraft:pina_colada',

        'naturesaura:chunk_loader',

        '/minecraft:trident/',

        'enderstorage:ender_tank',
        'enderstorage:ender_chest',

        'druidcraft:crate',
        'druidcraft:growth_lamp',

        'whisperwoods:hand_of_fate',

        '/cyclic:ender_book/',
        'cyclic:water_candle',
        'cyclic:fisher',
        'cyclic:terra_preta',
        'cyclic:dark_glass',
        'cyclic:spawner_seeker',
        '/cyclic:ender_pearl_mounted/',
        '/cyclic:ender_pearl_reuse/',
        '/cyclic:ender_eye_reuse/',
        'cyclic:apple_lapis',
        'cyclic:apple_iron',
        'cyclic:apple_chocolate',
        'cyclic:evoker_fang',

        'forbidden_arcanus:eternal_stella',

        'eidolon:pewter_blend',

        'engineersdecor:metal_bar',

        'minecraft:enchanted_golden_apple',

        'xreliquary:fertile_lily_pad',

        'javd:portal_block',

        '/undergarden:catalyst/',

        '/engineerstools:redia_tool/',

        '/trailmix:nyan_pig_launcher/',

        '/mysticalworld:nautilus_horn/',

        '/waystones:warp_stone/',

        'snailmail:snail_box',

        'botania:forest_eye',

        'ironfurnaces:netherite_furnace',
        'ironfurnaces:rainbow_plating',
        'ironfurnaces:rainbow_core',
        'ironfurnaces:item_heater',
        'ironfurnaces:heater',

        'magicfeather:magicfeather',

        'tiab:timeinabottle',

        'forbidden_arcanus:mundabitur_dust',
        'forbidden_arcanus:arcane_gold_ingot',
        'forbidden_arcanus:edelwood_log',
        'forbidden_arcanus:corrupti_dust',

        'scannable:scanner',

        'mysticalworld:mushroom_inside_block',

        'atum:linen_bandage',

        'securitycraft:portable_radar',
        'securitycraft:sentry',
        'securitycraft:retinal_scanner',
        'securitycraft:protecto',

        'calemiutils:link_book_location',

        '/cyclic:charm_stealthpotion/',
        '/cyclic:charm_boostpotion/',
        '/cyclic:charm_crit/',
        '/cyclic:quiver_damage/',
        '/cyclic:quiver_lightning/',
        '/cyclic:charm_magicdefense/',
        '/cyclic:charm_xp_blocker/',
        '/cyclic:charm_wing/',
        'cyclic:apple_prismarine',
        'cyclic:apple_bone',
        'cyclic:apple_chorus',
        'cyclic:apple_lofty_stature',

        '/chisel:iron_chisel/',

        '/chiselsandbits:chisel_iron/',

        'forcecraft:freezing_core',

        '/gateways:.+/',

        '#inventorypets:all_pets',

        'minecraft:barrel',
        'minecraft:chest',

        'calemiutils:wallet',

        '/ironchest:.+chest$/',
        '/metalbarrels:.+barrel$/',

        [Ingredient.of(['@framedcompactdrawers']).filter(Ingredient.of([
            'framedcompactdrawers:framed_compact_drawer',
            'framedcompactdrawers:framed_drawer_controller',
            'framedcompactdrawers:framed_slave',
            'framedcompactdrawers:framed_trim'
        ]).not())],

        [Ingredient.of(['@storagedrawers']).filter(Ingredient.of([
            'storagedrawers:compacting_drawers_3',
            'storagedrawers:controller',
            'storagedrawers:controller_slave',
            '/storagedrawers:.+key$/',
            '/storagedrawers:.+trim$/'
        ]).not())],

        [Ingredient.of(['@colossalchests']).filter(Ingredient.of([
            'colossalchests:upgrade_tool',
            'colossalchests:upgrade_tool_reverse',
            'colossalchests:uncolossal_chest'
        ]).not())],
        'moreminecarts:chunk_loader',
        'moreminecarts:minecart_with_chunk_loader'
    ];

    let disabledTypes = [
        'cyclic:solidifier',
        'cyclic:melter',
        'forcecraft:freezing',
        'forcecraft:grinding',
        'charm:woodcutting',
        'occultism:crushing',
        'apotheosis:potion_charm',
        'forbidden_arcanus:apply_indestructible_enchantment'
    ];

    let disabledIDs = [
		'immersiveengineering:crusher/coke',
		'forbidden_arcanus:dragon_scale',
        'woot:si_dust_1',
        'woot:si_dust_2',
        'bountifulbaubles:disintegration/diamond_block',
        'bountifulbaubles:disintegration/emerald_block',
        'ftbic:shaped/enderium_wire',
        'betterendforge:amber_gem',
        '/create:fill_forbidden_arcanus_edelwood_.+/',
        'aquaculture:planks_from_driftwood',
        'forbidden_arcanus:dark_rune',
        'forbidden_arcanus:dark_rune_2',
        '/botanypots:crafting/compact_hoppe.+_botany_pot/',
        '/botanypots:crafting/hoppe.+_botany_pot/',
        'cinderscapes:gunpowder',
        'betterendforge:gunpowder_from_sulphur',
        'forcecraft:gold_to_force_ingot',
        'forcecraft:iron_to_force_ingot',
        '/forcecraft:transmutation/(iron|gold|stone|wooden).+/',
        'forcecraft:transmutation/diamond_from_horse_armor',
        'forcecraft:transmutation/dandelion',
        'forcecraft:transmutation/poppy',
        'forcecraft:transmutation/porkchop',
        'forcecraft:transmutation/chicken',
        'forcecraft:transmutation/mutton',
        'forcecraft:transmutation/beef',
        '/forcecraft:transmutation/.+_mushroom/',
        '/forcecraft:transmutation/cooked.+/',
        '/engineerstools:crushing.+/',
        'pneumaticcraft:compressed_iron_gear',
        'industrialforegoing:iron_gear',
        'industrialforegoing:gold_gear',
        'forcecraft:force_gear',
        'dustrial_decor:ingot_from_rusty_sheet',
        '/createaddition:rolling/.+ingot/',
        '/createaddition:pressing/.+ingot/',
        '/create:pressing/.+ingot/',
        '/immersiveengineering:metalpress/plate.+/',
        '/immersiveengineering:metalpress/gear.+/',
        '/immersiveengineering:crafting/hammercrushing.+/',
        '/immersiveengineering:crafting/plate.+/',
        '/immersiveengineering:crafting/wire_.+/',
        //EE-PARTS
        '/emendatusenigmatica:rod_from_.+/',
        '/emendatusenigmatica:dust_from_.+/',
        '/emendatusenigmatica:plate_from_.+/',
        'emendatusenigmatica:sulfur_from_hammer',
        //CHAINMAIL
        '/(iceandfire|mana-and-artifice):chainmail_.+/',
        '/byg:chain_.+/'
    ];

    //OUTPUT SPECIFIC
    event.remove({
        output: 'minecraft:bread',
        type: 'minecraft:crafting_shapeless'
    })

    event.remove({
        output: 'minecraft:bread',
        type: 'minecraft:crafting_shaped'
    })

    event.remove({
        output: '/immersiveposts:stick_.+/',
        type: 'minecraft:crafting_shaped'
    })

    event.remove({
        output: '/immersiveengineering:stick_.+/',
        type: 'minecraft:crafting_shapeless'
    })

    event.remove({
        output: '/immersiveengineering:stick_.+/',
        type: 'minecraft:crafting_shaped'
    })

    event.remove({
        output: 'meetyourfight:devils_ante',
        type: 'minecraft:crafting_shaped'
    })

    event.remove({
        output: 'meetyourfight:haunted_bell',
        type: 'minecraft:crafting_shaped'
    })

    event.remove({
        output: 'meetyourfight:fossil_bait',
        type: 'minecraft:crafting_shaped'
    })

    event.remove({
        output: '/ceramics:.+/',
        type: 'minecraft:smelting'
    })

    event.remove({
        output: 'refinedstorage:silicon'
    })

    event.remove({
        output: 'minecraft:wither_rose',
        type: 'botanypots:crop'
    })

    event.remove({
        output: '/botania:.+_mystical_flower/',
        type: 'botanypots:crop'
    })
    event.remove({
        output: '/botania:.+_double_flower/',
        type: 'botanypots:crop'
    })
    event.remove({
        output: '/botania:.+_mushroom/',
        type: 'botanypots:crop'
    })

	event.remove({
        input: 'infernalexp:basalt_iron_ore',
        type: 'minecraft:smelting'
    })
	
	event.remove({
        input: 'powah:uraninite',
        type: 'minecraft:smelting'
    })
	
	event.remove({
        input: 'powah:uraninite',
        type: 'minecraft:blasting'
    })
	
	//FOR-EACH
    disabledIDs.forEach(r => {
        event.remove({
            id: r
        })
    })

    disabledTypes.forEach(r => {
        event.remove({
            type: r
        })
    })

    outputRemovals.forEach(r => {
        event.remove({
            output: r
        })
    })

    global.disabledItems.forEach(r => {
        event.remove({
            output: r
        })
    })
});