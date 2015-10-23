Ext.define('D7C.view.operadores.OperadorController', {
	extend: 'Ext.app.ViewController',
    alias: 'controller.operador',
	stores: ['Operador'],
	models: ['Operador'],
	views: ['Operador', 'OperadorGrid'],
	requires: [
		'D7C.view.operadores.Operador',
        'D7C.view.operadores.OperadorGrid'
	],
	newRecordId: '',
    isNewRecord: false,
	onGridEditorBeforeEdit: function (editor, ctx, eOpts) {
        this.lookupReference('newRecordButton').setDisabled(true);
    },
    onGridEditorCancelEdit: function (editor, ctx, eOpts) {
        if (this.newRecordId && ctx.record.get('operatorid') === this.newRecordId && this.isNewRecord) {
            ctx.grid.getStore().remove(ctx.record);
            this.isNewRecord = false;
            this.newRecordId = null;
        }
		this.isNewRecord = false;		
        var grid = this.lookupReference('operatorGrid'),
            selectedRecords = grid.getSelection(),
            store = grid.getStore('operatorid');
        store.remove(selectedRecords);
        this.lookupReference('newRecordButton').setDisabled(false);
    },
    onGridEditorEdit: function (editor, ctx, eOpts) {
        if(this.isNewRecord){
            ctx.grid.getStore().getProxy().setExtraParams({action:'insert'});
			D7C.util.Util.showToast('Los datos fueron ingresados correctamente!');
        }else{
            ctx.grid.getStore().getProxy().setExtraParams({action:'update'});
			D7C.util.Util.showToast('Los datos fueron modificados correctamente!');
        }
        ctx.grid.getStore().sync();
        ctx.grid.getStore().getProxy().setExtraParams({action:'read'});
		this.isNewRecord = false;
		this.lookupReference('newRecordButton').setDisabled(false);
        this.lookupReference('deleteRecordButton').setDisabled(true);
    },
	onAddOperatorClick: function(button, ctx, evt) {
        var newCar = Ext.create('D7C.model.operadores.Operador', {
            operatorid: 0,
			operatorcode: '',
            syndicatename: '',
			operatorstate: ''
        });
        this.isNewRecord = true;
        this.newRecordId = newCar.get('operatorid');
        var grid = this.lookupReference('operatorGrid');
        grid.getStore().insert(0, newCar);
		grid.getPlugin('modelOperatorRowEditingPlugin').startEdit(newCar);
	},
	onRemoveOperatorClick: function (button, evt) {
        var grid = this.lookupReference('operatorGrid'),
            selectedRecords = grid.getSelection(),
            store = grid.getStore('operatorid');
		Ext.Msg.show({ 
			title: 'Eliminar Datos',
			msg: 'Esta seguro que desea eliminar los datos?',
			buttons: Ext.Msg.YESNO,
			icon: Ext.Msg.QUESTION,
			fn: function (buttonId) {
				if (buttonId == 'yes') {
					store.remove(selectedRecords);
					store.getProxy().setExtraParams({action:'destroy'});
					store.sync();
					store.getProxy().setExtraParams({action:'read'});
					D7C.util.Util.showToast('Eliminacion Satisfactoria! Los datos fueron eliminados');
				}
			}
		});
		this.lookupReference('deleteRecordButton').setDisabled(true);
    },
    onGridSelect: function (rowModel, record, idx, eOpts) {
        this.lookupReference('deleteRecordButton').setDisabled(false);
    },
    onGridDeselect: function (rowModel, record, idx, eOpts) {
        this.lookupReference('deleteRecordButton').setDisabled(true);
    },
    onPrint: function(button, e, options) {
        var printer = D7C.ux.grid.Printer;
        printer.printAutomatically = false;
        printer.print(this.lookupReference('operatorGrid'));
    },
    onExportPDF: function(button, e, options) {
		var fp=Ext.getCmp('content-panel');
		var pdfGrid =Ext.getCmp('win-pdf');
		
		if(typeof pdfGrid=="undefined"){	
			var pdfGrid=Ext.create('D7C.view.Pdf',{
				id:'win-pdf',
				items: [{
						xtype: 'uxiframe',
						src: 'data/pdf/propietariesPdf.php'
					}]
				}
			);
			fp.add(pdfGrid);
			pdfGrid.show();

		}else{
			pdfGrid.show();
		}
    }
});
