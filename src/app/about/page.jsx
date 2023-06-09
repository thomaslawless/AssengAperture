import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                fill={true}
                alt=""
                className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>Handcrafting award winning designs</h2>
            </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who We Are?</h1>
                    <p className={styles.desc}>description description description
                    description description description description
                    description description description 
                    description description description 
                    description description description 
                    description description description 
                    </p>
                </div>
                <div className={styles.item}>
                <h1 className={styles.title}>What we do? </h1>
                <p className={styles.desc}>
                text text text texttext text text
                texttext text text texttext text text
                texttext text text texttext text text text
                <br></br>
                <br></br>
                </p>
                <Button url="contact" text="contact" />
                </div>
            </div>
        </div>
    )
}

export default About