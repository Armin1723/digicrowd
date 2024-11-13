export const cursorFollower = (dets) => {
    const cursor = document.querySelector("#cursor");

    cursor.style.scale = 1
    cursor.style.opacity = 1
    cursor.style.top = (dets.clientY - 350) + 'px'
    cursor.style.left = (dets.clientX -10) + 'px'
}

export const removeHover =() =>{
    let cursor = document.querySelector('#cursor')
    cursor.style.opacity = 0
    cursor.style.scale = 0
}

export default removeHover