//本函数传入一个采集数据的对象组成的数组，一个站点名字---返回一个站点的地址
//arr----仓库里所有站点对象数据组成的数组，datas=[],
// station---下拉选择得到的站点名字
// 根据得到的站点名字去数组的每一个站的数据里找到对应的那个名字，然后得到这个站所在的数组的位置i,
// 最后给出这个i，所在的那个站点数据对象的sid，也就是cc0001处理完成后的0001这个值，
//具名导出，引用也需要使用这个名字引入
function sta_sid(arr, station) {
  let len = arr.length;
  let sid = 10000;
  for (let i = 0; i < len; i++) {
    if (station === arr[i].Station) {
      sid = arr[i].Sid;
    }
  }
  if (sid === 10000) {
    console.log("我没有找到对应的站点filtTool");
  }
  return sid;
}

export { sta_sid };
