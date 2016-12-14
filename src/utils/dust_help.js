(function(root, factory) {
	if (typeof define === 'function' && define.amd && define.amd.dust === true) {
		define(['dust.core'], function(dust) {
			factory(dust, format);
		});
	} else if (typeof exports === 'object') {
		module.exports = factory(require('dustjs-linkedin'));
	} else {
		factory(root.dust);
	}
}(this, function(dust) {
	dust.helpers.formatCurrency = function(chunk, context, bodies, params) {
		var amount = context.resolve(params.amount),
			isCheckout = context.resolve(params.isCheckout);

		return chunk.write(format.currency(amount, isCheckout));
	};
	return dust;
}));
