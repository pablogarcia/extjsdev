Ext.define('D7C.model.propietarios.Propietario', {
	extend: 'Ext.data.Model',
    idProperty: 'propietaryid',
    fields: [
        {name: 'propietaryid', type: 'int' },
		{name: 'operatorregisterid', type: 'int' },		
        {name: 'propietaryfirstname', type: 'string'},
        {name: 'propietarylastname', type: 'string'},
		{name: 'propietaryci', type: 'string'},
		{name: 'propietaryadress', type: 'string'},
		{name: 'propietaryphone', type: 'string'}/*,
		{name: 'last_update', type: 'date', dateFormat: 'Y-m-j H:i:s'}*/
    ],
    validators: {
        propietaryfirstname: { type: 'presence', allowEmpty: false },
        propietarylastname: { type: 'presence', allowEmpty: false },
		propietaryci: { type: 'presence', allowEmpty: false },
		propietaryadress: { type: 'presence', allowEmpty: false },
		propietaryphone: { type: 'presence', allowEmpty: false }/*,
		last_update: { type: 'presence'}*/
    }
});
