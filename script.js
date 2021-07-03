/* Part of my Frontend Web development course in 2016 from FreecodeCamp */
/* Author: Comdt Eke, Royal */
$(document).ready(function(){

	$("#home a:contains('Home')").parent().addClass('active');
	$("#contact a:contains('Contact')").parent().addClass('active');
	$("#about a:contains('About')").parent().addClass('active');
	$("#port a:contains('Portfolio')").parent().addClass('active');
});