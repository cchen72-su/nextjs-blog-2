import { motion } from "framer-motion"

import Link from 'next/link'
import Image from 'next/image'

import styles from './navoverlay.module.scss'
import ButtonUI from './buttonui'
 
export default function NavOverlay({closeClickHandler}) {
    const variants = {
        hidden: { x: "100%" },
        visible: { x: 0 },
      }

     
    return(
        <motion.div 
            className={styles.nav_overlay}
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            <ButtonUI 
                icon='close'
                clickHandler={closeClickHandler}
            />
            Content.
        </motion.div>
    )
}