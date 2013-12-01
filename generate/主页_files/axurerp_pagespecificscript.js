for(var i = 0; i < 13; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u2'] = 'top';
u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if ((GetWidgetText('u3')) == ('student')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学生模块.html');

}
else
if ((GetWidgetText('u3')) == ('teacher')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('教师模块.html');

}
else
if ((GetWidgetText('u3')) == ('officer')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('教务人员模块.html');

}
});
