Ext.define('D7C.view.operadores.RegistroOperadorExpandController', {
	extend: 'Ext.app.ViewController',
    alias: 'controller.registrooperadorexpand',
	stores: ['RegistroOperadorExpand'],
	models: ['RegistroOperadorExpand'],
	views: ['RegistroOperadorExpand', 'RegistroOperadorExpandGrid'],
	requires: [
		'Ext.window.Window',
		'D7C.view.operadores.RegistroOperadorExpand',
        'D7C.view.operadores.RegistroOperadorExpandGrid',
		'D7C.util.Util'
	],
	newRecordId: '',
    isNewRecord: false,
	onGridEditorBeforeEdit: function (editor, ctx, eOpts) {
        this.lookupReference('newRecordButton').setDisabled(true);
    },
    onGridEditorCancelEdit: function (editor, ctx, eOpts) {
        if (this.newRecordId && ctx.record.get('oprexpandid') === this.newRecordId && this.isNewRecord) {
            ctx.grid.getStore().remove(ctx.record);
            this.isNewRecord = false;
            this.newRecordId = null;
        }
		this.isNewRecord = false;		
        var grid = this.lookupReference('operatorRegisterExpandGrid'),
            selectedRecords = grid.getSelection(),
            store = grid.getStore('oprexpandid');
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
	onAddOperatorRegisterClick: function(button, ctx, evt) {
        var newCar = Ext.create('D7C.model.operadores.RegistroOperadorExpand', {
            oprexpandid: 0,
			operatorregisterid: 0,
			adminresolutionid: 0,
			oprexpandzonestart: '',
            oprexpandroutestart: '',
			oprexpandzonefinish: '',
			oprexpandroutefinish: ''
        });
        this.isNewRecord = true;
        this.newRecordId = newCar.get('oprexpandid');
        var grid = this.lookupReference('operatorRegisterExpandGrid');
        grid.getStore().insert(0, newCar);
		grid.getPlugin('operatorRegisterExpandRowEditingPlugin').startEdit(newCar);
		
		var statusCombo = this.lookupReference('combobox_status');
		statusCombo.setDisabled(false);
	},
	onRemoveOperatorRegisterClick: function (button, evt) {
        var grid = this.lookupReference('operatorRegisterExpandGrid'),
            selectedRecords = grid.getSelection(),
            store = grid.getStore('oprexpandid');
		Ext.Msg.show({ 
			title: 'Eliminar Datos',
			//msg: 'Esta seguro que desea eliminar los datos?',
			msg: Ext.String.format('Si elimina al Operador tambien se eliminaran de los siguientes Campos:<br><br>Propietarios Asociados al Operador<br> - <strong>Modulo Propietarios</strong><br>Vehiculos Asociados al Operador<br> - <strong>Modulo Unidad de Transporte</strong><br> - <strong>Modulo Registro Infracciones</strong><br> - <strong>Modulo Tarjeta de Operacion/Temporal</strong><br><br>Esta seguro que desea eliminar los datos?'),
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
		if(D7C.Profile.getPrivilege() == 1){
			this.lookupReference('deleteRecordButton').setDisabled(false);
		}
    },
    onGridDeselect: function (rowModel, record, idx, eOpts) {
        this.lookupReference('deleteRecordButton').setDisabled(true);
    },
    onPrint: function(button, e, options) {
        var printer = D7C.ux.grid.Printer;
        printer.printAutomatically = false;
        printer.print(this.lookupReference('operatorRegisterExpandGrid'));
    },
    onExportPDF: function(button, e, options) {
		var fp=Ext.getCmp('content-panel');
		var pdfGrid =Ext.getCmp('win-pdf');
		
		if(typeof pdfGrid=="undefined"){	
			var pdfGrid=Ext.create('D7C.view.Pdf',{
				id:'win-pdf',
				items: [{
						xtype: 'uxiframe',
						src: 'data/pdf/recordoperatorPdf.php'
					}]
				}
			);
			fp.add(pdfGrid);
			pdfGrid.show();

		}else{
			pdfGrid.show();
		}
    },
	onOperatorFilterKeyup: function() {
        var grid = this.lookupReference('operatorRegisterExpandGrid'),
            filterField = this.lookupReference('operatorFilterField'),
            filters = grid.store.getFilters();

        if (filterField.value) {
            this.operatorFilter = filters.add({
                id            : 'operatorFilter',
                property      : 'syndicatename',
                value         : filterField.value,
                anyMatch      : true,
                caseSensitive : false
            });
        } else if (this.operatorFilter) {
            filters.remove(this.operatorFilter);
            this.operatorFilter = null;
        }
    },
	onValidateComboBox: function(combo) {
		var statusCombo = this.lookupReference('combobox_status');
		if(this.isNewRecord)
			{statusCombo.setDisabled(false);}
		else{
			if(D7C.Profile.getPrivilege() == 1 || D7C.Profile.getPrivilege() == 2)
			{statusCombo.setDisabled(false);}
			else{statusCombo.setDisabled(true);}	
		}
    }
});
