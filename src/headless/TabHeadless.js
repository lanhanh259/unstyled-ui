import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import React from 'react'
import styled from 'styled-components'

const BasicTabGroup = styled(TabGroup)`
	background: #ddd;
	.theme-dark & {
		color: #f0f0f0;
		background-color: #28292f;
	}
`
const BasicTabList = styled(TabList)`
	border-bottom: 1px solid #aaa;
	margin-bottom: 20px;
	.theme-dark & {
		border-bottom: 1px solid #515151;
	}
`
const BasicTab = styled(Tab)`
	display: inline-block;
	margin: 0 24px;
	text-transform: uppercase;

	&:focus-visible {
		outline: none;
	}
	&[data-selected] {
		border-bottom: 2px solid #f7941d;
	}
	&[data-disabled] {
		opacity: 50%;
	}
`

function MyTabHeadless({ tabs, ...props }) {
	return (
		<BasicTabGroup {...props}>
			<BasicTabList>
				{tabs.map(({ name, disable }) => (
					<BasicTab disabled={disable} key={name}>
						{name}
					</BasicTab>
				))}
			</BasicTabList>
			<TabPanels>
				{tabs.map(({ content }) => (
					<TabPanel>{content}</TabPanel>
				))}
			</TabPanels>
		</BasicTabGroup>
	)
}

const Content1 = () => {
	return <div>Hehehe 1</div>
}
const Content2 = () => {
	return <div>Hehehe 2</div>
}
const Content3 = () => {
	return <div>Hehehe 3</div>
}
const categories = [
	{ id: 1, name: 'tab 1', disable: true, content: Content1 },
	{ id: 2, name: 'tab 2', content: Content2 },
	{ id: 3, name: 'tab 3', content: Content3 },
]

function TabHeadless() {
	return (
		<div className="theme-dark ">
			<MyTabHeadless tabs={categories} />
			<MyTabHeadless tabs={categories} defaultIndex={2} />
			<MyTabHeadless tabs={categories} vertical={false} />
			<MyTabHeadless tabs={categories} vertical={true} />
		</div>
	)
}

export default TabHeadless
