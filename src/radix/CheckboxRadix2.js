import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

function CheckboxRadix2() {
	return (
		<div>
			<StyleCheckboxRoot className="CheckboxRoot" defaultChecked id="c1">
				<StyleCheckboxIndicator className="CheckboxIndicator">
					<svg viewBox="0 0 18 18" aria-hidden="true">
						<polyline points="1 9 7 14 15 4" />
					</svg>
				</StyleCheckboxIndicator>
			</StyleCheckboxRoot>
			<label className="Label" htmlFor="c1">
				Accept terms and conditions.
			</label>
		</div>
	)
}

export default CheckboxRadix2
export const StyleCheckboxRoot = styled(Checkbox.Root)`
	background-color: white;
	width: 25px;
	height: 25px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 2px 10px red;

	&:hover {
		background-color: var(--violet-3);
	}
	&:focus {
		box-shadow: 0 0 0 2px black;
	}
`

export const StyleCheckboxIndicator = styled(Checkbox.Indicator)`
	svg {
		width: 1rem;
		height: 1rem;
		fill: none;
		stroke: red;
		stroke-width: 3px;
		stroke-dasharray: 22px;
		stroke-dashoffset: 44;
		transition: all 200ms;
	}
`
