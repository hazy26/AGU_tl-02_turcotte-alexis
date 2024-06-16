/* 
    2. THE LEGEND OF TARZAN
*/
horseshoe = new RGraph.SVG.Horseshoe({
    id: 'movieTime-2',
    min: 0,
    max: 200,
    value: 110,
    color : 'black',
    options: {
        labelsCenterUnitsPost: ' min.',
        textSize: 14,
        width: 3,
        marginLeft: 0,
        marginBottom: 0
    }
}).grow();




/* 
    2. THE LEGEND OF TARZAN
*/
new RGraph.HProgress({
    id: 'budget-2',
    min: 40,
    max: 240,
    value: 180,
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