import {Fab, useScrollTrigger, Zoom} from "@material-ui/core"
import React from "react"
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

// Code adapted from https://material-ui.com/components/app-bar/

const ScrollTop = (props) => {
    const { children, window } = props
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    })

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" style={{display: 'flex', justifyContent: 'flex-end'}}>
                {children}
                <Fab color="secondary" size="medium" aria-label="scroll back to top" style={{margin: 30}}>
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        </Zoom>
    )
}

export default ScrollTop