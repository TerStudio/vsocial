vsocial
-------

_"V Social" social media panels (share panels) use only the links provided by the social networks, without other external scripts. It provides NO cached pages in Facebook and other social networks._

#### Description

* VSocial creates customizable Share panel. You can easily change form, size and color of buttons.
* The tool adds an argument with date and time to the url each time you post it to Facebook, Twitter etc. So you will never have a problem when you occasionally post a page to FB with "not correct" image, than change the image on your website, than post again - and every time - the same old pic. With this solution it will be fresh every time you post it.

* VSocial panels provide the buttons to share at:

- Facebook
- VKontakte
- LinkedIn
- Pinterest
- Twitter
- Google Plus

* VSocial does not require jQuery. Easy to use with webpack.
* Opens a popup share-window
* Loads no external script

#### Package Managers

##### NPM

```sh
npm install vsocial
```

#####Usage

Just import Class (for example in the js code that you bundle later with webpack):

```html
import SocialClass from '../node_modules/vsocial/SocialClass';
```

Add a link to two css files in your `<head>` (one of them is the main css file, the second - is theme css file for your panel:

```html
<link rel="stylesheet" type="text/css" href="<PATH TO FILE>/vsocial/style.css" media="all">
<link rel="stylesheet" type="text/css" href="<PATH TO FILE>/vsocial/simple_small_theme.css" media="all">
```

Add empty div with custom class in any place of your html code, for example in footer of the page.

```html
<div class="sharepanel"></div>
```

Finally "tell" VSocial in what element it should be used and add options if necessary
```html
import SocialClass from '../node_modules/vsocial/SocialClass';
let panel = new SocialClass('v-social');
```

Customize the panel if you want to:
```html
import SocialClass from '../node_modules/vsocial/SocialClass';
let mediaPanel = new SocialClass('v-social', {
    buttons: {
         vkontakte: false
    },
    pinterestImageSelector: [
        '.first__image-class',
        '.second__image-class'
    ],
    twitterHash: 'web, develop',
    title: 'Share this page',
    titleFontSize: 20,
    titleColor: '#777',
    customStyle: {
        background: '#204b72',
        borderColor: '#831111'
    }
});
```

### Themes

##### Simple small theme

<img src="https://terina-studio.com/sites/default/files/images/vsocial/simple_small.png" alt="VSocial media panel Simple Small Theme example" />

##### Simple large theme

<img src="https://terina-studio.com/sites/default/files/images/vsocial/simple_large.png" alt="VSocial media panel Simple Large Theme example" />

##### Square small theme

<img src="https://terina-studio.com/sites/default/files/images/vsocial/square_small.png" alt="VSocial media panel Square small Theme example" />

##### Square large theme

<img src="http://terina-studio.com/sites/default/files/images/vsocial/square_large.png" alt="VSocial media panel Square Large Theme example" />

##### Sand large theme

<img src="http://terina-studio.com/sites/default/files/images/vsocial/sand_large.png" alt="VSocial media panel sand Large Theme example" />

##### Sand small theme

<img src="http://terina-studio.com/sites/default/files/images/vsocial/sand_small.png" alt="VSocial media panel sand small Theme example" />

##### Gray large theme

<img src="http://terina-studio.com/sites/default/files/images/vsocial/gray_large.png" alt="VSocial media panel Gray Large Theme example" />

##### Gray small theme

<img src="http://terina-studio.com/sites/default/files/images/vsocial/gray_small.png" alt="VSocial media panel Gray small Theme example" />

##### White custom theme (example): here you choose your own colors

<img src="http://terina-studio.com/sites/default/files/images/vsocial/white_custom.png" alt="VSocial media panel White Custom Theme example" />

##### Dark custom theme (example): here you choose your own colors

<img src="http://terina-studio.com/sites/default/files/images/vsocial/dark_custom.png" alt="VSocial media panel Dark Custom Theme example" />

### Meta properties

For proper work of VSocial it is highly recommended to use proper og and twitter (including twitter:card) properties in head block of he website

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
buttons | object | true | Enables and disables different social networks
pinterestImageSelector | array | [] | Defines the classes of images to be used for Pinterest (img src="" class="first__image-class"). You can specify several classes - in this case the system will choose the first image that matches the selector
twitterHash | string | '' | Hashtags to be added to twitter
title | string | '' | Title of the share panel
titleFontSize | integer | 24 | Font-size of title of the panel
customStyle | Object with 2 possible items: background (value is string), borderColor (value is String) | - | css parameters of the buttons to be used with white_custom_theme.css and dark_custom_theme.css

#### Icons credit

Icons made by Freepik from www.flaticon.com

#### Browser support

VSocial works on IE8+ in addition to other modern browsers such as Chrome, Firefox, and Safari.

#### License

Copyright (c) 2018 tstudio

Licensed under the MIT license.
