/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'theme-app\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-combination-bindingtabs': '&#xe608;',
		'icon-unemployment': '&#xe609;',
		'icon-exec-dashboard': '&#xe607;',
		'icon-binding-child-session': '&#xe606;',
		'icon-border-square': '&#xe710;',
		'icon-reorderable-tabs': '&#xe604;',
		'icon-ajax-tabs': '&#xe605;',
		'icon-toolbar': '&#xe601;',
		'icon-responsive-design': '&#xe602;',
		'icon-dd-zones': '&#xe603;',
		'icon-ticket': '&#xe600;',
		'icon-webdesktop': '&#xe6bd;',
		'icon-plus': '&#xe6bf;',
		'icon-tree-xml': '&#xe6c0;',
		'icon-tree-two': '&#xe6c1;',
		'icon-tree-reorder': '&#xe6c2;',
		'icon-tree-grid': '&#xe6c3;',
		'icon-toggle-buttons': '&#xe6c4;',
		'icon-theme': '&#xe6c5;',
		'icon-tasks': '&#xe6c6;',
		'icon-minus': '&#xe6c7;',
		'icon-stacked': '&#xe6c8;',
		'icon-square': '&#xe6c9;',
		'icon-soap-grid': '&#xe6ca;',
		'icon-sliding-pager': '&#xe6cb;',
		'icon-slider-field': '&#xe6cc;',
		'icon-scatter-custom-icons': '&#xe6cd;',
		'icon-scatter-bubble': '&#xe6ce;',
		'icon-scatter-basic': '&#xe6cf;',
		'icon-rtl': '&#xe6d0;',
		'icon-rounded-square': '&#xe6d1;',
		'icon-right-text-buttons': '&#xe6d2;',
		'icon-reconfigure-grid': '&#xe6d3;',
		'icon-radial-multi-axis': '&#xe6d4;',
		'icon-radial-basic': '&#xe6d5;',
		'icon-property-grid': '&#xe6d6;',
		'icon-progress-bar-pager': '&#xe6d7;',
		'icon-portal': '&#xe6d8;',
		'icon-pie-donut': '&#xe6d9;',
		'icon-pie-custom': '&#xe6da;',
		'icon-pie-basic': '&#xe6db;',
		'icon-paging-grid': '&#xe6dc;',
		'icon-multi-sort-grid': '&#xe6dd;',
		'icon-multi-selector': '&#xe6de;',
		'icon-message-box': '&#xe6df;',
		'icon-menu-buttons': '&#xe6e0;',
		'icon-menu-bottom-buttons': '&#xe6e1;',
		'icon-locking-grid': '&#xe6e2;',
		'icon-line-spline': '&#xe6e3;',
		'icon-line-plot': '&#xe6e4;',
		'icon-line-marked-spline': '&#xe6e5;',
		'icon-line-crosszoom': '&#xe6e6;',
		'icon-line-basic': '&#xe6e7;',
		'icon-kitchensink': '&#xe6e8;',
		'icon-imageviewer': '&#xe6e9;',
		'icon-grouped-header-grid': '&#xe6eb;',
		'icon-grouped-grid': '&#xe6ec;',
		'icon-grid-plugins': '&#xe6ed;',
		'icon-gauge-basic': '&#xe6ee;',
		'icon-free-paint': '&#xe6ef;',
		'icon-form-tag': '&#xe6f0;',
		'icon-form-register': '&#xe6f1;',
		'icon-form-radiogroup': '&#xe6f2;',
		'icon-form-number': '&#xe6f3;',
		'icon-form-login': '&#xe6f4;',
		'icon-form-grid': '&#xe6f5;',
		'icon-form-forumsearch': '&#xe6f6;',
		'icon-form-fileuploads': '&#xe6f7;',
		'icon-form-fieldtypes': '&#xe6f8;',
		'icon-form-fieldreplicator': '&#xe6f9;',
		'icon-form-fieldcontainer': '&#xe6fa;',
		'icon-form-date': '&#xe6fb;',
		'icon-form-customfields': '&#xe6fc;',
		'icon-form-customerrors': '&#xe6fd;',
		'icon-form-contact': '&#xe6fe;',
		'icon-form-checkout': '&#xe6ff;',
		'icon-form-checkboxgroup': '&#xe700;',
		'icon-form-advtypes': '&#xe701;',
		'icon-financial-ohlc': '&#xe702;',
		'icon-financial-candlestick': '&#xe703;',
		'icon-filtered-tree': '&#xe704;',
		'icon-feeds': '&#xe705;',
		'icon-combination-theme': '&#xe706;',
		'icon-combination-dashboard': '&#xe707;',
		'icon-column-stacked-100': '&#xe708;',
		'icon-column-renderer': '&#xe709;',
		'icon-column-multi-axis': '&#xe70a;',
		'icon-column-basic': '&#xe70b;',
		'icon-column-3d': '&#xe70c;',
		'icon-circle': '&#xe70d;',
		'icon-cell-editing': '&#xe70e;',
		'icon-calendar': '&#xe70f;',
		'icon-border-hexagon': '&#xe711;',
		'icon-border-circle': '&#xe712;',
		'icon-binding-two-way-formulas': '&#xe713;',
		'icon-binding-slider-form': '&#xe714;',
		'icon-binding-model-validation': '&#xe715;',
		'icon-binding-hello-world': '&#xe716;',
		'icon-binding-formulas': '&#xe717;',
		'icon-binding-field-validation': '&#xe718;',
		'icon-binding-dynamic': '&#xe719;',
		'icon-binding-component-state': '&#xe71a;',
		'icon-binding-combo-chaining': '&#xe71b;',
		'icon-binding-chained-stores': '&#xe71c;',
		'icon-binding-associations': '&#xe71d;',
		'icon-big-data-grid': '&#xe71e;',
		'icon-basic-trees': '&#xe71f;',
		'icon-bar-stacked': '&#xe720;',
		'icon-bar-stacked-100': '&#xe721;',
		'icon-bar-basic': '&#xe722;',
		'icon-array-grid': '&#xe723;',
		'icon-area-stacked': '&#xe724;',
		'icon-area-stacked-100': '&#xe725;',
		'icon-area-basic': '&#xe726;',
		'icon-amf-grid': '&#xe727;',
		'icon-basic-panels': '&#xe728;',
		'icon-framed-panels': '&#xe729;',
		'icon-panel-header-position': '&#xe72a;',
		'icon-xml-grid': '&#xe72b;',
		'icon-row-expander-grid': '&#xe72c;',
		'icon-widget-grid': '&#xe72d;',
		'icon-customer-grid': '&#xe72e;',
		'icon-binding-two-way': '&#xe72f;',
		'icon-heterogeneous-tree': '&#xe730;',
		'icon-check-tree': '&#xe731;',
		'icon-basic-tabs': '&#xe732;',
		'icon-plain-tabs': '&#xe733;',
		'icon-framed-tabs': '&#xe734;',
		'icon-icon-tabs': '&#xe735;',
		'icon-advanced-tabs': '&#xe736;',
		'icon-side-navigation-tabs': '&#xe737;',
		'icon-navigation-tabs': '&#xe738;',
		'icon-header-tabs': '&#xe739;',
		'icon-basic-window': '&#xe73a;',
		'icon-basic-buttons': '&#xe73b;',
		'icon-split-buttons': '&#xe73c;',
		'icon-left-text-buttons': '&#xe73d;',
		'icon-link-buttons': '&#xe73e;',
		'icon-segmented-buttons': '&#xe73f;',
		'icon-vertical-segmented-buttons': '&#xe740;',
		'icon-dataview-multisort': '&#xe741;',
		'icon-form-combos': '&#xe742;',
		'icon-form-vboxlayout': '&#xe743;',
		'icon-form-hboxlayout': '&#xe744;',
		'icon-form-multicolumn': '&#xe745;',
		'icon-form-xml': '&#xe746;',
		'icon-basic-toolbar': '&#xe747;',
		'icon-docked-toolbars': '&#xe748;',
		'icon-breadcrumb-toolbar': '&#xe749;',
		'icon-layout-absolute': '&#xe74a;',
		'icon-layout-accordion': '&#xe74b;',
		'icon-layout-border': '&#xe74c;',
		'icon-layout-card': '&#xe74d;',
		'icon-layout-cardtabs': '&#xe74e;',
		'icon-layout-center': '&#xe74f;',
		'icon-layout-column': '&#xe750;',
		'icon-layout-fit': '&#xe751;',
		'icon-layout-horizontal-box': '&#xe752;',
		'icon-layout-table': '&#xe753;',
		'icon-layout-vertical-box': '&#xe754;',
		'icon-dd-grid-to-form': '&#xe755;',
		'icon-dd-field-to-grid': '&#xe756;',
		'icon-dd-grid-to-grid': '&#xe757;',
		'icon-panels': '&#xe758;',
		'icon-grids': '&#xe759;',
		'icon-data-binding': '&#xe75a;',
		'icon-trees': '&#xe75b;',
		'icon-tabs': '&#xe75c;',
		'icon-windows': '&#xe75d;',
		'icon-buttons': '&#xe75e;',
		'icon-data-view': '&#xe75f;',
		'icon-form-fields': '&#xe760;',
		'icon-forms': '&#xe761;',
		'icon-toolbars': '&#xe762;',
		'icon-layouts': '&#xe763;',
		'icon-drag-drop': '&#xe764;',
		'icon-enterprise': '&#xe765;',
		'icon-charts': '&#xe766;',
		'icon-legacy-charts': '&#xe767;',
		'icon-column-charts': '&#xe768;',
		'icon-bar-charts': '&#xe769;',
		'icon-line-charts': '&#xe76a;',
		'icon-area-charts': '&#xe76b;',
		'icon-scatter-charts': '&#xe76c;',
		'icon-financial-charts': '&#xe76d;',
		'icon-pie-charts': '&#xe76e;',
		'icon-radial-charts': '&#xe76f;',
		'icon-guage-charts': '&#xe770;',
		'icon-combination-charts': '&#xe771;',
		'icon-column-stacked': '&#xe772;',
		'icon-line-marked': '&#xe773;',
		'icon-line-markers': '&#xe774;',
		'icon-line-renderer': '&#xe775;',
		'icon-pie-3d': '&#xe776;',
		'icon-radial-filled': '&#xe777;',
		'icon-radial-marked': '&#xe778;',
		'icon-combination-pareto': '&#xe779;',
		'icon-grid-filtering': '&#xe77a;',
		'icon-split-bottom-buttons': '&#xe77b;',
		'icon-grid-data-binding': '&#xe77c;',
		'icon-grid-data-binding-adv': '&#xe77d;',
		'icon-grid-live-search': '&#xe77e;',
		'icon-grid-group-summaries': '&#xe77f;',
		'icon-grid-row-editor': '&#xe780;',
		'icon-grid-row-editor-rest': '&#xe781;',
		'icon-writer-thumb': '&#xe782;',
		'icon-writer-thumb-json': '&#xe783;',
		'icon-buffer-grid': '&#xe784;',
		'icon-grid-transform': '&#xe785;',
		'icon-grid-summary': '&#xe786;',
		'icon-form-multiselect': '&#xe787;',
		'icon-templates': '&#xe788;',
		'icon-state-saving': '&#xe789;',
		'icon-locale-switch': '&#xe78a;',
		'icon-grid-infinite-scroll': '&#xe78b;',
		'icon-locale-dutch': '&#xe78c;',
		'icon-spotlight': '&#xe78d;',
		'icon-resizable': '&#xe78e;',
		'icon-grid-summary-head': '&#xe78f;',
		'icon-qtips': '&#xe790;',
		'icon-panel': '&#xe791;',
		'icon-progress': '&#xe792;',
		'icon-slider': '&#xe793;',
		'icon-tabs-adv': '&#xe794;',
		'icon-editor': '&#xe795;',
		'icon-gmap-panel': '&#xe796;',
		'icon-history-router': '&#xe797;',
		'icon-history': '&#xe798;',
		'icon-keyboard': '&#xe799;',
		'icon-tabs-adv-over': '&#xe79a;',
		'icon-nested-loading': '&#xe79b;',
		'icon-side-tabs': '&#xe79c;',
		'icon-direct-tree-loader': '&#xe79d;',
		'icon-window': '&#xe79e;',
		'icon-direct-grid': '&#xe79f;',
		'icon-direct-form': '&#xe7a0;',
		'icon-direct': '&#xe7a1;',
		'icon-direct-arg': '&#xe7a2;',
		'icon-window-layout': '&#xe7a3;',
		'icon-tree-columns': '&#xe7a4;',
		'icon-tree-custom-node-logic': '&#xe7a5;',
		'icon-advanced-dataview': '&#xe7a6;',
		'icon-animated-dataview': '&#xe7a7;',
		'icon-tree-columns-buff': '&#xe7a8;',
		'icon-actions': '&#xe7a9;',
		'icon-statusbar-adv': '&#xe7aa;',
		'icon-tree-columns-lock': '&#xe7ab;',
		'icon-statusbar-demo': '&#xe7ac;',
		'icon-toolbar-overflow': '&#xe7ad;',
		'icon-toolbar-reorderable': '&#xe7ae;',
		'icon-dd-celltocell': '&#xe7af;',
		'icon-actions-grid': '&#xe7b0;',
		'icon-toolbar-button-groups': '&#xe7b1;',
		'icon-toolbar-vertical': '&#xe7b2;',
		'icon-ticket2': '&#xe7b3;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
