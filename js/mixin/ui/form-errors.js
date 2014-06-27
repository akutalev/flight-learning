/**
 * Created by ak@7bits.it.
 */
formErrors = function() {

    this.defaultAttrs({
        errorMessageSelector: '.error-message'
    });

    this.fillErrors = function (event, data) {
        that = this;
        $.each(data.errors, function(index, value) {
            $errorField = that.$node.find('.js-errors.js-' + index);
            $errorField.append( "<div class = 'error-message'>" + value + "</div>" );
        });
    };

    this.eraseErrors = function () {
        this.select('errorMessageSelector').remove();
    };

    this.after('initialize', function () {
        this.on('fillErrors', this.fillErrors);
        this.on('eraseErrors', this.eraseErrors);
    });
};

