//priority: 200

onEvent('item.registry', event => {
	
	const occDummies = [
	'Craft Infusion Pedestal',
	'Craft Location Link Book'
    ];
	
	//SIZE POWDER
	event.create('dust_size_down').displayName('Stew Of Ensmallening').maxDamage(16).unstackable()
	event.create('dust_size_up').displayName('Stew Of Enbiggening').maxDamage(16).unstackable()
	
	//UNSTABLE SHARDS
	event.create('unstable_endershard').displayName('§6Unstable Ender Shard').tooltip('§eTeleports the user to a random position').unstackable()
	event.create('extremely_unstable_endershard').displayName('§6Extremely Unstable Ender Shard').tooltip('§4Teleports the user to a random dimension').unstackable()
	
	//RAINBOW
	event.create('uninspiring_rainbow_gem').texture("kubejs:item/uninspiring_rainbow_gem").type('create:sequenced_assembly').displayName('Uninspiring Rainbow Gem')
	event.create('rainbow_gem').texture("kubejs:item/rainbow_gem").displayName('Rainbow Gem')

	//ICON
	event.create('cc5_icon').displayName('CC5 Icon')
	
	//PLATINUM
	event.create('platinum_nugget').displayName('Platinum Nugget').texture("kubejs:item/metals/platinum_nugget")
	event.create('platinum_dust').displayName('Platinum Dust').texture("kubejs:item/metals/platinum_dust")
	
	//LOOT BOXES
	event.create('affixgear1').displayName('§7Suprise Box').rarity(RARITY_COMMON).texture("kubejs:item/loot_boxes/affixgear1")
	event.create('affixgear2').displayName('§aSuprise Box').rarity(RARITY_UNCOMMON).texture("kubejs:item/loot_boxes/affixgear2")
	event.create('affixgear3').displayName('§9Suprise Box').rarity(RARITY_RARE).texture("kubejs:item/loot_boxes/affixgear3")
	event.create('affixgear4').displayName('§5Suprise Box').rarity(RARITY_EPIC).texture("kubejs:item/loot_boxes/affixgear4")
	event.create('affixgear5').displayName('§6Suprise Box').rarity(RARITY_EPIC).texture("kubejs:item/loot_boxes/affixgear5").glow(true)
	event.create('affixgear6').displayName('§4Suprise Box').rarity(RARITY_EPIC).texture("kubejs:item/loot_boxes/affixgear6").glow(true)
	
	event.create('box_of_food').displayName('§6Gluttonous Chest').rarity(RARITY_UNCOMMON).texture("kubejs:item/loot_boxes/box_of_food")
	
	event.create('floral_box').displayName('§aFloral Box').rarity(RARITY_UNCOMMON).texture("kubejs:item/loot_boxes/floral_box")
	event.create('druidic_box').displayName('§8Druidic Box').rarity(RARITY_UNCOMMON).texture("kubejs:item/loot_boxes/druidic_box")
	
	//MISC
	event.create('golem_summoner').displayName('§dRusted Golem').unstackable().glow(true)
	event.create('orb_of_spectral_sight').displayName('§6Orb Of Spectral Sight').tooltip('§dGrants you Spectral Vision').tooltip('Duration: 5:00').rarity(RARITY_UNCOMMON)
	event.create('purifying_rune').displayName('§3Shifting Rune').tooltip('Used to reset modifiers using the §6Smithing Table').glow(true)
	event.create('delight_builder').displayName('§bBuilder\'s Order').tooltip('§eA Builder\'s forgotten order shipped by plane').tooltip('§9§oOnly works in the Overworld').rarity(RARITY_UNCOMMON)
	event.create('essence_cursed').displayName('§6Cursed Rift').tooltip('\u18B2 §5Summons a random Gateway of random size spawning mobs').rarity(RARITY_EPIC)
	
	event.create('dreadful_contract').displayName('§6Dreadful Contract').tooltip('§6Teleports you back to your death point').tooltip('\u18B2 §cHas a small chance of giving you a bad effect').rarity(RARITY_UNCOMMON)
	event.create('anointed_contract').displayName('§6Anointed Contract').tooltip('§6Teleports you back to your death point').glow(true).rarity(RARITY_EPIC)
	
	let cores = ["Pearlescent", "Obsolescent", "Luminescent", "Effervescent", "Deliquescent", "Viridescent", "Exquisite"];
	cores.forEach(name => {
		let core_id = name.toLowerCase()
		event.create(core_id + '_core').parentModel('kubejs:item' + core_id + '_core').displayName('§6' + name + ' Core')
	})
	
	let geodes = ["Curdled", "Varicose", "Opulent", "Primordial", "Volatile", "Decrepit", "Blighted", "Tarnished", "Writhed"];
	geodes.forEach(name => {
		let geode_id = name.toLowerCase()
		event.create(geode_id + '_geode').texture('kubejs:item/geodes/' + geode_id + '_geode').displayName('§b' + name + ' Geode')
	})
	
	//OCC_RITUAL
	occDummies.forEach(d => {
			let r = d.replace(/\s/g, '_').toLowerCase()
			event.create(r).type('occultism:ritual_dummy').group('KubeJS').texture('kubejs:item/ritual_dummy');
		});
})

events.listen('block.registry', event => {
	
  event.create('uninspiring_rainbow_block').displayName('§dRainbow Block').material('iron').hardness(2).requiresTool(true)
  event.create('reanimated_rainbow_block').displayName('§dAnimated Rainbow Catalyst').material('iron').hardness(2).lightLevel(1).requiresTool(true)
  
  event.create('lootblock_builder').displayName('§bBuilder\'s Supply')  .material('wood').hardness(1)
  
  event.create('fossilized_remains').displayName('§8Fossilized Remains').material('stone').hardness(2).requiresTool(true)  
  event.create('evershifting_soil').displayName('§bEvershifting Stellar Soil').material('dirt').hardness(0.6)
})
