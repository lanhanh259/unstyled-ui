import React from 'react'
import styled from 'styled-components'
import * as Accordion from '@radix-ui/react-accordion'

function AccordionDemo() {
	return (
		<Div>
			<Accordion.Root>
				<Accordion.Item className="AccordionItem" value="item-1" />
				<StyledItem className="AccordionItem" value="item-2" />
				{/* … */}
			</Accordion.Root>
		</Div>
	)
}

export default AccordionDemo

const Div = styled.div`
	.AccordionItem {
		border-bottom: 1px solid gainsboro;
	}

	.AccordionItem[data-state='open'] {
		border-bottom-width: 2px;
	}
`

const StyledItem = styled(Accordion.Item)`
	border-bottom: '1px solid gainsboro';
	&[data-state='open'] {
		border-bottom-width: 2px;
	}
`
