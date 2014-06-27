/**
 * Created by ak@7bits.it.
 */
tableData = function() {

    this.defaultAttrs({
//        tableRowsSelector: '.table-row',
        tableSelector: '.js-main-table',
        templateSelector: '.entry-template',
        tableBodySelector: '.js-table-body'
    });

    this.fillTable = function (event, data) {
        that.trigger('eraseErrors');
        if (data.isSuccess) {
            var content = [];
            $.each(data.data, function (index, value) {
                var obj = new Object();
                obj['firstName'] = value["first name"];
                obj['secondName'] = value["second name"];
                content.push(obj);
            });
            var source   = this.select('templateSelector').html();
            var template = Handlebars.compile(source);
            var html = template(content);
            tableBody = this.select('tableBodySelector');
            tableBody.empty();
            tableBody.append(html);
        } else {
            this.trigger('fillErrors', data);
        }
    };

    this.cleanTable = function () {
        this.select('tableRowsSelector').remove();
    };

    this.findData = function (event, url) {
        that = this;
        $.ajax(url.url, {
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                that.trigger('redrawTable', data);
            }
        });
    };

    this.after('initialize', function () {
        this.on('fillTable', this.fillTable);
        this.on('cleanTable', this.cleanTable);
        this.on('findData', this.findData);
    });
};

