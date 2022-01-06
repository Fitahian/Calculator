class JSTilt {

    /**
     * 
     * @param {HTMLElement} target 
     * @param {number} perspective 
     * @param {boolean} glare
     * @param {number} max max angle
     * @param {string} transition the css transition
     */

    static init(target, perspective, glare, max= 20, transition= '400ms ease-out') {
        if(perspective)
            target.parentElement.style.perspective = perspective + 'px'

        let maxX = target.offsetWidth
        let maxY = target.offsetHeight

        target.addEventListener('mousemove', e => {
            let rotY = max * ((e.layerX / (maxX / 2)) - 1)
            let rotX = max * (1 - (e.layerY / (maxY / 2)))

            target.style.transform = 'rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)'
            target.style.transition = transition
        })

        target.addEventListener('mouseout', () => {
            target.style.transform = 'none'
            target.style.transition = transition
        })
    }
}