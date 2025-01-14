import FeaturedProject from '../../blocks/projects/featured'


// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import Badges from '../../utils/badge.list.util'
import Icon from '../../utils/icon.util'
import SectionTitle from '../../blocks/section.title.block'

import css from '../../../styles/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'


export default function FeaturedProjects() {

	const [isDesktop, setDesktop] = useState(false);


	const controls = useAnimation();
	const { ref, inView } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	const container = {
		hidden: {
			transition: {
				delayChildren: 0.125,
				staggerChildren: 0.0625
			}
		},
		visible: {
			transition: {
				delayChildren: 0.125,
				staggerChildren: 0.25,
			}
		},
		rest: {
			transition: {
				delayChildren: 0,
				staggerChildren: 0,
			}
		},
		hover: {
			transition: {
				delayChildren: 0,
				staggerChildren: 0,
			}
		}
	}

	const stack = [
		{ "key": "python", "name": "Python", "type": "devicon" },
		{ "key": "tensorflow", "name": "Tensorflow", "type": "devicon" }
	]

	return (
		<Section classProp={css.hasBg}>
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="Websites, Applications, and more."
					subTitle="Inspired by curiosity, driven by passion."
				/> 				{
					content.map((data, index) => {
						return (
							<FeaturedProject content={data} index={index} key={index} />
						)
					})
				}

				
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}