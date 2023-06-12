import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

async function getData(id) {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok){
        return PageNotFoundError;
    }

    return res.json();
}

const BlogPost = async ({params}) => {
    const data = await getData(params.id) 
    return(
        <div className={styles.container}>
            <div className="styles.top">
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        {data.title}
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aut iste recusandae voluptatum, dolorem accusantium hic laborum dolor enim ratione commodi esse autem debitis! Commodi adipisci odit nulla doloremque reiciendis!
                    </p>
                    <div className={styles.author}>
                        <Image
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.avatar}
                        />
                        <span className={styles.username}>john Doe</span>
                    </div>

                    <div className={styles.imageContainer}>
                        <Image
                        src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        fill={true}
                        className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eaque corporis, suscipit est culpa molestias doloribus adipisci at, illum iure blanditiis autem, recusandae sed dolores tenetur reiciendis dolore alias ex.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default BlogPost