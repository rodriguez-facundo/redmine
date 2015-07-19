var executeOnSelection = function(callback) {	var csel = G.getSelection()[0];	if (typeof csel !== 'undefined') {		callback(csel);	} else {		G				.addWidget(1)				.setMessage(						'No cell selected! Please select one of the cells and click here for information on its properties.');	}};var showSummaryTreeView = function(csel) {	var tv = G.addWidget(3);	if (typeof csel.electrical.ModelTree.Summary !== 'undefined') {		tv.setData(csel.electrical.ModelTree.Summary.getChildren(), {			expandNodes : true		});	} else {		tv.registerEvent(Events.ModelTree_populated, function() {			tv.setData(csel.electrical.ModelTree.Summary.getChildren(), {				expandNodes : true			});			tv.unregisterEvent(Events.ModelTree_populated);		});		csel.electrical.getModelTree();	}};var showChannelTreeView = function(csel) {	var tv = G.addWidget(3);	if (typeof csel.electrical.ModelTree.Summary !== 'undefined') {		tv.setData(csel.getSubNodesOfDomainType('IonChannel'), {			labelName : 'id'		}).setName('Ion Channels');	} else {		tv.registerEvent(Events.ModelTree_populated, function() {			tv.setData(csel.getSubNodesOfDomainType('IonChannel'), {				labelName : 'id'			}).setName('Ion Channels');			tv.unregisterEvent(Events.ModelTree_populated);		});		csel.electrical.getModelTree();	}};var showVisualTreeView = function(csel) {	G.addWidget(3).setData(csel.electrical.VisualizationTree, {		expandNodes : true	});};var barDef = $CONTROL_PANEL;G.addWidget(7).renderBar('OSB Control Panel', barDef['OSB Control Panel']);$ENTER_ID.electrical.select();ButtonBar1.setPosition(88, 0);