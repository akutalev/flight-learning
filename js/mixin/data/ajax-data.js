/**
 * Created by ak@7bits.it.
 */
ajaxFormData = function() {

    this.defaultAttrs({
        urlSelector: '#url'
    });

    this.findData = function (data) {
        this.trigger('eraseErrors');
        that = this;
        $form = this.$node;
        data = $form.serialize();
        url = this.select('urlSelector').val();
        $.ajax(url, {
            type: 'GET',
//            data: data,    // Switched off by missing back-end
            dataType: 'json',
            error: function() {
            },
            success: function(data) {
                if (data.isSuccess) {
                    that.trigger('externalRedrawTable', data);
                } else {
                    that.trigger('fillErrors', data);
                }

            }
        });
    };

    this.after('initialize', function () {
        this.on('findData', this.findData);
    });
};