export default class SocialClass {

    constructor(className, settings) {

        this.sharePanel = document.getElementsByClassName(className);

        if (settings instanceof Object) {
            if (settings === undefined) {
                this.settings = {};
            }
            else {
                this.settings = settings;
            }
        }
        else {
            this.settings = {};
        }
        this._init();
    }


    _init() {

        if (this.sharePanel.length > 0) {

            let count = this.sharePanel.length;
            for (let i = 0; i < count; i++) {
                var eachPanel = this.sharePanel[i];
                this._createButtons(eachPanel);
            }
        }
    }

    _defaultSettings(settings) {

        let defaultSettings = {
            facebook: true,
            vkontakte: true,
            twitter: true,
            google: true,
            linkedin: true,
            pinterest: true
        };

        if(settings.buttons !== undefined) {
            for (var key in defaultSettings) {
                if (defaultSettings.hasOwnProperty(key)) {
                    if (settings.buttons.hasOwnProperty(key)) {
                        if (settings.buttons[key] != defaultSettings[key]) {
                            defaultSettings[key] = settings.buttons[key];
                        }
                        if (settings.buttons[key] === false) {
                            delete defaultSettings[key];
                        }
                    }
                }
            }
        }


        return defaultSettings;
    }

    _getTwitterHash() {
        if (this.settings.twitterHash != undefined && this.settings.twitterHash.length > 0 && (typeof this.settings.twitterHash) == 'string') {
            return this.settings.twitterHash;
        }
        else {
            return '';
        }
    }

    _getPinterestImg() {
        if (this.settings.pinterestImageSelector != undefined && (this.settings.pinterestImageSelector instanceof Array) && this.settings.pinterestImageSelector.length > 0) {
            for (let imageClass of this.settings.pinterestImageSelector) {
                let image = document.querySelectorAll(imageClass);
                if (image.length > 0) {
                    return image[0].src;
                }

            }
        }
    }

    _getTitleFontSize() {
        if (this.settings.titleFontSize != undefined && (typeof this.settings.titleFontSize) == 'number') {
            return this.settings.titleFontSize;
        }
        else {
            return 20;
        }
    }

    _getTitleFontColor() {
        if (this.settings.titleColor != undefined && this.settings.titleColor.length > 0 && (typeof this.settings.titleColor) == 'string') {
            return this.settings.titleColor;
        }
        else {
            return '#191919';
        }
    }

    _getPanelTitle() {
        if (this.settings.title != undefined && this.settings.title.length > 0 && (typeof this.settings.title) == 'string') {
            let titleWrap = document.createElement('div');
            titleWrap.classList.add('v-social__title');
            titleWrap.appendChild(document.createTextNode(this.settings.title));
            let fontSize = this._getTitleFontSize();
            titleWrap.style.fontSize = fontSize + 'px';
            titleWrap.style.paddingBottom = 10 + 'px';
            titleWrap.style.color = this._getTitleFontColor();
            return titleWrap;
        }
    }

    _hasCustomStyle(property) {
        if((this.settings.customStyle instanceof Object) && Object.keys(this.settings.customStyle).length > 0) {
            for (var key in this.settings.customStyle) {
                if (this.settings.customStyle.hasOwnProperty(key)) {
                    if(key == property) {
                        let propertyValue = this.settings.customStyle[key];
                        if((typeof propertyValue) == 'string') {
                            return true;
                        }
                    }
                }
            }

        }
    }

    _createButtons(element) {
        this.socialWrap = document.createElement('div');
        this.socialWrap.classList.add('v-social__wrapper');
        element.appendChild(this.socialWrap);
        if(this._getPanelTitle() !== undefined) {
            this.socialWrap.appendChild(this._getPanelTitle());
        }
        let btnSettings = this._defaultSettings(this.settings);
        let index = 0;
        for (var key in btnSettings) {
            if (btnSettings.hasOwnProperty(key)) {
                if (btnSettings[key] === true) {
                    index++;
                    this.buttonWrap = document.createElement('div');
                    this.buttonWrap.classList.add(key);
                    this.buttonWrap.classList.add('v-social__item');
                    if (index === 1) {
                        this.buttonWrap.classList.add('v-social__item-first');
                    }
                    if (index === Object.keys(btnSettings).length) {
                        this.buttonWrap.classList.add('v-social__item-last');
                    }
                    this.socialWrap.appendChild(this.buttonWrap);
                    this.socialLink = this._buttonsLinks(key);
                    if(this._hasCustomStyle('background') === true) {
                        this.socialLink.style.backgroundColor = this.settings.customStyle.background;
                    }
                    if(this._hasCustomStyle('borderColor') === true) {
                        this.socialLink.style.borderColor = this.settings.customStyle.borderColor;
                    }

                    this._openInNewWindow(this.socialLink);
                    this.buttonWrap.appendChild(this.socialLink);
                }

            }

        }

    }

    _buttonsLinks(socialNetworkTitle) {

        let today = new Date();
        let timeParameter = '?v=' + today.getDate() + today.getTime();
        let link = document.createElement('a');

        if (socialNetworkTitle === 'facebook') {
            let linkAddress = 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href + timeParameter;
            link.setAttribute('href', linkAddress);
            return link;
        }
        if (socialNetworkTitle === 'vkontakte') {
            let linkAddress = 'https://vk.com/share.php?url=' + window.location.href + timeParameter;
            link.setAttribute('href', linkAddress);
            return link;
        }
        if (socialNetworkTitle === 'google') {
            let linkAddress = 'https://plus.google.com/share?url=' + window.location.href + timeParameter;
            link.setAttribute('href', linkAddress);
            return link;
        }
        if (socialNetworkTitle === 'linkedin') {
            let linkAddress = 'https://www.linkedin.com/shareArticle?mini=true&url=' + window.location.href + timeParameter;
            link.setAttribute('href', linkAddress);
            return link;
        }
        if (socialNetworkTitle === 'pinterest') {
            let imageSrc = this._getPinterestImg();
            let imageSrcUrl;
            if(imageSrc == undefined) {
                imageSrcUrl = '';
            }
            else {
                imageSrcUrl = imageSrc;
            }
            let linkAddress = 'https://www.pinterest.com/pin/create/button/?url=' + window.location.href + timeParameter + '&media=' + imageSrcUrl;
            link.setAttribute('href', linkAddress);
            return link;
        }
        if (socialNetworkTitle === 'twitter') {
            let hashTwit = this._getTwitterHash();
            let twitText = document.title;
            let linkAddress = 'https://twitter.com/intent/tweet/?text=' + twitText.replace('|', ':') + '&url=' + window.location.href + timeParameter + '&hashtags=' + hashTwit;
            link.setAttribute('href', linkAddress);
            return link;

        }
    }

    _openInNewWindow(element) {
        element.onclick = function(e){
            e.preventDefault();
            window.open(element.href, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        };
    }


}