

const inputElement = document.querySelector('.text')
const tagsElement = document.querySelector('.tags')
inputElement.focus()
inputElement.addEventListener('keyup',(e)=>{
    createTags(e.target.value)

    if (e.key === 'Enter') {
        e.target.value = ''
        randomSelect()
    }
})

function createTags(input) {
   const tags = input.split(',').filter(tag => tag.trim() !== '')
   tagsElement.innerHTML= ''
   tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag;
    tagsElement.appendChild(tagEl)

   });
}

function randomSelect() {
    const times = 30
    
 const interval= setInterval(() => {
     const randomTag = pickRandomTag()

     
      highlightTag(randomTag)
     
      setTimeout(() => {
        unHighlightTag(randomTag)
     }, 100);


    }, 100);
    
    setTimeout(() => {
        clearInterval(interval)
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
    }, times * 100);
}
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}
function highlightTag(randomTag) {
    randomTag.classList.add('highlight')
}

function unHighlightTag(randomTag) {
    randomTag.classList.remove('highlight')
}

