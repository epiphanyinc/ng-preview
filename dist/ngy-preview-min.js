!function(e){"use strict";function n(e){e.put("ngy-preview.html",['<div class="pw-layout-row pw-wrap pw-margin">','   <div class="pw-square" ng-repeat="data in dataArray track by $index">','       <div class="pw-background-image" ng-style="{ \'background-image\' : getUrl(data) }">','           <div class="pw-remove" ng-click="delete($index)" >','               <i class="pw-remove-icon"></i>',"           </div>","       </div>","   </div>","</div>"].join(""))}e.module("ngyPreview",[]).run(["$templateCache",n])}(window.angular),function(e){"use strict";function n(){function e(e,n,i){e.onDelete&&(e.delete=function(n){e.onDelete({$index:n}).then(function(){e.dataArray.splice(n,1)})}),e.getUrl=function(e){return"url("+e+")"}}return{restrict:"AE",scope:{dataArray:"=data",onDelete:"&?"},link:e,templateUrl:"ngy-preview.html"}}e.module("ngyPreview").directive("ngyPreview",n)}(window.angular);