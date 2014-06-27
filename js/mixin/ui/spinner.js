/**
 * Created by ak@7bits.it.
 */
spinner = function() {

    this.defaultAttrs({
        loaderSelector: '.loader'
    });

    this.showSpinner = function () {
        return this.select('loaderSelector').show();
    };

    this.hideSpinner = function () {
        return this.select('loaderSelector').hide();
    };

    this.after('initialize', function () {
        this.on('showSpinner', this.showSpinner);
        this.on('hideSpinner', this.hideSpinner);
    });
};

