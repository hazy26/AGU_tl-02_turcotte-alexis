/* 
    10. NOW YOU SEE ME 2
*/
horseshoe = new RGraph.SVG.Horseshoe({
    id: 'movieTime-10',
    min: 0,
    max: 200,
    value: 129,
    color : '#8e5ea2',
    options: {
        labelsCenterUnitsPost: ' min.',
        textSize: 14,
        width: 3,
        marginLeft: 0,
        marginBottom: 0
    }
}).grow();




/* 
    10. NOW YOU SEE ME 2
*/
new RGraph.HProgress({
    id: 'budget-10',
    min: 0,
    max: 240,
    value: 120,
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
        marginRight: 1, 
        marginTop: 20
    }
}).draw();