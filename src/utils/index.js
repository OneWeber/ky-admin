let util = {}

//vm, name, argu, query
util.openNewPage = function () {
  // vm.$store.commit('setOpenedList')
  // let pageOpenedList = vm.$store.state.app.pageOpenedList
  // let openedPageLen = pageOpenedList.length
  // let i = 0
  // let tagHasOpened = false
  // while (i < openedPageLen) {
  //   if (name === pageOpenedList[i].name) {
  //     // 页面已经打开
  //     vm.$store.commit('pageOpenedList', {
  //       index: i,
  //       path: argu,
  //       query: query,
  //     })
  //     tagHasOpened = true
  //     break
  //   }
  //   i++
  // }
  // if (!tagHasOpened) {
  //   let tag = {
  //     name: name,
  //     path: argu,
  //     closable: true,
  //     active: '',
  //     type: true,
  //     query: query,
  //   }
  //   vm.$store.commit('increateTag', tag)
  // }
  // vm.$store.commit('setCurrentPageName', name)
}

export default util
