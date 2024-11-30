// 先把那两个按钮给他获取一下
// document.querySelectorAll('.s_button')[1].onclick = () => {
// let lists = document.querySelectorAll('.item');
// document.querySelector('#slide').appendChild(lists[0]);
// }

// document.querySelectorAll('.s_button')[0].onclick = () => {
// let lists = document.querySelectorAll('.item');
// 这里是获取那个上一张的那个箭头，并且把那些item获取进来之后把最后一张图片放到最前面也就是第一张
// document.querySelector('#slide').prepend(lists[lists.length - 1]);
// }


// document.querySelector('#slide').appendChild(lists[0]);
// let lists = document.querySelectorAll('.item');
// document.querySelector('#slide').prepend(lists[lists.length - 1]);

let _direction = true
let _move = () => {
  let lists = document.querySelectorAll('.item')
  if (_direction) {
    document.querySelector('#slide').appendChild(lists[0])
  } else {
    document.querySelector('#slide').prepend(lists[lists.length - 1])

  }

}

let timer = setInterval(_move, 2500)
document.querySelector('.con').addEventListener('mouseover', () => {
  clearInterval(timer)
})
document.querySelector('.con').addEventListener('mouseout', () => {
  timer = setInterval(_move, 2500)
})




// 先把那两个按钮给他获取一下
document.querySelectorAll('.s_button')[1].onclick = () => {
  _direction = true
  _move()
}
document.querySelectorAll('.s_button')[0].onclick = () => {
  _direction = false
  _move()
}