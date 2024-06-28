import { Dialog, DialogPanel } from '@headlessui/react'
import React, { useState } from 'react'
import styled from 'styled-components'

function MyDialogHeadless({ children, ...props }) {
	let [isOpen, setIsOpen] = useState(props.isOpen)

	return (
		<StyleDialog open={isOpen} onClose={() => setIsOpen(false)} {...props}>
			<ModalOverlay>
				<StyleDialogPanel>{children}</StyleDialogPanel>
			</ModalOverlay>
		</StyleDialog>
	)
}

function DialogHeadless() {
	let [isOpen, setIsOpen] = useState(true)

	return (
		<div>
			<MyDialogHeadless isOpen={true}>
				Content
				<button>close</button>
			</MyDialogHeadless>
		</div>
	)
}

export default DialogHeadless

const StyleDialog = styled(Dialog)`
	position: relative;
	z-index: 50;
`
const ModalOverlay = styled.div`
	position: fixed;
	inset: 0px;

	background: rgba(0 0 0 / 0.5);

	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
	padding: 12px;
`

const StyleDialogPanel = styled(DialogPanel)`
	background: white;
	padding: 20px;
	border-radius: 4px;
`
