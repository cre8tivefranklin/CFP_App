

google.charts.load('current', {packages:['wordtree']});
google.charts.setOnLoadCallback(drawChart_f);



function drawChart_f() {

  var dataf =new google.visualization.arrayToDataTable([
    ['id', 'childLabel', 'parent', 'size', { role: 'style' }],
   [0,'CFP',-1,5,'green'],

   [1,'Food',0,2.5,'black'],
   [4,'f0',1,1,'blue'],
   [6,'f1',1,1,'blue'],
   [9,'f1_0',6,1,'blue'],
   [10,'f1_1',6,1,'blue'],
   [11,'f1_0_0',9,1,'blue'],
   [12,'f1_0_1',9,1,'blue'],
   [13,'f1_0_2',9,1,'blue'],
   [7,'f0_0',4,1,'blue'],
   [8,'f0_1',4,1,'blue'],

   [2,'Energy',0,2.5,'black'],
   [5,'gas',2,1,'blue'],

   [3,'Transportation',0,2.5,'black'],

 

  ]);

  var optionsf = {
    colors: ['black', 'blue', 'red'],
          wordtree: {
            format: 'explicit',
            type: 'suffix'
          }
  };

  var chartf = new google.visualization.WordTree(document.getElementById('wordtree_basic_food'));
  chartf.draw(dataf, optionsf);

}
