# angular-mandrill
AngularJS Model for Mandrill JSON API

**Very first simple version. Only messages/send.json avaible for now!**

## Installation
Using `bower`:
```shell 
$ bower install angular-mandrill --save
```

Using `git`:
```shell 
$ git clone https://github.com/mrkvngrkn/angular-mandrill.git
```

## Usage

Add `angular-mandrill.js` to your HTML.
``` html
<script src="//rawgit.com/mrkvngrkn/angular-mandrill/master/dist/angular-mandrill.js"></script>
```

Add `angular-mandrill` as a module dependency for your app.
``` javascript
angular.module('myApp', ['angular-mandrill']);
```

## Example
Set your Mandrill API key during the config phase
``` javascript
app.config(function(MandrillProvider) {
  MandrillProvider.setApiKey('<Mandrill API Key>');
});
```

``` javascript
function SampleCtrl($scope, Mandrill) {
  var data = {
      'message': {
        'html': '<p>Your body text here</p>',
        'text': 'Body text',
        'subject': 'Subject',
        'from_email': 'example@mail.com',
        'from_name': 'Example name',
        'to': [
          {
            name: 'Example name',
            email: 'example@mail.com',
            'type': 'to'
          }
        ],
        'headers': {
          'Reply-To': 'noreply@mail.com'
        }
      }
    };
    
    Mandrill.messages.send(data).success(function(response){
      // Succes handling
    }).error(function(response){
      // Error handling
    });
}
```

