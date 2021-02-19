import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'
import Header from '../../components/header'
import Image from 'next/image';
import styles from '../../styles/Details.module.css'
import Arrow from '../../components/arrow'
import DetailsCard from '../../components/detailsCard'
import {useState} from 'react'

export default function Package({packageData})
{
    const router = useRouter()
    const {id} = router.query
    const [isShown, setIsShown] = useState(false);
    return (
        <div className={styles.container}>
            <Header/>

            <a href="http://localhost:3000" onMouseEnter={() => setIsShown(true)}
                       onMouseLeave={() => setIsShown(false)} className={styles.backButton}>
                <Arrow 
                className={styles.arrow} color={isShown? "#8281D8" : "#6F6F6F"} />
                <h3 className={styles.backText}>Back to packages</h3>
            </a>
            <DetailsCard name={packageData.name} id={packageData.id}/>
        </div>
    )
}

export async function getStaticProps({params})
{
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    const req = await fetch(`http://localhost:5000/api/package/${params.id}`)
    const data = await req.json();

    return {
        props: {packageData: data}
    }

}

export async function getStaticPaths()
{
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    const req = await fetch(`http://localhost:5000/api/package/ids`)
    const data = await req.json();

    const paths = data.map(packageData => {
        return {params: {id: packageData}}
    })

    return {
        paths,
        fallback: false
    }
}