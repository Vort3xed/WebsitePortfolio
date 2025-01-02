import Image from 'next/image'
import { useState } from 'react'

import { useEffect } from 'react'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/projects/featured.json'

export default function FeaturedProject({ content }, index) {

	const { project, url, repo, descriptionTitle,description, stack, imageOptions, images } = content

	const controls = useAnimation();
	const { ref, inView  } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	useEffect( () => {
		if ( inView ) {	controls.start("visible") }
		if ( !inView ) { controls.start("hidden") }
	}, [ controls, inView ] )


	const [isDesktop, setDesktop] = useState(false);

    useEffect(() => {
      if (window.innerWidth > 1300) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
  
      const updateMedia = () => {
        if (window.innerWidth > 1300) {
          setDesktop(true);
        } else {
          setDesktop(false);
        }
      };
      window.addEventListener('resize', updateMedia);
      return () => window.removeEventListener('resize', updateMedia);
    }, []);

	return (
		<m.section 	
			key={index}
			className={css.project} 
			//framer-motion
			ref={ref}
			variants={container}
			initial={[ "rest", "hidden" ]}
			whileHover="hover"
			animate={controls} >
			
			
				<div className={css.details}>
					<div className={css.projectHeader}>
						<div className={css.header}>
							<h3 className="highlight">{project}</h3><span className={css.privateOr}><i className="devicon-github-plain"></i>{repo}</span>	
						</div>
						
						<div className={css.description}>
							<p><strong>{descriptionTitle}</strong> {description}</p>
						</div>
						<div className={css.stackContainer}>
							<Badges list={stack} block="stack" fullContainer={false} color={false} />
						</div>
						<a href={url} target="_blank" rel="noopener noreferrer">
						
						<m.div variants={''} className={css.viewProject}>
							<p>View Project</p>
							<Icon icon={[ 'fad', 'arrow-right-to-bracket' ]} />
						</m.div></a>
						
					</div>
				</div>

			<div className={css.imageContainer}>
				{/* <span className={`${css.topRightimageAnimationContainer}`}>
					<m.div variants={hoverLeft}>
						<Image src={url} alt="x" height={500} width={500} />
					</m.div>
				</span>
				<span className={`${css.bottomLeftimageAnimationContainer}`}>
					<m.div variants={hoverLeft}>
						<Image src={url} alt="x" height={500} width={500} />
					</m.div>
				</span> */}
				
				{/* { images.map( ({key, url, hover, h, w }, index) => {
						hover = ( hover === 'left' ) ? hoverLeft : hoverRight
						return (
							<m.div key={`${index}-${key}`} variants={item}>
					<span className={`${css.topRightimageAnimationContainer}`}>
					<m.div variants={hover}>
						<Image src={url} alt="x" height={500} width={500} />
					</m.div>
					</span>
					<span className={`${css.bottomLeftimageAnimationContainer}`}>
					<m.div variants={hover}>
						<Image src={url} alt="x" height={500} width={500} />
					</m.div>
					</span>
				</m.div>
						)}
					) } */}
					{ isDesktop ? (
						<span className={`${css.imageAnimationContainer}`}>
							{ images.map( ({key, url, hover, h, w }, index) => {
								hover = ( hover === 'left' ) ? hoverLeft : hoverRight
								// const translatex = ( hover === 'left' ) ? 300 : 0
								// const translatey = ( hover === 'left' ) ? 300 : 0
		
								// const translation = ( hover === 'left' ) ? "translateRight" : "translateBottom"
								
		
								return (
									<m.div key={`${index}-${key}`} variants={item}>
										<m.div variants={hover}>
											<Image src={url} alt="x" height={h} width={w} />
										</m.div>
									</m.div>
								)}
							) }
						</span>
					) : (
						<></>
					)}
				{/* <span className={`${css.imageAnimationContainer}`}>
					{ images.map( ({key, url, hover, h, w }, index) => {
						hover = ( hover === 'left' ) ? hoverLeft : hoverRight
						// const translatex = ( hover === 'left' ) ? 300 : 0
						// const translatey = ( hover === 'left' ) ? 300 : 0

						// const translation = ( hover === 'left' ) ? "translateRight" : "translateBottom"
						

						return (
							<m.div key={`${index}-${key}`} variants={item}>
								<m.div variants={hover}>
									<Image src={url} alt="x" height={h} width={w} />
								</m.div>
							</m.div>
						)}
					) }
				</span> */}
					{/* { images.map( ({key, url, hover, h, w }, index) => {
						hover = ( hover === 'left' ) ? hoverLeft : hoverRight
						return (
							<m.div key={`${index}-${key}`} variants={item}>
								<m.div variants={hoverLeft}>
									<Image src={url} alt="x" height={500} width={500} />
								</m.div>
								<m.div variants={hoverRight}>
									<Image src={url} alt="x" height={500} width={500} />
								</m.div>
							</m.div>
						)}
					) } */}
					{/* <m.div key={`${index}-${key}`} variants={item}>
						<m.div variants={hoverLeft}>
							<Image src={url} alt="x" height='1200' width='1200' />
						</m.div>
						<m.div variants={hoverRight}>
							<Image src={url} alt="x" height='1200' width='1200' />
						</m.div>
					</m.div> */}
				
			</div>
		</m.section>
	)
}

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

const item = {
	hidden: { 
		y: 75, 
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
			duration: .35, 
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: .5, 
		}
	},
}

const hoverLeft = {
	rest: {
		x: 0
	},
	hover: {
		opacity: 0.3,
		x: -40,
		y: -40
	}
}

const hoverRight = {
	rest: {
		opacity: 0.3,
		x: 0
	},
	hover: {
		opacity: 1,
		x: 40,
		y: 40
	}
}

