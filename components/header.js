import { useState } from 'react'

// styles
import styles from './header.module.scss'

// my comp
import ButtonUI from './buttonui'
import NavOverlay from './navoverlay_2'
import Container from './container'
import Row from './row'



// next.js comp
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const [isMenuVisible,setIsMenuVisible] = useState(false)

    return (
        <header className={styles.header}>
            <Container>
            <Row justifyContentSpaceBetween>
            <Link href='/'>
                <a>
                    <Image 
                        src='/images/starbucks-logo.svg'
                        width={100}
                        height={100}
                        alt='Starbucks logo'
                    />
                </a>
            </Link>
            <ButtonUI 
                icon='menu' 
                clickHandler={()=> {setIsMenuVisible(true)}} 
            />
            {
                isMenuVisible &&
                    <NavOverlay 
                        closeClickHandler={()=> {setIsMenuVisible(false)}} 
                    />
            }
            </Row>
            </Container>
        </header>
    )
}
