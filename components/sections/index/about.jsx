// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I am engineer"
				/>
				<section className={about.content}>
					<div className={about.image}>

						<Image className="mb-2" src="/img/headshot.jpg" width={425} height={425}/>
						
						<div className={about.unit}>
							<BadgesBlock 
								title="test" 
								containerClass={about.container}
								list={testskills} 
								fullContainer="fullContainer"
								block="methods" 
								icon="code"
								copy=""
								//invertedColor="invertedColor"
								headerIcon={`${about.icon}`}
							/>
						</div>
					</div>
					<div className={about.copy} >
						<BadgesBlock 
							title="Engineering Skills" 
							containerClass={about.container}
							list={engineeringskills} 
							fullContainer="fullContainer"
							block="methods" 
							icon="terminal"
							copy=""
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
						<BadgesBlock 
							title="Programming Languages" 
							containerClass={about.container}
							list={languages} 
							fullContainer="fullContainer"
							block="methods" 
							icon="laptop-code"
							copy=""
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const languages	= [
	{ key: 'coffee-beans', 		name: 'Java', 		type: 'fad' },
	{ key: 'code', 				name: 'Javascript', 	type: 'fad' },
	{ key: 'snake', 			name: 'Python', 	type: 'fad' },
	{ key: 'file-code', 		name: 'CSS', 		type: 'fad' },
]

const testskills = [
	{ key: 'code-merge', 			name: 'Git', 	type: 'fad' },
	{ key: 'code', 					name: 'HTML', 	type: 'fad' },
]

const engineeringskills = [
	{ key: 'code-merge', 			name: 'Git', 	type: 'fad' },
	{ key: 'code', 					name: 'HTML', 	type: 'fad' },
]