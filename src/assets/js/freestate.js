/* 
    8. Free State of Jones
*/
horseshoe = new RGraph.SVG.Horseshoe({
    id: 'movieTime-8',
    min: 0,
    max: 200,
    value: 139,
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
    8, FREE STATE OF JONES
*/
new RGraph.HProgress({
    id: 'budget-8',
    min: 0,
    max: 240,
    value: 50,
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