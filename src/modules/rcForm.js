/**
 * @ngdoc module
 * @name rcForm
 *
 * @description
 * Module to encapsulate all of our custom form-based directives.
 */
var rcFormModule = angular.module('rcForm', ['ng']);if (rcSubmitDirective) rcFormModule.directive(rcSubmitDirective);if (rcAttemptDirective) rcFormModule.directive(rcAttemptDirective);if (rcVerifySetDirective) rcFormModule.directive(rcVerifySetDirective);