(function () {
  'use strict';

  angular.module('angular-mandrill')

    .provider('Mandrill', function () {
      var apiKey,
        defaults = {},
        baseUrl = 'https://mandrillapp.com/api/1.0/';
      return {
        setApiKey: function (value) {
          apiKey = value;
        },
        setDefaults: function (value) {
          defaults = value;
        },
        $get: ['$http', function ($http) {
          var mandrill = {},
            config = {},
            data = {
              'key': apiKey
            };

          // Messages
          config.messages = {

          };
          mandrill.messages = {};
          mandrill.messages.send = function (userData) {
            var sendData = angular.extend({}, data, userData);
            return $http.post(baseUrl + 'messages/send.json', sendData);
          };

          return mandrill;
        }]
      }
    });

})();
