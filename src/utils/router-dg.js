export default function dg(arr, ls) {
  let list = ls
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].children) {
      dg(arr[i].children, list)
    } else {
      list.push(arr[i].name)
    }
  }
  return list
}
