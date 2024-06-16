/* 
    1. FINDING DORY
*/
new RGraph.HProgress({
    id: 'budget-1',
    min: 40,
    max: 240,
    value: 200,
    options: {
        colors: ['#172554'],
        textSize: 14,
        corners: 'round',
        cornersRoundRadius: 5,
        labelsCount: 0,
        labelsInner: true,
        labelsInnerBorder: false,
        labelsInnerUnitsPost: ' M$',
        labelsInnerSize: 16,
        labelsInnerColor: '#dbeafe',
        labelsInnerBackgroundFill: '#172554',
        marginBottom: 60,
        marginLeft: 1,
        marginRight: 30, 
        marginTop: 20
    }
}).draw();




/* 
    1. FINDING DORY
*/
horseshoe = new RGraph.SVG.Horseshoe({
    id: 'movieTime-1',
    min: 0,
    max: 200,
    value: 97,
    color : '#172554',
    options: {
        labelsCenterUnitsPost: ' min.',
        textSize: 14,
        width: 3,
        marginLeft: 0,
        marginBottom: 0
    }
}).grow();
