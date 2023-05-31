let addHotkeys = () => {

    let initialState = spm.getState()

    document.addEventListener('keydown', e => {
        console.log(e)
        let key = e.key.toLowerCase()

        if (e.ctrlKey && key == 'h') {
            e.preventDefault()
            let state = {
                map: {
                    mapextent: spm.getMinimapConfig().getMapConfig().getExtent(),
                    maprotation: 0
                }
            }

            spm.setState(state)
        } else if (e.ctrlKey && e.shiftKey && key == 'r') {
            e.preventDefault()

            console.log('tjek')
            delete initialState.map
            spm.setState(initialState)
        }
        
    })
}