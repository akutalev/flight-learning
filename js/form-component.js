/**
 * Created by ak@7bits.it
 */
var form = flight.component(spinner, ajaxFormData, formErrors, function() {

    this.submit = function() {
        this.on('submit', function(event){
            event.preventDefault();
            this.trigger('showSpinner');
            that = this;
            setTimeout(function(){
                that.trigger('findData');
                that.trigger('hideSpinner');
            }, 1000);
        });
    };

    this.after('initialize', this.submit);
});