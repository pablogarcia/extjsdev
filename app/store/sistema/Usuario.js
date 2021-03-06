Ext.define('D7C.store.sistema.Usuario', {
	extend: 'Ext.data.Store',
    alias: 'widget.usuariostore',
    model: 'D7C.model.sistema.Usuario',
	sorters: ['userid'],
    autoLoad: true,
    autoSync: false,
    proxy: {
        type: 'ajax',
        url: 'data/sis_union_users.php',
        extraParams:{action:'read'},
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'modelUser'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            rootProperty: 'data',
            allowSingle: false
        }
    }
});
