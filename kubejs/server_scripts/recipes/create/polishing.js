onEvent('recipes', event => {

event.recipes.createSandpaperPolishing('dustrial_decor:sheet_metal', 'dustrial_decor:rusty_sheet_metal').id('create:sandpaper_polishing/rusty_iron_plate')
event.recipes.createSandpaperPolishing('#forge:storage_blocks/iron', 'dustrial_decor:rusty_iron_block').id('create:sandpaper_polishing/rusty_iron_block')
event.recipes.createSandpaperPolishing('#forge:ingots/iron', 'dustrial_decor:rusty_iron_ingot').id('create:sandpaper_polishing/rusty_iron_ingot')
event.recipes.createSandpaperPolishing('#forge:nuggets/iron', 'dustrial_decor:rusty_iron_nugget').id('create:sandpaper_polishing/rusty_iron_nugget')

event.recipes.createSandpaperPolishing('forbidden_arcanus:ender_pearl_fragment', '#forge:gems/ender').id('create:sandpaper_polishing/ender_shard')
event.recipes.createSandpaperPolishing('betterendforge:amber_gem', 'betterendforge:raw_amber').id('create:sandpaper_polishing/raw_amber')
})