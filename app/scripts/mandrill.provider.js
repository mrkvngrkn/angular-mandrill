(function () {
  'use strict';

  angular.module('angular-mandrill')

    .provider('Mandrill', function () {
      var apiKey,
        defaults = {};

      return {
        setApiKey: function (value) {
          apiKey = value;
        },
        setDefaults: function (value) {
          defaults = value;
        },
        $get: ['$http', function ($http, URL) {
          var mandrill = {},
            config = {},
            data = {
              'key': apiKey
            };

          // Messages
          config.messages = {

          };
          mandrill.messages = {};
          mandrill.messages.send = function (userData, config = {}) {
            var sendData = angular.extend({}, data, userData);
            return $http.post(URL.messages.send, sendData, config);
          };
          mandrill.messages.sendTemplate = function(userData, config = {}) {
            var sendData = angular.extend({}, data, userData);
            return $http.post(baseUrl + 'messages/send-template.json', sendData, config);
          };

          return mandrill;
        }]
      }
    });

})();
