onEvent('recipes', event => {
	
	let force_grind = (ingredient, results, secondaryChance, xp, processtime, id) => {
		event.recipes.forcecraft.grinding({
			ingredient: Ingredient.of(ingredient).toJson(),
			results: results.map(r => Item.of(r).toResultJson()),
			secondaryChance: secondaryChance,
			experience: xp,
			processtime: processtime
		}).id('forcecraft:grinding/' + id)
	}

	let mech_squeeze = (input, results, id) => {
		event.recipes.integrateddynamics.mechanical_squeezer({
			item: Ingredient.of(input).toJson(),
			result: {
				items: results.map(r => Item.of(r).toResultJson())
			},
			duration: 40
		}).id('integrateddynamics:mechanical_squeezer/ore/' + id)
	}

	let squeeze = (input, results, id) => {
		event.recipes.integrateddynamics.squeezer({
			item: Ingredient.of(input).toJson(),
			result: {
				items: results.map(r => Item.of(r).toResultJson())
			}
		}).id('integrateddynamics:squeezer/ore/' + id)
	}

	let spirit_crusher = (input, output, time, id) => {
		event.recipes.occultism.crushing({
			ingredient: Ingredient.of(input).toJson(),
			result: Item.of(output).toResultJson(),
			crushing_time: time
		}).id('occultism:crushing/' + id)
	}

	let crumbling = (input, output, auraT, aura, time, id) => {
		event.recipes.naturesaura.altar({
			input: Ingredient.of(input).toJson(),
			output: Item.of(output).toResultJson(),
			aura_type: auraT,
			catalyst: {
				item: 'naturesaura:crushing_catalyst'
			},
			aura: aura,
			time: time
		}).id('naturesaura:altar/crushing/' + id)
	}

	let alchemy_cutting = (inputs, output, syphon, ticks, level, id) => {
		event.recipes.bloodmagic.alchemytable({
			input: inputs.map(r => Ingredient.of(r).toJson()),
			output: Item.of(output).toResultJson(),
			syphon: syphon,
			ticks: ticks,
			upgradeLevel: level
		}).id('bloodmagic:alchemytable/ore/' + id)
	}

	let multiSmelt = (output, input, includeBlasting, id) => {
		event.smelting(output, input).id('minecraft:smelting/' + id)

		if (includeBlasting) {
			event.blasting(output, input).id('minecraft:blasting/' + id)
		}
	}

	//ID_REMOVAL
	let disabledIDs = [
		'/integrateddynamics:(mechanical_squeezer|squeezer)/ore.+/',
		'/integrateddynamics:(squeezer|mechanical_squeezer)/convenience/evilcraft.+/',
		'/emendatusenigmatica:ore_from_chunk.+/',
		'/createaddition:crushing/.+/',
		'/create:.+osmium.+/',
		'/bloodmagic:arc/(fragment|gravel|dusts).+/',
		'/bloodmagic:arc/ore/dust.+/',
		'/bloodmagic:alchemytable/sand.+/',
		'/create:crushing/.+_ore/',
		'/create:crushing/(brass|zinc|copper)_block/',
		'/create:milling/.+_ore/',
		'/create:splashing.+crushed.+/',
		'/immersiveengineering:crusher/(ore|ingot|nether).+/'
	];

	disabledIDs.forEach(function (removal) {
		event.remove({
			id: removal
		});
	});

	let metallic = ['iron', 'gold', 'copper', 'tin', 'lead', 'quicksilver', 'silver', 'zinc', 'aluminum', 'nickel', 'uranium', 'iesnium', 'thallasium', 'cobalt', 'platinum', 'iridium', 'draconium', 'vinteum', 'netherite_scrap', 'nebu', 'utherium', 'froststeel', 'cloggrum', 'regalium'];

	let gems_rare = ['emerald', 'diamond', 'quartz', 'arcane_crystal', 'sapphire', 'amber', 'moonstone', 'ametrine', 'pendorite', 'dark_gem', 'rock_root', 'raritanium', 'xpetrified_ore', 'runestone', 'dark_runestone', 'emeraldite', 'ender', 'biotite', 'mana', 'amethyst'];

	let gems_common = ['lapis', 'dimensional', 'fiery_glass', 'redstone', 'sulfur', 'bitumen', 'coke'];

	let coals = ['coal', 'lignite', 'anthracite'];

	let blocks = ['end_stones', 'obsidian'];

	let ee_ores = ['iron', 'gold', 'copper', 'tin', 'lead', 'silver', 'zinc', 'aluminum', 'nickel', 'uranium', 'iesnium', 'cobalt', 'iridium', 'thallasium', 'nebu', 'utherium', 'froststeel', 'cloggrum', 'regalium', 'mana', 'coal', 'emerald', 'diamond', 'lapis', 'redstone', 'quartz', 'dimensional', 'sapphire', 'netherite_scrap', 'bitumen', 'sulfur'];

	let ee_clusters = ['coal', 'diamond', 'emerald', 'sapphire', 'mana', 'dimensional', 'lapis', 'quartz', 'bitumen', 'redstone', 'sulfur', 'iron', 'gold', 'copper', 'aluminum', 'silver', 'lead', 'nickel', 'uranium', 'tin', 'zinc', 'cobalt', 'iridium'];

	ee_clusters.forEach(o => {
		let ocl = o + '_from_cluster';
		let oa = o.replace('mana', 'arcane');
		if (o == 'coal') {
			force_grind('#forge:ores_cluster/' + o, ['12x #minecraft:coals/' + o, '6x #minecraft:coals/' + o], 0.50, 0.8, 1600, ocl)

			mech_squeeze('#forge:ores_cluster/' + o, ['12x #minecraft:coals/' + o, Item.of('#minecraft:coals/' + o, 5).chance(0.85)], ocl)

			squeeze('#forge:ores_cluster/' + o, ['8x #minecraft:coals/' + o, Item.of('#minecraft:coals/' + o, 3).chance(0.45)], ocl)

			spirit_crusher('#forge:ores_cluster/' + o, '16x #minecraft:coals/' + o, 800, ocl)

			crumbling('#forge:ores_cluster/' + o, '20x #minecraft:coals/' + o, 'naturesaura:overworld', 8000, 1600, ocl)

			event.recipes.immersiveengineering.crusher('20x #minecraft:coals/' + o, '#forge:ores_cluster/' + o, [Item.of('6x #minecraft:coals/' + o).chance(0.65)]).id('immersiveengineering:crusher/' + ocl)
		}
		if (['diamond', 'emerald', 'sapphire', 'mana'].includes(o)) {
			force_grind('#forge:ores_cluster/' + oa, ['8x #forge:gems/' + o, '4x #forge:gems/' + o], 0.60, 0.8, 1600, ocl)

			mech_squeeze('#forge:ores_cluster/' + oa, ['8x #forge:gems/' + o, Item.of('#forge:gems/' + o, 4).chance(0.85)], ocl)

			squeeze('#forge:ores_cluster/' + oa, ['4x #forge:gems/' + o, Item.of('#forge:gems/' + o, 4).chance(0.45)], ocl)

			spirit_crusher('#forge:ores_cluster/' + oa, '8x #forge:gems/' + o, 800, ocl)

			crumbling('#forge:ores_cluster/' + oa, '12x #forge:gems/' + o, 'naturesaura:overworld', 8000, 1600, ocl)

			event.recipes.immersiveengineering.crusher('12x #forge:gems/' + o, '#forge:ores_cluster/' + oa, [Item.of('4x #forge:gems/' + o).chance(0.65)]).id('immersiveengineering:crusher/' + ocl)
		}
		if (['dimensional', 'lapis', 'quartz', 'sulfur', 'bitumen'].includes(o)) {
			force_grind('#forge:ores_cluster/' + o, ['32x #forge:gems/' + o, '4x #forge:gems/' + o], 0.60, 0.8, 1600, ocl)

			mech_squeeze('#forge:ores_cluster/' + o, ['32x #forge:gems/' + o, Item.of('#forge:gems/' + o, 4).chance(0.85)], ocl)

			squeeze('#forge:ores_cluster/' + o, ['32x #forge:gems/' + o, Item.of('#forge:gems/' + o, 4).chance(0.45)], ocl)

			spirit_crusher('#forge:ores_cluster/' + o, '32x #forge:gems/' + o, 800, ocl)

			crumbling('#forge:ores_cluster/' + o, '48x #forge:gems/' + o, 'naturesaura:overworld', 8000, 1600, ocl)

			event.recipes.immersiveengineering.crusher('48x #forge:gems/' + o, '#forge:ores_cluster/' + o, [Item.of('8x #forge:gems/' + o).chance(0.65)]).id('immersiveengineering:crusher/' + ocl)
		}
		if (['redstone'].includes(o)) {
			force_grind('#forge:ores_cluster/' + o, ['32x #forge:dusts/' + o, '16x #forge:dusts/' + o], 0.60, 0.8, 1600, ocl)

			mech_squeeze('#forge:ores_cluster/' + o, ['32x #forge:dusts/' + o, Item.of('#forge:dusts/' + o, 16).chance(0.85)], ocl)

			squeeze('#forge:ores_cluster/' + o, ['16x #forge:dusts/' + o, Item.of('#forge:dusts/' + o, 8).chance(0.45)], ocl)

			spirit_crusher('#forge:ores_cluster/' + o, '36x #forge:dusts/' + o, 800, ocl)

			crumbling('#forge:ores_cluster/' + o, '40x #forge:dusts/' + o, 'naturesaura:overworld', 8000, 1600, ocl)

			event.recipes.immersiveengineering.crusher('48x #forge:dusts/' + o, '#forge:ores_cluster/' + o, [Item.of('24x #forge:dusts/' + o).chance(0.65)]).id('immersiveengineering:crusher/' + ocl)
		}
		if (['iron', 'gold', 'copper', 'aluminum', 'silver', 'lead', 'nickel', 'uranium', 'tin', 'zinc', 'cobalt', 'iridium'].includes(o)) {
			force_grind('#forge:ores_cluster/' + o, ['8x #forge:dusts/' + o, '4x #forge:dusts/' + o], 0.60, 0.8, 1600, ocl)

			mech_squeeze('#forge:ores_cluster/' + o, ['8x #forge:dusts/' + o, Item.of('#forge:dusts/' + o, 4).chance(0.85)], ocl)

			squeeze('#forge:ores_cluster/' + o, ['4x #forge:dusts/' + o, Item.of('#forge:dusts/' + o, 4).chance(0.45)], ocl)

			spirit_crusher('#forge:ores_cluster/' + o, '8x #forge:dusts/' + o, 800, ocl)

			crumbling('#forge:ores_cluster/' + o, '8x #forge:dusts/' + o, 'naturesaura:overworld', 8000, 1600, ocl)

			event.recipes.immersiveengineering.crusher('12x #forge:dusts/' + o, '#forge:ores_cluster/' + o, [Item.of('4x #forge:dusts/' + o).chance(0.65)]).id('immersiveengineering:crusher/' + ocl)
		}
	})

	metallic.forEach(o => {
		let oi = o + '_ingot_to_dust'
		force_grind('#forge:ores/' + o, ['2x #forge:dusts/' + o, '1x #forge:dusts/' + o], 0.15, 0.2, 800, o)
		force_grind('#forge:ingots/' + o, ['1x #forge:dusts/' + o], 0.15, 0.2, 800, oi)

		mech_squeeze('#forge:ores/' + o, ['2x #forge:dusts/' + o, Item.of('#forge:dusts/' + o).chance(0.5)], o)
		mech_squeeze('#forge:ingots/' + o, ['1x #forge:dusts/' + o], oi)

		squeeze('#forge:ores/' + o, ['1x #forge:dusts/' + o, Item.of('#forge:dusts/' + o).chance(0.75)], o)
		squeeze('#forge:ingots/' + o, ['1x #forge:dusts/' + o], oi)

		spirit_crusher('#forge:ores/' + o, '2x #forge:dusts/' + o, 200, o)
		spirit_crusher('#forge:ingots/' + o, '1x #forge:dusts/' + o, 200, oi)

		crumbling('#forge:ores/' + o, '2x #forge:dusts/' + o, 'naturesaura:overworld', 2000, 200, o)
		crumbling('#forge:ingots/' + o, '1x #forge:dusts/' + o, 'naturesaura:overworld', 2000, 200, oi)

		event.recipes.immersiveengineering.crusher('3x #forge:dusts/' + o, '#forge:ores/' + o, [Item.of('1x #forge:dusts/' + o).chance(0.25)]).id('immersiveengineering:crusher/' + o)
		event.recipes.immersiveengineering.crusher('#forge:dusts/' + o, '#forge:ingots/' + o).id('immersiveengineering:crusher/' + oi)
	})

	multiSmelt('#forge:ingots/platinum', '#forge:dusts/platinum', true, 'dust_to_platinum_ingot')

	gems_rare.forEach(o => {
		let og = o + '_gems_to_dust'
		if (['emerald', 'diamond', 'quartz', 'arcane_crystal', 'sapphire', 'dark_gem', 'ender'].includes(o)) {
			force_grind('#forge:ores/' + o, ['2x #forge:gems/' + o, '1x #forge:gems/' + o], 0.15, 0.2, 800, o)
			force_grind('#forge:gems/' + o, ['1x #forge:dusts/' + o], 0.0, 0.2, 800, og)

			mech_squeeze('#forge:ores/' + o, ['2x #forge:gems/' + o, Item.of('#forge:dusts/' + o).chance(0.5)], o)
			mech_squeeze('#forge:gems/' + o, ['1x #forge:dusts/' + o], og)

			squeeze('#forge:ores/' + o, ['1x #forge:gems/' + o, Item.of('#forge:dusts/' + o).chance(0.75)], o)
			squeeze('#forge:gems/' + o, ['1x #forge:dusts/' + o], og)

			spirit_crusher('#forge:ores/' + o, '2x #forge:gems/' + o, 200, o)
			spirit_crusher('#forge:gems/' + o, '1x #forge:dusts/' + o, 200, og)

			crumbling('#forge:ores/' + o, '3x #forge:gems/' + o, 'naturesaura:overworld', 2000, 200, o)
			crumbling('#forge:gems/' + o, '1x #forge:dusts/' + o, 'naturesaura:overworld', 2000, 200, og)

			event.recipes.immersiveengineering.crusher('3x #forge:gems/' + o, '#forge:ores/' + o, [Item.of('1x #forge:dusts/' + o).chance(0.25)]).id('immersiveengineering:crusher/' + o)
			event.recipes.immersiveengineering.crusher('1x #forge:dusts/' + o, '#forge:gems/' + o).id('immersiveengineering:crusher/' + og)
		}
		if (!['emerald', 'diamond', 'quartz', 'arcane_crystal', 'sapphire', 'dark_gem', 'ender'].includes(o)) {
			force_grind('#forge:ores/' + o, ['2x #forge:gems/' + o, '1x #forge:gems/' + o], 0.1, 0.2, 800, o)

			mech_squeeze('#forge:ores/' + o, ['2x #forge:gems/' + o, Item.of('#forge:gems/' + o).chance(0.5)], o)

			squeeze('#forge:ores/' + o, ['1x #forge:gems/' + o, Item.of('#forge:gems/' + o).chance(0.75)], o)

			spirit_crusher('#forge:ores/' + o, '2x #forge:gems/' + o, 200, o)

			crumbling('#forge:ores/' + o, '3x #forge:gems/' + o, 'naturesaura:overworld', 2000, 200, o)

			event.recipes.immersiveengineering.crusher('3x #forge:gems/' + o, '#forge:ores/' + o, [Item.of('2x #forge:gems/' + o).chance(0.25)]).id('immersiveengineering:crusher/' + o)
		}
	})

	gems_common.forEach(o => {
		if (['redstone'].includes(o)) {
			force_grind('#forge:ores/' + o, ['8x #forge:dusts/' + o, '4x #forge:dusts/' + o], 0.25, 0.2, 800, o)

			mech_squeeze('#forge:ores/' + o, ['8x #forge:dusts/' + o, Item.of('#forge:dusts/' + o, 4).chance(0.5)], o)

			squeeze('#forge:ores/' + o, ['4x #forge:dusts/' + o, Item.of('#forge:dusts/' + o, 2).chance(0.75)], o)

			spirit_crusher('#forge:ores/' + o, '9x #forge:dusts/' + o, 200, o)

			crumbling('#forge:ores/' + o, '10x #forge:dusts/' + o, 'naturesaura:overworld', 2000, 200, o)

			event.recipes.immersiveengineering.crusher('12x #forge:dusts/' + o, '#forge:ores/' + o, [Item.of('6x #forge:dusts/' + o).chance(0.15)]).id('immersiveengineering:crusher/' + o)
		}
		let oge = o + '_to_dust'
		if (['lapis', 'dimensional', 'sulfur', 'coke'].includes(o)) {
			force_grind('#forge:gems/' + o, ['1x #forge:dusts/' + o], 0.0, 0.2, 800, oge)

			mech_squeeze('#forge:gems/' + o, ['1x #forge:dusts/' + o], oge)

			squeeze('#forge:gems/' + o, ['1x #forge:dusts/' + o], oge)

			spirit_crusher('#forge:gems/' + o, '1x #forge:dusts/' + o, 200, oge)

			crumbling('#forge:gems/' + o, '1x #forge:dusts/' + o, 'naturesaura:overworld', 2000, 200, oge)

			event.recipes.immersiveengineering.crusher('#forge:dusts/' + o, '#forge:gems/' + o).id('immersiveengineering:crusher/' + oge)
		}
		if (!['redstone', 'coke'].includes(o)) {
			force_grind('#forge:ores/' + o, ['5x #forge:gems/' + o, '2x #forge:gems/' + o], 0.50, 0.2, 800, o)

			mech_squeeze('#forge:ores/' + o, ['5x #forge:gems/' + o, Item.of('#forge:gems/' + o, 3).chance(0.5)], o)

			squeeze('#forge:ores/' + o, ['4x #forge:gems/' + o, Item.of('#forge:gems/' + o, 1).chance(0.75)], o)

			spirit_crusher('#forge:ores/' + o, '8x #forge:gems/' + o, 200, o)

			crumbling('#forge:ores/' + o, '8x #forge:gems/' + o, 'naturesaura:overworld', 2000, 200, o)

			event.recipes.immersiveengineering.crusher('8x #forge:gems/' + o, '#forge:ores/' + o, [Item.of('3x #forge:gems/' + o).chance(0.15)]).id('immersiveengineering:crusher/' + o)
		}
	})

	coals.push('charcoal');

	coals.forEach(o => {
		let oco = o + '_to_dust'
		if (['coal'].includes(o)) {
			force_grind('#forge:ores/' + o, ['3x #minecraft:coals/' + o, '2x #minecraft:coals/' + o], 0.35, 0.2, 800, o)
			force_grind('#minecraft:coals/' + o, ['1x #forge:dusts/' + o], 0.0, 0.2, 800, oco)

			mech_squeeze('#forge:ores/' + o, ['3x #minecraft:coals/' + o, Item.of('#forge:dusts/' + o, 2).chance(0.5)], o)
			mech_squeeze('#minecraft:coals/' + o, ['1x #forge:dusts/' + o], oco)

			squeeze('#forge:ores/' + o, ['2x #minecraft:coals/' + o, Item.of('#forge:dusts/' + o, 1).chance(0.75)], o)
			squeeze('#minecraft:coals/' + o, ['1x #forge:dusts/' + o], oco)

			spirit_crusher('#forge:ores/' + o, '4x #minecraft:coals/' + o, 200, o)
			spirit_crusher('#minecraft:coals/' + o, '1x #forge:dusts/' + o, 200, oco)

			crumbling('#forge:ores/' + o, '5x #minecraft:coals/' + o, 'naturesaura:overworld', 2000, 200, o)
			crumbling('#minecraft:coals/' + o, '1x #forge:dusts/' + o, 'naturesaura:overworld', 2000, 200, oco)

			event.recipes.immersiveengineering.crusher('5x #minecraft:coals/' + o, '#forge:ores/' + o, [Item.of('2x #forge:dusts/' + o).chance(0.15)]).id('immersiveengineering:crusher/' + o)
			event.recipes.immersiveengineering.crusher('#forge:dusts/' + o, '#minecraft:coals/' + o).id('immersiveengineering:crusher/' + oco)
		}
		if (['charcoal'].includes(o)) {
			force_grind('#minecraft:coals/' + o, ['1x #forge:dusts/' + o], 0.0, 0.2, 800, oco)

			mech_squeeze('#minecraft:coals/' + o, ['1x #forge:dusts/' + o], oco)

			squeeze('#minecraft:coals/' + o, ['1x #forge:dusts/' + o], oco)

			spirit_crusher('#minecraft:coals/' + o, '1x #forge:dusts/' + o, 200, oco)

			crumbling('#minecraft:coals/' + o, '1x #forge:dusts/' + o, 'naturesaura:overworld', 2000, 200, oco)

			event.recipes.immersiveengineering.crusher('#forge:dusts/' + o, '#minecraft:coals/' + o).id('immersiveengineering:crusher/' + oco)
		}
		if (!['coal', 'charcoal'].includes(o)) {
			force_grind('#forge:ores/' + o, ['3x #minecraft:coals/' + o, '2x #minecraft:coals/' + o], 0.35, 0.2, 800, o)

			mech_squeeze('#forge:ores/' + o, ['3x #minecraft:coals/' + o, Item.of('#minecraft:coals/' + o, 2).chance(0.5)], o)

			squeeze('#forge:ores/' + o, ['2x #minecraft:coals/' + o, Item.of('#minecraft:coals/' + o, 1).chance(0.75)], o)

			spirit_crusher('#forge:ores/' + o, '4x #minecraft:coals/' + o, 200, o)

			crumbling('#forge:ores/' + o, '5x #minecraft:coals/' + o, 'naturesaura:overworld', 2000, 200, o)

			event.recipes.immersiveengineering.crusher('5x #minecraft:coals/' + o, '#forge:ores/' + o, [Item.of('2x #minecraft:coals/' + o).chance(0.15)]).id('immersiveengineering:crusher/' + o)
		}
	})

	blocks.forEach(o => {
		if (o == 'end_stones') {
			let or = o.slice(0, 9)
			force_grind('#forge:' + o, ['2x #forge:dusts/' + or, '1x #forge:dusts/' + or], 0.05, 0.2, 800, or)

			mech_squeeze('#forge:' + o, ['2x #forge:dusts/' + or, Item.of('#forge:dusts/' + or, 1).chance(0.05)], or)

			squeeze('#forge:' + o, ['1x #forge:dusts/' + or, Item.of('#forge:dusts/' + or, 1).chance(0.75)], or)

			spirit_crusher('#forge:' + o, '2x #forge:dusts/' + or, 200, or)

			crumbling('#forge:' + o, '3x #forge:dusts/' + or, 'naturesaura:overworld', 2000, 200, or)

			event.recipes.immersiveengineering.crusher('3x #forge:dusts/' + or, '#forge:' + o, [Item.of('1x #forge:dusts/' + or).chance(0.1)]).id('immersiveengineering:crusher/' + o)
		}
		if (o == 'obsidian') {
			force_grind('minecraft:' + o, ['2x #forge:dusts/' + o, '1x #forge:dusts/' + o], 0.05, 0.2, 800, o)

			mech_squeeze('minecraft:' + o, ['2x #forge:dusts/' + o, Item.of('minecraft:' + o, 1).chance(0.05)], o)

			squeeze('minecraft:' + o, ['1x #forge:dusts/' + o, Item.of('minecraft:' + o, 1).chance(0.75)], o)

			spirit_crusher('minecraft:' + o, '2x #forge:dusts/' + o, 200, o)

			crumbling('minecraft:' + o, '3x #forge:dusts/' + o, 'naturesaura:overworld', 2000, 200, o)

			event.recipes.immersiveengineering.crusher('3x #forge:dusts/' + o, 'minecraft:' + o, [Item.of('1x minecraft:' + o).chance(0.05)]).id('immersiveengineering:crusher/' + o)
		}
	})

	//GRAVEL_FRAGMENTS
	ee_ores.forEach(o => {
		let oa = o.replace('mana', 'arcane')

		if (['emerald', 'diamond', 'sapphire', 'mana'].includes(o)) {
			event.recipes.bloodmagic.arc('2x #forge:gems/' + o, '#bloodmagic:gravels/' + oa, '#bloodmagic:arc/explosive').consumeIngredient(false).id('bloodmagic:arc/' + o + '_gems_from_gravel');
		}

		if (['dimensional', 'quartz', 'lapis', 'bitumen', 'sulfur'].includes(o)) {
			event.recipes.bloodmagic.arc('6x #forge:gems/' + o, '#bloodmagic:gravels/' + oa, '#bloodmagic:arc/explosive').consumeIngredient(false).id('bloodmagic:arc/' + o + '_gems_from_gravel');
		}

		if (['coal'].includes(o)) {
			event.recipes.bloodmagic.arc('4x #minecraft:coals/' + o, '#bloodmagic:gravels/' + oa, '#bloodmagic:arc/explosive').consumeIngredient(false).id('bloodmagic:arc/' + o + '_from_gravel');
		}

		event.recipes.bloodmagic.arc('3x #bloodmagic:fragments/' + oa, '#forge:ores/' + o, '#bloodmagic:arc/explosive').consumeIngredient(false).id('bloodmagic:arc/' + 'fragment_' + o);

		event.recipes.bloodmagic.arc('2x #bloodmagic:gravels/' + oa, '#bloodmagic:fragments/' + oa, '#bloodmagic:arc/resonator',
			[
				Item.of('1x #bloodmagic:tiny_dusts/corrupted').chance(0.05),
				Item.of('1x #bloodmagic:tiny_dusts/corrupted').chance(0.01)
			]).consumeIngredient(false).id('gravel_' + o);

		if (!['mana', 'bitumen', 'redstone', 'sulfur'].includes(o)) {
			event.recipes.bloodmagic.arc('2x #forge:dusts/' + o, '#bloodmagic:gravels/' + o, '#bloodmagic:arc/cuttingfluid').consumeIngredient(false).id('bloodmagic:arc/' + 'dust_' + o);
			event.recipes.bloodmagic.arc('2x #forge:dusts/' + o, '#forge:ores/' + o, '#bloodmagic:arc/cuttingfluid').consumeIngredient(false).id('bloodmagic:arc/' + o + '_dust_from_ore');
		}

		if (['redstone', 'sulfur'].includes(o)) {
			event.recipes.bloodmagic.arc('8x #forge:dusts/' + o, '#bloodmagic:gravels/' + o, '#bloodmagic:arc/cuttingfluid').consumeIngredient(false).id('bloodmagic:arc/' + 'dust_' + o);
			event.recipes.bloodmagic.arc('8x #forge:dusts/' + o, '#forge:ores/' + o, '#bloodmagic:arc/cuttingfluid').consumeIngredient(false).id('bloodmagic:arc/' + o + '_dust_from_ore');
		}

		if (!['mana', 'redstone', 'sulfur', 'bitumen'].includes(o)) {
			alchemy_cutting(['#forge:ores/' + o, '#bloodmagic:arc/cuttingfluid'], '2x #forge:dusts/' + o, 400, 200, 1, 'dust_' + o)
		}
		if (['redstone', 'sulfur'].includes(o)) {
			alchemy_cutting(['#forge:ores/' + o, '#bloodmagic:arc/cuttingfluid'], '8x #forge:dusts/' + o, 400, 200, 1, 'dust_' + o)
		}

		//ingots_from_dusts
		if (['thallasium', 'nebu', 'utherium', 'froststeel', 'cloggrum', 'regalium'].includes(o)) {
			multiSmelt('#forge:ingots/' + o, '#forge:dusts/' + o, true, o + '_from_dust')
		}
	})

	//ALLOYS
	ee_ores.push('platinum', 'brass', 'quicksilver', 'bronze', 'constantan', 'electrum', 'steel', 'invar', 'signalum', 'lumium', 'enderium');

	//CRUSHED_ORES
	ee_ores.forEach(o => {
		let oa = o.replace('mana', 'arcane')

		if (!['netherite_scrap'].includes(o)) {
			event.recipes.create.crushing([
				'5x #create:crushed_ores/' + oa
			], '#forge:storage_blocks/' + oa).id('create:crushing/block_of_' + oa)
		}

		if (!['mana', 'coal', 'emerald', 'diamond', 'sapphire', 'lapis', 'redstone', 'quartz', 'dimensional', 'bitumen', 'sulfur'].includes(o)) {
			event.recipes.createSplashing([
				'10x #forge:nuggets/' + o,
				Item.of('5x #forge:nuggets/' + o).withChance(0.5)
			], '#create:crushed_ores/' + o).id('create:splashing/crushed_' + o)

			//ingots_from_crushed_ores
			if (!['iron', 'gold', 'quicksilver', 'mana', 'coal', 'emerald', 'diamond', 'lapis', 'redstone', 'quartz', 'dimensional', 'sapphire', 'netherite_scrap', 'bitumen', 'sulfur'].includes(o)) {
				multiSmelt('#forge:ingots/' + o, '#create:crushed_ores/' + o, true, o)
			}
		}

		if (['mana', 'emerald', 'diamond', 'sapphire'].includes(o)) {
			event.recipes.createSplashing([
				'2x #forge:gems/' + o,
				Item.of('1x #forge:gems/' + o).withChance(0.25)
			], '#create:crushed_ores/' + oa).id('create:splashing/crushed_' + oa)
		}

		if (['lapis', 'quartz', 'dimensional', 'bitumen', 'sulfur'].includes(o)) {
			event.recipes.createSplashing([
				'4x #forge:gems/' + o,
				Item.of('3x #forge:gems/' + o).withChance(0.25)
			], '#create:crushed_ores/' + o).id('create:splashing/crushed_' + o)
		}

		event.recipes.createSplashing([
			'6x #forge:dusts/redstone',
			Item.of('2x #forge:dusts/redstone').withChance(0.25)
		], '#create:crushed_ores/redstone').id('create:splashing/crushed_redstone')

		event.recipes.createSplashing([
			'3x #minecraft:coals/coal',
			Item.of('3x #minecraft:coals/coal').withChance(0.25)
		], '#create:crushed_ores/coal').id('create:splashing/crushed_coal')
	})

	ee_ores.splice(-10)

	//CRUSHING_ORES
	ee_ores.forEach(o => {
		let oa = o.replace('mana', 'arcane')

		event.recipes.create.crushing([
			'1x #create:crushed_ores/' + oa,
			Item.of('2x #create:crushed_ores/' + oa).withChance(0.30),
			Item.of('1x woot:xpsplinter').withChance(0.30)
		], '#forge:ores/' + oa).id('create:crushing/' + oa + '_ore')
	})
})