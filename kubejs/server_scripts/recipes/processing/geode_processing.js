onEvent('recipes', event => {
	
	let mech_squeeze = (input, results, id) => {
		event.recipes.integrateddynamics.mechanical_squeezer({
			item: Ingredient.of(input).toJson(),
			result: {
				items: results.map(r => Item.of(r).toResultJson())
			},
			duration: 40
		}).id('integrateddynamics:mechanical_squeezer/ore/' + id)
	}

			const geodeData = [{
					geodeType: 'curdled',
					firstOutput: {
						name: 'redstone',
						amount: '5',
						type: 'ores_cluster',
						subtract: '1'
					},
					clusters: [],
					gems: [{
						name: 'runestone',
						amount: '6'
					}],
					specialOutput: [{
						name: 'evilcraft:blood_waxed_coal',
						amount: '8'
					}],
					lastOutput: {
						name: 'redstone',
						amount: '3',
						type: 'ores_cluster',
						subtract: '1'
					}
				},
				{
					geodeType: 'varicose',
					firstOutput: {
						name: 'quartz',
						amount: '5',
						type: 'ores_cluster',
						subtract: '1'
					},
					clusters: [{
							name: 'cobalt',
							amount: '6'
						}
					],
					gems: [],
					specialOutput: [{
						name: '#forge:chunks/redstone',
						amount: '8'
					}],
					lastOutput: {
						name: 'prismarine',
						amount: '12',
						type: 'dusts',
						subtract: '3'
					}
				},
				{
					geodeType: 'opulent',
					firstOutput: {
						name: 'diamond',
						amount: '5',
						type: 'ores_cluster',
						subtract: '1'
					},
					clusters: [{
							name: 'lapis',
							amount: '6'
						},
						{
							name: 'iron',
							amount: '8'
						}
					],
					gems: [],
					specialOutput: [],
					lastOutput: {
						name: 'gold',
						amount: '3',
						type: 'ores_cluster',
						subtract: '1'
					}
				},
				{
					geodeType: 'primordial',
					firstOutput: {
						name: 'zinc',
						amount: '5',
						type: 'ores_cluster',
						subtract: '1'
					},
					clusters: [{
							name: 'dimensional',
							amount: '6'
						},
						{
							name: 'sapphire',
							amount: '8'
						}
					],
					gems: [],
					specialOutput: [],
					lastOutput: {
						name: 'zinc',
						amount: '3',
						type: 'ores_cluster',
						subtract: '1'
					}
				},
				{
					geodeType: 'volatile',
					firstOutput: {
						name: 'copper',
						amount: '5',
						type: 'ores_cluster',
						subtract: '1'
					},
					clusters: [{
							name: 'sulfur',
							amount: '6'
						}
					],
					gems: [{
							name: 'force',
							amount: '16'
					}],
					specialOutput: [],
					lastOutput: {
						name: 'fiery_glass',
						amount: '6',
						type: 'gems',
						subtract: '2'
					}
				},
				{
					geodeType: 'decrepit',
					firstOutput: {
						name: 'xpetrified_ore',
						amount: '5',
						type: 'gems',
						subtract: '1'
					},
					clusters: [{
							name: 'emerald',
							amount: '8'
						},
						{
							name: 'uranium',
							amount: '8'
						}
					],
					gems: [],
					specialOutput: [],
					lastOutput: {
						name: 'xpetrified_ore',
						amount: '6',
						type: 'gems',
						subtract: '2'
					}
				},
				{
					geodeType: 'blighted',
					firstOutput: {
						name: 'iridium',
						amount: '5',
						type: 'ores_cluster',
						subtract: '1'
					},
					clusters: [{
							name: 'aluminum',
							amount: '6'
						},
						{
							name: 'tin',
							amount: '8'
						}
					],
					gems: [],
					specialOutput: [],
					lastOutput: {
						name: 'iridium',
						amount: '3',
						type: 'ores_cluster',
						subtract: '1'
					}
				},
				{
					geodeType: 'tarnished',
					firstOutput: {
						name: 'lead',
						amount: '5',
						type: 'ores_cluster',
						subtract: '1'
					},
					clusters: [{
							name: 'arcane',
							amount: '6'
						},
						{
							name: 'silver',
							amount: '8'
						}
					],
					gems: [],
					specialOutput: [],
					lastOutput: {
						name: 'saltpeter',
						amount: '12',
						type: 'dusts',
						subtract: '3'
					}
				},
				{
					geodeType: 'writhed',
					firstOutput: {
						name: 'nickel',
						amount: '5',
						type: 'ores_cluster',
						subtract: '1'
					},
					clusters: [{
							name: 'coal',
							amount: '6'
						}
					],
					gems: [{
							name: 'rock_root',
							amount: '16'
					}],
					specialOutput: [],
					lastOutput: {
						name: 'dark_gem',
						amount: '6',
						type: 'gems',
						subtract: '2'
					}
				}
			];

			//GEODE_PROCESSING
			for (let i = 0; i < geodeData.length; i++) {
				let g = geodeData[i];

				let mechSqueezeOutputs = [];
				let crusherOutputs = [];
				let arcOutputs = [];
				let crushingWOutputs = [];
				
						let firstOutput = g.firstOutput;
						
						let amountDifferenceF = parseInt(firstOutput.amount) - parseInt(firstOutput.subtract);
						let amountF = firstOutput.amount;
						
						mechSqueezeOutputs.push(`${amountDifferenceF}x #forge:${firstOutput.type}/${firstOutput.name}`);
						crushingWOutputs.push(`${amountF}x #forge:${firstOutput.type}/${firstOutput.name}`);

				if (g.clusters.length > 0) {
					let clustersResults = g.clusters.map(cluster => `${cluster.amount}x #forge:ores_cluster/${cluster.name}`);
					let arcClustersResults = g.clusters.map(cluster => Item.of(`#forge:ores_cluster/${cluster.name}`, Math.floor(cluster.amount)).chance(0.45));
					for (let j = 0; j < clustersResults.length; j++) {
						mechSqueezeOutputs.push(clustersResults[j]);
						crusherOutputs.push(clustersResults[j]);
						arcOutputs.push(arcClustersResults[j]);
						crushingWOutputs.push(clustersResults[j]);
					}
				}

				if (g.gems.length > 0) {
					let gemsResults = g.gems.map(gem => `${gem.amount}x #forge:gems/${gem.name}`);
					let arcGemsResults = g.gems.map(gem => Item.of(`#forge:gems/${gem.name}`, Math.floor(gem.amount)).chance(0.45));
					for (let j = 0; j < gemsResults.length; j++) {
						mechSqueezeOutputs.push(gemsResults[j]);
						crusherOutputs.push(gemsResults[j]);
						arcOutputs.push(arcGemsResults[j]);
						crushingWOutputs.push(gemsResults[j]);
					}
				}

				if (g.specialOutput.length > 0) {
					let specialOutputResults = g.specialOutput.map(output => `${output.amount}x ${output.name}`);
					let arcSpecialOutputResults = g.specialOutput.map(output => Item.of(`${output.name}`, Math.floor(output.amount)).chance(0.45));
					for (let j = 0; j < specialOutputResults.length; j++) {
						mechSqueezeOutputs.push(specialOutputResults[j]);
						crusherOutputs.push(specialOutputResults[j]);
						arcOutputs.push(arcSpecialOutputResults[j]);
						crushingWOutputs.push(specialOutputResults[j]);
					}
				}
				
						let lastOutput = g.lastOutput;							
						let amountDifferenceL = parseInt(lastOutput.amount) - parseInt(lastOutput.subtract);
						let amountL = lastOutput.amount;
						
						mechSqueezeOutputs.push(Item.of(`#forge:${lastOutput.type}/${lastOutput.name}`, Math.floor(amountDifferenceL)).chance(0.25));
						crusherOutputs.push(Item.of(`#forge:${lastOutput.type}/${lastOutput.name}`, Math.floor(amountL)).chance(0.45));
						arcOutputs.push(Item.of(`#forge:${lastOutput.type}/${lastOutput.name}`, Math.floor(amountL)).chance(0.35));
						crushingWOutputs.push(Item.of(`#forge:${lastOutput.type}/${lastOutput.name}`, Math.floor(amountL)).withChance(0.65));
				
				mech_squeeze(`kubejs:${g.geodeType}_geode`, mechSqueezeOutputs, `${g.geodeType}_geode`);

				event.recipes.immersiveengineering.crusher(`${amountF}x #forge:${firstOutput.type}/${firstOutput.name}`, `kubejs:${g.geodeType}_geode`, crusherOutputs).id(`immersiveengineering:crusher/${g.geodeType}_geode`);
				
				event.recipes.bloodmagic.arc(`${amountF}x #forge:${firstOutput.type}/${firstOutput.name}`, `kubejs:${g.geodeType}_geode`, '#bloodmagic:arc/resonator', arcOutputs).consumeIngredient(false).id('bloodmagic:arc/' + g.geodeType + '_geode');
				
				event.recipes.create.crushing(crushingWOutputs, `kubejs:${g.geodeType}_geode`).id('create:crushing/' + g.geodeType)
			}
});