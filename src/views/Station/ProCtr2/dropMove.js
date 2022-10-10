
let dropMove = (el)=> {
  let endLeft = ''
  let endTop = ''
  let odiv = el;   //获取当前元素
  odiv.onmousedown = (e) => {
    //算出鼠标相对元素的位置
    let disX = e.clientX - odiv.offsetLeft;
    let disY = e.clientY - odiv.offsetTop;

    document.onmousemove = (e) => {
      //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
      let left = e.clientX - disX;
      let top = e.clientY - disY;
      //移动当前元素
      endLeft = left + 'px';
      endTop = top + 'px';
    };
    document.onmouseup = (e) => {
      document.onmousemove = null;
      document.onmouseup = null;
    };

  };
return {endLeft,endTop}
}


export default dropMove
