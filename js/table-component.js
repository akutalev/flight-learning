/**
 * Created by ak@7bits.it
 */
var table = flight.component(spinner, tableData, formErrors, function() {

    this.defaultAttrs({
        button1Selector: '.js-btn-1',
        button2Selector: '.js-btn-2',
        button3Selector: '.js-btn-3'
    });

    this.redrawTable = function(event, data) {
        var that = this;
        that.trigger('showSpinner');
        setTimeout(function() {
            that.trigger('cleanTable');
            that.trigger('fillTable', data);
            that.trigger('hideSpinner');
        }, 1000);
    };

    this.clickBtn1 = function() {
        url = 'https://api.myjson.com/bins/4npez';
        this.trigger('findData', {url : url});
    };

    this.clickBtn2 = function() {
        url = 'https://api.myjson.com/bins/1t1ff';
        this.trigger('findData', {url : url});
    };

    this.clickBtn3 = function() {
        url = 'https://api.myjson.com/bins/5ba6j';
        this.trigger('findData', {url : url});
    };

    this.after('initialize', function() {
        this.on(document, 'externalRedrawTable', this.redrawTable);
        this.on('redrawTable', this.redrawTable);
        this.on('click', {button1Selector: this.clickBtn1});
        this.on('click', {button2Selector: this.clickBtn2});
        this.on('click', {button3Selector: this.clickBtn3});
    });
});