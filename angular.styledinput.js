angular.module('styledInput', [])

.directive('styledInput', function() {
	return {
		restrict : 'A',
		scope : {
			styledInput : '@'
		},
		link : function(scope, element, attrs) {
			$(element).styledInput({
				wrapperClass : scope.styledInput,
				wrapperId : attrs.hasOwnProperty('styledInputId')? attrs.hasOwnProperty('styledInputId') : undefined,
				before : attrs.hasOwnProperty('styledInputBefore'),
				after : attrs.hasOwnProperty('styledInputAfter')
			});
		}
	};
});