(function() {
    'use strict';
    /*jshint undef: false*/

    angular.module('angular-mandrill')

      .constant('EVENTS', {

      })

      .constant('URL', {
        base: 'https://mandrillapp.com/api/1.0/',
        messages: {
          send: this.base + 'messages/send.json',
          sendTemplate: this.base + 'messages/send-template.json'
        }

      });
})();
