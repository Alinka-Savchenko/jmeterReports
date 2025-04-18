/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 298.0, "minX": 0.0, "maxY": 81433.0, "series": [{"data": [[0.0, 298.0], [0.1, 359.0], [0.2, 372.0], [0.3, 478.0], [0.4, 526.0], [0.5, 556.0], [0.6, 564.0], [0.7, 573.0], [0.8, 2417.0], [0.9, 2430.0], [1.0, 2464.0], [1.1, 2490.0], [1.2, 2511.0], [1.3, 2515.0], [1.4, 2521.0], [1.5, 2527.0], [1.6, 2527.0], [1.7, 2530.0], [1.8, 2534.0], [1.9, 2536.0], [2.0, 2539.0], [2.1, 2541.0], [2.2, 2546.0], [2.3, 2552.0], [2.4, 2557.0], [2.5, 2567.0], [2.6, 2576.0], [2.7, 2586.0], [2.8, 5269.0], [2.9, 5273.0], [3.0, 5278.0], [3.1, 5280.0], [3.2, 5283.0], [3.3, 5284.0], [3.4, 5287.0], [3.5, 5288.0], [3.6, 5290.0], [3.7, 5291.0], [3.8, 5292.0], [3.9, 5293.0], [4.0, 5296.0], [4.1, 5296.0], [4.2, 5298.0], [4.3, 5300.0], [4.4, 5301.0], [4.5, 5302.0], [4.6, 5303.0], [4.7, 5305.0], [4.8, 5305.0], [4.9, 5307.0], [5.0, 5308.0], [5.1, 5310.0], [5.2, 5310.0], [5.3, 5310.0], [5.4, 5311.0], [5.5, 5312.0], [5.6, 5313.0], [5.7, 5314.0], [5.8, 5315.0], [5.9, 5317.0], [6.0, 5318.0], [6.1, 5320.0], [6.2, 5321.0], [6.3, 5322.0], [6.4, 5324.0], [6.5, 5326.0], [6.6, 5328.0], [6.7, 5329.0], [6.8, 5330.0], [6.9, 5332.0], [7.0, 5334.0], [7.1, 5335.0], [7.2, 5337.0], [7.3, 5338.0], [7.4, 5340.0], [7.5, 5342.0], [7.6, 5342.0], [7.7, 5345.0], [7.8, 5348.0], [7.9, 5351.0], [8.0, 5353.0], [8.1, 5357.0], [8.2, 5360.0], [8.3, 5364.0], [8.4, 5371.0], [8.5, 5375.0], [8.6, 5382.0], [8.7, 6687.0], [8.8, 6692.0], [8.9, 6697.0], [9.0, 6703.0], [9.1, 6706.0], [9.2, 6709.0], [9.3, 6712.0], [9.4, 6714.0], [9.5, 6720.0], [9.6, 6726.0], [9.7, 6727.0], [9.8, 6733.0], [9.9, 6739.0], [10.0, 6743.0], [10.1, 6750.0], [10.2, 6756.0], [10.3, 6761.0], [10.4, 6768.0], [10.5, 6773.0], [10.6, 7216.0], [10.7, 8283.0], [10.8, 8389.0], [10.9, 8395.0], [11.0, 8408.0], [11.1, 8461.0], [11.2, 8475.0], [11.3, 8482.0], [11.4, 8486.0], [11.5, 8487.0], [11.6, 8489.0], [11.7, 8490.0], [11.8, 8492.0], [11.9, 8493.0], [12.0, 8495.0], [12.1, 8496.0], [12.2, 8497.0], [12.3, 8498.0], [12.4, 8499.0], [12.5, 8500.0], [12.6, 8502.0], [12.7, 8503.0], [12.8, 8504.0], [12.9, 8505.0], [13.0, 8508.0], [13.1, 8510.0], [13.2, 8512.0], [13.3, 8513.0], [13.4, 8514.0], [13.5, 8516.0], [13.6, 8518.0], [13.7, 8518.0], [13.8, 8519.0], [13.9, 8521.0], [14.0, 8524.0], [14.1, 8527.0], [14.2, 8529.0], [14.3, 8530.0], [14.4, 8531.0], [14.5, 8533.0], [14.6, 8540.0], [14.7, 8550.0], [14.8, 8878.0], [14.9, 8913.0], [15.0, 8936.0], [15.1, 8967.0], [15.2, 8972.0], [15.3, 8979.0], [15.4, 8984.0], [15.5, 8988.0], [15.6, 8991.0], [15.7, 8993.0], [15.8, 8996.0], [15.9, 8998.0], [16.0, 9000.0], [16.1, 9002.0], [16.2, 9004.0], [16.3, 9007.0], [16.4, 9009.0], [16.5, 9011.0], [16.6, 9014.0], [16.7, 9017.0], [16.8, 9019.0], [16.9, 9022.0], [17.0, 9025.0], [17.1, 9031.0], [17.2, 9033.0], [17.3, 9038.0], [17.4, 9040.0], [17.5, 9043.0], [17.6, 9046.0], [17.7, 9050.0], [17.8, 9051.0], [17.9, 9058.0], [18.0, 9064.0], [18.1, 9070.0], [18.2, 9077.0], [18.3, 9087.0], [18.4, 9112.0], [18.5, 9131.0], [18.6, 9135.0], [18.7, 9151.0], [18.8, 9173.0], [18.9, 9180.0], [19.0, 9183.0], [19.1, 9190.0], [19.2, 9193.0], [19.3, 9197.0], [19.4, 9201.0], [19.5, 9203.0], [19.6, 9205.0], [19.7, 9215.0], [19.8, 9218.0], [19.9, 9222.0], [20.0, 9232.0], [20.1, 9237.0], [20.2, 9242.0], [20.3, 9246.0], [20.4, 9249.0], [20.5, 9255.0], [20.6, 9260.0], [20.7, 9268.0], [20.8, 9273.0], [20.9, 9276.0], [21.0, 9278.0], [21.1, 9280.0], [21.2, 9282.0], [21.3, 9284.0], [21.4, 9285.0], [21.5, 9288.0], [21.6, 9290.0], [21.7, 9293.0], [21.8, 9295.0], [21.9, 9297.0], [22.0, 9299.0], [22.1, 9300.0], [22.2, 9302.0], [22.3, 9304.0], [22.4, 9304.0], [22.5, 9306.0], [22.6, 9307.0], [22.7, 9310.0], [22.8, 9313.0], [22.9, 9315.0], [23.0, 9318.0], [23.1, 9321.0], [23.2, 9323.0], [23.3, 9325.0], [23.4, 9328.0], [23.5, 9331.0], [23.6, 9334.0], [23.7, 9341.0], [23.8, 9347.0], [23.9, 9352.0], [24.0, 9358.0], [24.1, 9373.0], [24.2, 9810.0], [24.3, 9896.0], [24.4, 9902.0], [24.5, 9905.0], [24.6, 9910.0], [24.7, 9912.0], [24.8, 9915.0], [24.9, 9920.0], [25.0, 9922.0], [25.1, 9934.0], [25.2, 11222.0], [25.3, 11331.0], [25.4, 11338.0], [25.5, 11357.0], [25.6, 11385.0], [25.7, 11567.0], [25.8, 11602.0], [25.9, 12091.0], [26.0, 12109.0], [26.1, 12119.0], [26.2, 12125.0], [26.3, 12137.0], [26.4, 12146.0], [26.5, 12156.0], [26.6, 12164.0], [26.7, 12167.0], [26.8, 12170.0], [26.9, 12173.0], [27.0, 12174.0], [27.1, 12176.0], [27.2, 12179.0], [27.3, 12183.0], [27.4, 12185.0], [27.5, 12187.0], [27.6, 12190.0], [27.7, 12191.0], [27.8, 12193.0], [27.9, 12194.0], [28.0, 12196.0], [28.1, 12198.0], [28.2, 12199.0], [28.3, 12201.0], [28.4, 12203.0], [28.5, 12204.0], [28.6, 12205.0], [28.7, 12207.0], [28.8, 12210.0], [28.9, 12211.0], [29.0, 12214.0], [29.1, 12217.0], [29.2, 12222.0], [29.3, 12228.0], [29.4, 12233.0], [29.5, 12248.0], [29.6, 12258.0], [29.7, 12265.0], [29.8, 12270.0], [29.9, 12275.0], [30.0, 12277.0], [30.1, 12281.0], [30.2, 12285.0], [30.3, 12289.0], [30.4, 12291.0], [30.5, 12292.0], [30.6, 12294.0], [30.7, 12297.0], [30.8, 12299.0], [30.9, 12301.0], [31.0, 12305.0], [31.1, 12310.0], [31.2, 12314.0], [31.3, 12318.0], [31.4, 12321.0], [31.5, 12322.0], [31.6, 12325.0], [31.7, 12327.0], [31.8, 12330.0], [31.9, 12331.0], [32.0, 12334.0], [32.1, 12336.0], [32.2, 12338.0], [32.3, 12341.0], [32.4, 12345.0], [32.5, 12347.0], [32.6, 12349.0], [32.7, 12351.0], [32.8, 12353.0], [32.9, 12356.0], [33.0, 12359.0], [33.1, 12360.0], [33.2, 12363.0], [33.3, 12366.0], [33.4, 12371.0], [33.5, 12375.0], [33.6, 12382.0], [33.7, 12384.0], [33.8, 12387.0], [33.9, 12391.0], [34.0, 12392.0], [34.1, 12396.0], [34.2, 12398.0], [34.3, 12400.0], [34.4, 12403.0], [34.5, 12407.0], [34.6, 12409.0], [34.7, 12410.0], [34.8, 12413.0], [34.9, 12415.0], [35.0, 12424.0], [35.1, 12440.0], [35.2, 12451.0], [35.3, 12465.0], [35.4, 12483.0], [35.5, 12484.0], [35.6, 12488.0], [35.7, 12491.0], [35.8, 12495.0], [35.9, 12496.0], [36.0, 12499.0], [36.1, 12500.0], [36.2, 12502.0], [36.3, 12503.0], [36.4, 12506.0], [36.5, 12508.0], [36.6, 12512.0], [36.7, 12514.0], [36.8, 12518.0], [36.9, 12521.0], [37.0, 12527.0], [37.1, 12746.0], [37.2, 13542.0], [37.3, 13578.0], [37.4, 13586.0], [37.5, 13590.0], [37.6, 13603.0], [37.7, 13692.0], [37.8, 13699.0], [37.9, 13701.0], [38.0, 13704.0], [38.1, 13728.0], [38.2, 13734.0], [38.3, 13740.0], [38.4, 13747.0], [38.5, 13753.0], [38.6, 13775.0], [38.7, 14922.0], [38.8, 14984.0], [38.9, 15041.0], [39.0, 15054.0], [39.1, 15133.0], [39.2, 15231.0], [39.3, 15241.0], [39.4, 15253.0], [39.5, 15284.0], [39.6, 15352.0], [39.7, 15372.0], [39.8, 15483.0], [39.9, 15581.0], [40.0, 15779.0], [40.1, 15845.0], [40.2, 15860.0], [40.3, 15869.0], [40.4, 15877.0], [40.5, 15887.0], [40.6, 15898.0], [40.7, 15910.0], [40.8, 15926.0], [40.9, 15943.0], [41.0, 15958.0], [41.1, 15977.0], [41.2, 15981.0], [41.3, 15985.0], [41.4, 15992.0], [41.5, 15997.0], [41.6, 15999.0], [41.7, 16001.0], [41.8, 16004.0], [41.9, 16009.0], [42.0, 16011.0], [42.1, 16018.0], [42.2, 16026.0], [42.3, 16029.0], [42.4, 16033.0], [42.5, 16036.0], [42.6, 16041.0], [42.7, 16043.0], [42.8, 16048.0], [42.9, 16051.0], [43.0, 16056.0], [43.1, 16061.0], [43.2, 16072.0], [43.3, 16078.0], [43.4, 16081.0], [43.5, 16085.0], [43.6, 16089.0], [43.7, 16100.0], [43.8, 16114.0], [43.9, 16125.0], [44.0, 16165.0], [44.1, 16172.0], [44.2, 16177.0], [44.3, 16183.0], [44.4, 16184.0], [44.5, 16190.0], [44.6, 16192.0], [44.7, 16194.0], [44.8, 16199.0], [44.9, 16204.0], [45.0, 16210.0], [45.1, 16222.0], [45.2, 16227.0], [45.3, 16229.0], [45.4, 16236.0], [45.5, 16241.0], [45.6, 16245.0], [45.7, 16251.0], [45.8, 16264.0], [45.9, 16271.0], [46.0, 16276.0], [46.1, 16278.0], [46.2, 16281.0], [46.3, 16286.0], [46.4, 16287.0], [46.5, 16289.0], [46.6, 16291.0], [46.7, 16294.0], [46.8, 16298.0], [46.9, 16304.0], [47.0, 16312.0], [47.1, 16316.0], [47.2, 16323.0], [47.3, 16329.0], [47.4, 16334.0], [47.5, 16341.0], [47.6, 16343.0], [47.7, 16350.0], [47.8, 16357.0], [47.9, 16367.0], [48.0, 20453.0], [48.1, 20459.0], [48.2, 20470.0], [48.3, 21862.0], [48.4, 21885.0], [48.5, 24035.0], [48.6, 24105.0], [48.7, 24117.0], [48.8, 24130.0], [48.9, 24142.0], [49.0, 24156.0], [49.1, 24162.0], [49.2, 24170.0], [49.3, 24173.0], [49.4, 24186.0], [49.5, 24199.0], [49.6, 24427.0], [49.7, 24471.0], [49.8, 25498.0], [49.9, 25526.0], [50.0, 25555.0], [50.1, 25593.0], [50.2, 25750.0], [50.3, 25811.0], [50.4, 25814.0], [50.5, 25817.0], [50.6, 25820.0], [50.7, 25822.0], [50.8, 25824.0], [50.9, 25827.0], [51.0, 25828.0], [51.1, 25831.0], [51.2, 25834.0], [51.3, 25836.0], [51.4, 25839.0], [51.5, 25844.0], [51.6, 25846.0], [51.7, 25852.0], [51.8, 25860.0], [51.9, 25949.0], [52.0, 25953.0], [52.1, 25954.0], [52.2, 25958.0], [52.3, 25959.0], [52.4, 25960.0], [52.5, 25962.0], [52.6, 25962.0], [52.7, 25964.0], [52.8, 25965.0], [52.9, 25965.0], [53.0, 25966.0], [53.1, 25967.0], [53.2, 25968.0], [53.3, 25969.0], [53.4, 25970.0], [53.5, 25970.0], [53.6, 25971.0], [53.7, 25973.0], [53.8, 25974.0], [53.9, 25975.0], [54.0, 25976.0], [54.1, 25976.0], [54.2, 25977.0], [54.3, 25978.0], [54.4, 25979.0], [54.5, 25980.0], [54.6, 25981.0], [54.7, 25982.0], [54.8, 25983.0], [54.9, 25985.0], [55.0, 25986.0], [55.1, 25987.0], [55.2, 25987.0], [55.3, 25989.0], [55.4, 25990.0], [55.5, 25992.0], [55.6, 25992.0], [55.7, 25995.0], [55.8, 25995.0], [55.9, 25997.0], [56.0, 26001.0], [56.1, 26003.0], [56.2, 26004.0], [56.3, 26007.0], [56.4, 26018.0], [56.5, 27224.0], [56.6, 27231.0], [56.7, 27236.0], [56.8, 27240.0], [56.9, 27246.0], [57.0, 27367.0], [57.1, 27371.0], [57.2, 27372.0], [57.3, 27374.0], [57.4, 27376.0], [57.5, 27377.0], [57.6, 27379.0], [57.7, 27382.0], [57.8, 27385.0], [57.9, 27387.0], [58.0, 27390.0], [58.1, 27393.0], [58.2, 27396.0], [58.3, 27410.0], [58.4, 27749.0], [58.5, 27786.0], [58.6, 27803.0], [58.7, 27819.0], [58.8, 27850.0], [58.9, 27876.0], [59.0, 27954.0], [59.1, 28006.0], [59.2, 28044.0], [59.3, 28089.0], [59.4, 28103.0], [59.5, 28147.0], [59.6, 28168.0], [59.7, 28869.0], [59.8, 28877.0], [59.9, 28881.0], [60.0, 28884.0], [60.1, 28886.0], [60.2, 28891.0], [60.3, 28894.0], [60.4, 28896.0], [60.5, 28900.0], [60.6, 28906.0], [60.7, 28912.0], [60.8, 28919.0], [60.9, 28923.0], [61.0, 29421.0], [61.1, 29468.0], [61.2, 29512.0], [61.3, 29519.0], [61.4, 29524.0], [61.5, 29529.0], [61.6, 29534.0], [61.7, 29542.0], [61.8, 29552.0], [61.9, 29567.0], [62.0, 29618.0], [62.1, 29646.0], [62.2, 29652.0], [62.3, 29658.0], [62.4, 29662.0], [62.5, 29665.0], [62.6, 29668.0], [62.7, 29672.0], [62.8, 29677.0], [62.9, 29679.0], [63.0, 29681.0], [63.1, 29682.0], [63.2, 29684.0], [63.3, 29686.0], [63.4, 29688.0], [63.5, 29692.0], [63.6, 29694.0], [63.7, 29700.0], [63.8, 29710.0], [63.9, 29713.0], [64.0, 29717.0], [64.1, 29725.0], [64.2, 29728.0], [64.3, 29729.0], [64.4, 29732.0], [64.5, 29738.0], [64.6, 29744.0], [64.7, 29774.0], [64.8, 29792.0], [64.9, 29810.0], [65.0, 29816.0], [65.1, 29820.0], [65.2, 29822.0], [65.3, 29828.0], [65.4, 29831.0], [65.5, 29833.0], [65.6, 29837.0], [65.7, 29844.0], [65.8, 29859.0], [65.9, 29865.0], [66.0, 29869.0], [66.1, 29871.0], [66.2, 29876.0], [66.3, 29878.0], [66.4, 29881.0], [66.5, 29884.0], [66.6, 29890.0], [66.7, 29898.0], [66.8, 29915.0], [66.9, 29923.0], [67.0, 29929.0], [67.1, 29953.0], [67.2, 29956.0], [67.3, 29961.0], [67.4, 29962.0], [67.5, 29966.0], [67.6, 29968.0], [67.7, 29970.0], [67.8, 29974.0], [67.9, 29976.0], [68.0, 29977.0], [68.1, 29981.0], [68.2, 29983.0], [68.3, 29984.0], [68.4, 29988.0], [68.5, 29990.0], [68.6, 29995.0], [68.7, 30298.0], [68.8, 30302.0], [68.9, 30310.0], [69.0, 30317.0], [69.1, 32512.0], [69.2, 32568.0], [69.3, 32581.0], [69.4, 32586.0], [69.5, 32592.0], [69.6, 32594.0], [69.7, 32602.0], [69.8, 32611.0], [69.9, 32743.0], [70.0, 32788.0], [70.1, 32798.0], [70.2, 32829.0], [70.3, 32878.0], [70.4, 32882.0], [70.5, 32885.0], [70.6, 32894.0], [70.7, 32899.0], [70.8, 32902.0], [70.9, 32908.0], [71.0, 33716.0], [71.1, 48977.0], [71.2, 49166.0], [71.3, 49170.0], [71.4, 49171.0], [71.5, 49172.0], [71.6, 49172.0], [71.7, 49173.0], [71.8, 49174.0], [71.9, 49175.0], [72.0, 49176.0], [72.1, 49176.0], [72.2, 49177.0], [72.3, 49177.0], [72.4, 49177.0], [72.5, 49178.0], [72.6, 49179.0], [72.7, 49180.0], [72.8, 49181.0], [72.9, 49181.0], [73.0, 49181.0], [73.1, 49183.0], [73.2, 49183.0], [73.3, 49184.0], [73.4, 49185.0], [73.5, 49185.0], [73.6, 49186.0], [73.7, 49186.0], [73.8, 49186.0], [73.9, 49187.0], [74.0, 49187.0], [74.1, 49188.0], [74.2, 49188.0], [74.3, 49189.0], [74.4, 49189.0], [74.5, 49190.0], [74.6, 49190.0], [74.7, 49191.0], [74.8, 49191.0], [74.9, 49192.0], [75.0, 49192.0], [75.1, 49194.0], [75.2, 49194.0], [75.3, 49194.0], [75.4, 49195.0], [75.5, 49195.0], [75.6, 49196.0], [75.7, 49196.0], [75.8, 49197.0], [75.9, 49197.0], [76.0, 49197.0], [76.1, 49198.0], [76.2, 49199.0], [76.3, 49200.0], [76.4, 49200.0], [76.5, 49201.0], [76.6, 49201.0], [76.7, 49203.0], [76.8, 49203.0], [76.9, 49204.0], [77.0, 49204.0], [77.1, 49206.0], [77.2, 49207.0], [77.3, 49209.0], [77.4, 49210.0], [77.5, 49212.0], [77.6, 49212.0], [77.7, 49213.0], [77.8, 49214.0], [77.9, 49216.0], [78.0, 49218.0], [78.1, 49220.0], [78.2, 49221.0], [78.3, 49222.0], [78.4, 49225.0], [78.5, 49608.0], [78.6, 50584.0], [78.7, 50585.0], [78.8, 50587.0], [78.9, 50588.0], [79.0, 50591.0], [79.1, 50592.0], [79.2, 50593.0], [79.3, 50595.0], [79.4, 50595.0], [79.5, 50597.0], [79.6, 50598.0], [79.7, 50599.0], [79.8, 50600.0], [79.9, 50601.0], [80.0, 50602.0], [80.1, 50603.0], [80.2, 50604.0], [80.3, 50605.0], [80.4, 50605.0], [80.5, 50607.0], [80.6, 50611.0], [80.7, 51027.0], [80.8, 52809.0], [80.9, 52827.0], [81.0, 52835.0], [81.1, 52846.0], [81.2, 52861.0], [81.3, 52864.0], [81.4, 52868.0], [81.5, 52871.0], [81.6, 52873.0], [81.7, 52875.0], [81.8, 52877.0], [81.9, 52878.0], [82.0, 52879.0], [82.1, 52880.0], [82.2, 52881.0], [82.3, 52882.0], [82.4, 52882.0], [82.5, 52884.0], [82.6, 52885.0], [82.7, 52887.0], [82.8, 52887.0], [82.9, 52890.0], [83.0, 52890.0], [83.1, 52891.0], [83.2, 52893.0], [83.3, 52894.0], [83.4, 52896.0], [83.5, 52897.0], [83.6, 52898.0], [83.7, 52900.0], [83.8, 52901.0], [83.9, 52904.0], [84.0, 52906.0], [84.1, 52907.0], [84.2, 52910.0], [84.3, 52914.0], [84.4, 52921.0], [84.5, 52928.0], [84.6, 52943.0], [84.7, 52944.0], [84.8, 52948.0], [84.9, 52952.0], [85.0, 52954.0], [85.1, 53022.0], [85.2, 53028.0], [85.3, 53032.0], [85.4, 53046.0], [85.5, 53054.0], [85.6, 53058.0], [85.7, 53072.0], [85.8, 53074.0], [85.9, 53076.0], [86.0, 53078.0], [86.1, 53080.0], [86.2, 53082.0], [86.3, 53085.0], [86.4, 53086.0], [86.5, 53087.0], [86.6, 53089.0], [86.7, 53089.0], [86.8, 53090.0], [86.9, 53092.0], [87.0, 53093.0], [87.1, 53095.0], [87.2, 53096.0], [87.3, 53099.0], [87.4, 53104.0], [87.5, 53104.0], [87.6, 53111.0], [87.7, 53126.0], [87.8, 53130.0], [87.9, 53135.0], [88.0, 53140.0], [88.1, 53143.0], [88.2, 53146.0], [88.3, 53162.0], [88.4, 53166.0], [88.5, 53169.0], [88.6, 53171.0], [88.7, 53173.0], [88.8, 53174.0], [88.9, 53176.0], [89.0, 53178.0], [89.1, 53180.0], [89.2, 53180.0], [89.3, 53182.0], [89.4, 53183.0], [89.5, 53184.0], [89.6, 53185.0], [89.7, 53186.0], [89.8, 53186.0], [89.9, 53188.0], [90.0, 53189.0], [90.1, 53192.0], [90.2, 53193.0], [90.3, 53193.0], [90.4, 53194.0], [90.5, 53195.0], [90.6, 53196.0], [90.7, 53197.0], [90.8, 53198.0], [90.9, 53199.0], [91.0, 53199.0], [91.1, 53201.0], [91.2, 53204.0], [91.3, 53207.0], [91.4, 53210.0], [91.5, 53509.0], [91.6, 76726.0], [91.7, 76945.0], [91.8, 77015.0], [91.9, 77017.0], [92.0, 77019.0], [92.1, 77021.0], [92.2, 77024.0], [92.3, 77026.0], [92.4, 77028.0], [92.5, 77029.0], [92.6, 77031.0], [92.7, 77031.0], [92.8, 77033.0], [92.9, 77035.0], [93.0, 77036.0], [93.1, 77038.0], [93.2, 77040.0], [93.3, 77040.0], [93.4, 77042.0], [93.5, 77043.0], [93.6, 77044.0], [93.7, 77045.0], [93.8, 77046.0], [93.9, 77049.0], [94.0, 77052.0], [94.1, 77054.0], [94.2, 77060.0], [94.3, 77072.0], [94.4, 77078.0], [94.5, 77156.0], [94.6, 78432.0], [94.7, 78434.0], [94.8, 78438.0], [94.9, 78440.0], [95.0, 78441.0], [95.1, 78443.0], [95.2, 78447.0], [95.3, 78453.0], [95.4, 78465.0], [95.5, 80627.0], [95.6, 80644.0], [95.7, 80669.0], [95.8, 80697.0], [95.9, 80715.0], [96.0, 80721.0], [96.1, 80723.0], [96.2, 80724.0], [96.3, 80726.0], [96.4, 80730.0], [96.5, 80735.0], [96.6, 80740.0], [96.7, 80742.0], [96.8, 80751.0], [96.9, 80754.0], [97.0, 80765.0], [97.1, 80783.0], [97.2, 80825.0], [97.3, 80836.0], [97.4, 80870.0], [97.5, 80881.0], [97.6, 80903.0], [97.7, 80924.0], [97.8, 80930.0], [97.9, 80932.0], [98.0, 80935.0], [98.1, 80939.0], [98.2, 80942.0], [98.3, 80950.0], [98.4, 80956.0], [98.5, 80982.0], [98.6, 80998.0], [98.7, 81015.0], [98.8, 81020.0], [98.9, 81024.0], [99.0, 81029.0], [99.1, 81030.0], [99.2, 81032.0], [99.3, 81034.0], [99.4, 81035.0], [99.5, 81039.0], [99.6, 81042.0], [99.7, 81046.0], [99.8, 81051.0], [99.9, 81122.0], [100.0, 81433.0]], "isOverall": false, "label": "Post CreateNewCharacter", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 255.0, "series": [{"data": [[77100.0, 4.0], [76700.0, 1.0], [80700.0, 68.0], [81100.0, 5.0], [78300.0, 2.0], [32900.0, 11.0], [33700.0, 2.0], [49100.0, 255.0], [48900.0, 6.0], [50500.0, 63.0], [200.0, 1.0], [53100.0, 186.0], [52900.0, 70.0], [52700.0, 4.0], [53300.0, 4.0], [53500.0, 3.0], [300.0, 11.0], [77000.0, 134.0], [81000.0, 63.0], [80600.0, 18.0], [81400.0, 1.0], [400.0, 7.0], [500.0, 18.0], [2400.0, 19.0], [2500.0, 80.0], [4300.0, 1.0], [76900.0, 7.0], [5100.0, 2.0], [80900.0, 52.0], [78500.0, 1.0], [80500.0, 1.0], [5300.0, 221.0], [5200.0, 74.0], [6600.0, 13.0], [6700.0, 83.0], [7200.0, 2.0], [8500.0, 114.0], [8600.0, 1.0], [8400.0, 74.0], [8200.0, 4.0], [8300.0, 12.0], [9200.0, 134.0], [9000.0, 118.0], [8900.0, 57.0], [9100.0, 52.0], [8800.0, 6.0], [9300.0, 104.0], [9900.0, 40.0], [9800.0, 10.0], [10900.0, 1.0], [11200.0, 6.0], [11300.0, 16.0], [11400.0, 2.0], [11500.0, 7.0], [11600.0, 1.0], [12200.0, 132.0], [12100.0, 115.0], [12000.0, 4.0], [11900.0, 1.0], [12300.0, 171.0], [12500.0, 50.0], [12400.0, 89.0], [12700.0, 2.0], [12600.0, 2.0], [12800.0, 1.0], [12900.0, 1.0], [13700.0, 40.0], [13600.0, 15.0], [13500.0, 18.0], [13800.0, 1.0], [14800.0, 2.0], [15200.0, 18.0], [14900.0, 8.0], [15000.0, 10.0], [15300.0, 13.0], [15100.0, 4.0], [15700.0, 3.0], [15800.0, 30.0], [15400.0, 2.0], [15500.0, 8.0], [16200.0, 103.0], [16000.0, 104.0], [15900.0, 49.0], [16300.0, 53.0], [16100.0, 56.0], [20400.0, 18.0], [21800.0, 6.0], [24100.0, 47.0], [24400.0, 9.0], [23800.0, 1.0], [24000.0, 4.0], [24200.0, 2.0], [23900.0, 3.0], [24300.0, 2.0], [25500.0, 16.0], [25400.0, 2.0], [25800.0, 81.0], [25900.0, 206.0], [26000.0, 24.0], [25700.0, 4.0], [25600.0, 1.0], [27200.0, 27.0], [27400.0, 4.0], [27300.0, 62.0], [27600.0, 1.0], [27800.0, 18.0], [27900.0, 6.0], [28600.0, 2.0], [28000.0, 15.0], [28100.0, 15.0], [27700.0, 12.0], [29400.0, 12.0], [29600.0, 87.0], [29500.0, 38.0], [28800.0, 39.0], [28900.0, 24.0], [30300.0, 15.0], [29700.0, 57.0], [29800.0, 94.0], [30200.0, 5.0], [29900.0, 96.0], [32500.0, 27.0], [32600.0, 13.0], [32400.0, 3.0], [32700.0, 11.0], [32800.0, 30.0], [34400.0, 1.0], [33400.0, 3.0], [50600.0, 45.0], [49200.0, 109.0], [49600.0, 4.0], [51000.0, 1.0], [53000.0, 111.0], [52800.0, 145.0], [53200.0, 19.0], [53600.0, 2.0], [76800.0, 1.0], [78400.0, 42.0], [80800.0, 20.0], [81200.0, 1.0]], "isOverall": false, "label": "Post CreateNewCharacter", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 81400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1027.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 3973.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [[2.0, 1027.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [[3.0, 3973.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 887.3277909738715, "minX": 1.74500376E12, "maxY": 5000.0, "series": [{"data": [[1.74500382E12, 4073.444619540748], [1.74500376E12, 5000.0], [1.74500388E12, 887.3277909738715]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74500388E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1983.2846715328471, "minX": 704.0, "maxY": 81046.0, "series": [{"data": [[730.0, 77042.0], [731.0, 81032.0], [728.0, 77016.0], [710.0, 80818.5], [704.0, 80715.0], [708.0, 77053.0], [727.0, 77016.0], [717.0, 81034.5], [720.0, 80870.0], [721.0, 80706.0], [725.0, 81038.0], [715.0, 80703.0], [714.0, 80655.0], [713.0, 77027.0], [763.0, 81042.0], [757.0, 81046.0], [756.0, 81014.0], [745.0, 77036.0], [740.0, 81038.0], [736.0, 81011.0], [747.0, 77018.0], [738.0, 80741.0], [799.0, 80956.0], [785.0, 77033.0], [776.0, 78439.0], [771.0, 80742.0], [822.0, 77027.0], [805.0, 80929.0], [831.0, 78438.0], [833.0, 79110.37318840584], [832.0, 77018.0], [834.0, 79831.66666666667], [877.0, 80048.25], [920.0, 79303.53333333334], [922.0, 77052.0], [927.0, 77045.0], [932.0, 80942.0], [942.0, 81032.0], [937.0, 80833.5], [971.0, 77040.0], [968.0, 80982.0], [965.0, 77020.0], [994.0, 80923.0], [1029.0, 79744.5], [1031.0, 80727.0], [1028.0, 80911.0], [1027.0, 80755.0], [1026.0, 80629.28571428571], [1448.0, 52157.67045454538], [4863.0, 16701.445680819863], [5000.0, 1983.2846715328471]], "isOverall": false, "label": "Post CreateNewCharacter", "isController": false}, {"data": [[3830.559799999992, 28690.589999999997]], "isOverall": false, "label": "Post CreateNewCharacter-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5000.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.74500376E12, "maxY": 152724.11666666667, "series": [{"data": [[1.74500382E12, 152724.11666666667], [1.74500376E12, 3217.2166666666667], [1.74500388E12, 18467.866666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74500382E12, 3717.7166666666667], [1.74500376E12, 0.0], [1.74500388E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74500388E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1983.2846715328471, "minX": 1.74500376E12, "maxY": 79277.82422802852, "series": [{"data": [[1.74500382E12, 24719.78298063931], [1.74500376E12, 1983.2846715328471], [1.74500388E12, 79277.82422802852]], "isOverall": false, "label": "Post CreateNewCharacter", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74500388E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.74500376E12, "maxY": 11105.058532192716, "series": [{"data": [[1.74500382E12, 11105.058532192716], [1.74500376E12, 0.0], [1.74500388E12, 0.0]], "isOverall": false, "label": "Post CreateNewCharacter", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74500388E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.74500376E12, "maxY": 25507.783847981016, "series": [{"data": [[1.74500382E12, 14366.252363800106], [1.74500376E12, 0.0], [1.74500388E12, 25507.783847981016]], "isOverall": false, "label": "Post CreateNewCharacter", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74500388E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 48973.0, "minX": 1.74500382E12, "maxY": 53623.0, "series": [{"data": [[1.74500382E12, 53623.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74500382E12, 48973.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74500382E12, 53184.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74500382E12, 53209.72]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74500382E12, 52864.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74500382E12, 53195.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74500382E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 482.0, "minX": 1.0, "maxY": 80697.0, "series": [{"data": [[1027.0, 52864.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[543.0, 12150.0], [130.0, 27722.0], [37.0, 482.0], [190.0, 32544.0], [745.0, 15882.0], [781.0, 27392.0], [48.0, 22960.0], [864.0, 8988.5], [1.0, 19448.5], [5.0, 8639.0], [99.0, 2531.0], [6.0, 27584.5], [102.0, 15047.0], [421.0, 80697.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1027.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 49454.0, "series": [{"data": [[1027.0, 49454.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[543.0, 0.0], [130.0, 0.0], [37.0, 0.0], [190.0, 0.0], [745.0, 0.0], [781.0, 0.0], [48.0, 0.0], [864.0, 0.0], [1.0, 0.0], [5.0, 0.0], [99.0, 0.0], [6.0, 0.0], [102.0, 0.0], [421.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1027.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 83.33333333333333, "minX": 1.74500376E12, "maxY": 83.33333333333333, "series": [{"data": [[1.74500376E12, 83.33333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74500376E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.283333333333333, "minX": 1.74500376E12, "maxY": 53.733333333333334, "series": [{"data": [[1.74500382E12, 17.116666666666667]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.74500376E12, 2.283333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.impl.execchain.RequestAbortedException", "isController": false}, {"data": [[1.74500382E12, 53.733333333333334]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.74500382E12, 3.183333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}, {"data": [[1.74500388E12, 7.016666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74500388E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.283333333333333, "minX": 1.74500376E12, "maxY": 56.916666666666664, "series": [{"data": [[1.74500382E12, 56.916666666666664], [1.74500376E12, 2.283333333333333], [1.74500388E12, 7.016666666666667]], "isOverall": false, "label": "Post CreateNewCharacter-failure", "isController": false}, {"data": [[1.74500382E12, 17.116666666666667]], "isOverall": false, "label": "Post CreateNewCharacter-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74500388E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.283333333333333, "minX": 1.74500376E12, "maxY": 56.916666666666664, "series": [{"data": [[1.74500382E12, 17.116666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.74500382E12, 56.916666666666664], [1.74500376E12, 2.283333333333333], [1.74500388E12, 7.016666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74500388E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

