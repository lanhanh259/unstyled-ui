import React from 'react'
import { Button } from 'react-aria-components'

function MyButton(props) {
	return <Button {...props}>{props.children}</Button>
}

function ButtonAria() {
	return <div>ButtonAria</div>
}

export default ButtonAria
