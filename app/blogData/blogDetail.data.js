"use strict";
exports.BlogDetail = [{
        id: 1,
        heading: '$emit vs $broadcast',
        description: "\n<p><span keyword>$emit</span> and  <span keyword>$broadcast</span> are used to fire an event and  <span keyword>$on</span>\nis used to capture the event and thus execute some functionality.</p>\n<p>When used on <b>scope</b>:</p>\n\n<ul>\n    <li><b>$broadcast</b> : Dispatches the event downwards to all the child scopes.</li>\n    <li><b>$emit</b> : Dispatches the event upwards to all the parent scope in hierachy</li>\n</ul>\n<p>P.S : This essentially means it these are not dispatched to the sibling scope that is two scope with same immidiate parent scope.</p>\n<pre>\n    <code>\n    // Dispatching the event upwards\n    $scope.$emit(\"event:emit\",'data emitted');\n\n    //Dispatching the event downwards\n    $scope.$broadcast(\"event:broadcast\",\"data broadcasted\");\n\n    // capturing event using $on\n    $scope.$on(\"event:emit\",function(event,data){\n        console.log(data);   //data emitted\n    })\n    $scope.$on(\"event:broadcast\",function(event,data){\n        console.log(data);   //data broadcasted\n    })\n    </code>\n</pre>\n<p>When used on <b>$rootscope</b>:</p>\n<ul>\n    <li><b>$broadcast</b> : Dispatches the event to all the $rootscope.$on, as well as to all the $scope.$on listeners.</li>\n    <li><b>$emit</b> : It is supposed to dispatch the event up in the scope heriarchy but since there is no $parent to $rootscope there\n    is question of dispatching event upwards, so $emit will fire all $rootscope.$event listeners.</li>\n</ul>\n    ",
        tags: ["angular2"]
    }, {
        id: 2,
        heading: "angular directives",
        description: "\n<p><a href='https://docs.angularjs.org/api/ng/service/$compile'>Refrence of the article</a>, There are multiple options for a \ndirective it matters what value we return in factory function. We may return a <span keyword>directive defination object</span>\nwhich contains the properties that the directive has or just a <span keyword>postLink</span> function and all the properties take\nup the default property.<p>\n<p>Here is an example of directive where we return a <span keyword>directive defination object</span>:</p>\n<pre>\n    <code>\n    var myModule = angular.module(...);\n\n    myModule.directive('directiveName', function factory(injectables) {\n    var directiveDefinitionObject = {\n        priority: 0,\n        template: '&lt;div>&lt;/div>', // or // function(tElement, tAttrs) { ... },\n        // or\n        // templateUrl: 'directive.html', // or // function(tElement, tAttrs) { ... },\n        transclude: false,\n        restrict: 'A',\n        templateNamespace: 'html',\n        scope: false,\n        controller: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },\n        controllerAs: 'stringIdentifier',\n        bindToController: false,\n        require: 'siblingDirectiveName', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],\n        multiElement: false,\n        compile: function compile(tElement, tAttrs, transclude) {\n        return {\n            pre: function preLink(scope, iElement, iAttrs, controller) { ... },\n            post: function postLink(scope, iElement, iAttrs, controller) { ... }\n        }\n        // or\n        // return function postLink( ... ) { ... }\n        },\n        // or\n        // link: {\n        //  pre: function preLink(scope, iElement, iAttrs, controller) { ... },\n        //  post: function postLink(scope, iElement, iAttrs, controller) { ... }\n        // }\n        // or\n        // link: function postLink( ... ) { ... }\n    };\n    return directiveDefinitionObject;\n    });\n    </code>\n</pre>\n<p>As mentioned already any unspecified value takes the default, therefore we can create directive just by folowwing:</p>\n<pre>\n    <code>\n    var myModule = angular.module(...);\n\n    myModule.directive('directiveName', function factory(injectables) {\n    var directiveDefinitionObject = {\n        link: function postLink(scope, iElement, iAttrs) { ... }\n    };\n    return directiveDefinitionObject;\n    // or\n    // return function postLink(scope, iElement, iAttrs) { ... }\n    });\n    </code>\n</pre>\n    ",
        tags: ["angular2"]
    }];
//# sourceMappingURL=blogDetail.data.js.map