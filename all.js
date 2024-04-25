// content03 分頁切換
// 1. 先把tab獲取之後, 每一個都要綁定鼠標點擊監聽事件(for), 變成Active狀態
// 1.1 把別人的active移除, 把自己this添加active
//1.2 下面的content同樣道理操作


const tab = document.querySelectorAll('.policeTabTitle .tab')
const tabContent = document.querySelectorAll('.tab-content .content')

//每一個都要添加監聽事件
for (let i = 0; i <= tab.length; i++) {
  tab[i].addEventListener('click', function () {
    //tab
    document.querySelector('.policeTabTitle .tabActive').classList.remove('tabActive')
    this.classList.add('tabActive')
    //tab-content
    document.querySelector('.tab-content .tabContentActive').classList.remove('tabContentActive')

    tabContent[i].classList.add('tabContentActive')

  })
}


