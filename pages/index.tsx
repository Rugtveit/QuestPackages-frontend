import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import PackageCard from '../components/packageCard'
import {GetStaticProps} from 'next'

export default function Home(
  {packageData}: {
    packageData: 
    {
      id: string,
      name: string,
      version: string,
      dependency: object,
      url: string,
      downloadUrl: string,
      versions: string[]
    }[]
  }) {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.packageCards}>
        {packageData.map(({name, downloadUrl, url, version, dependency, versions, id}) => {
          return (<div>
            <PackageCard packageName={name} packageVersion={version} packageId={id} packageUrl={url} packageDownload={downloadUrl}/>
           </div>)
        })}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps =  async () => {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  let apiResponse :Response = await fetch('http://localhost:5000/api/package');
  let packageData;
  if(apiResponse.ok)
  {
    let json = await apiResponse.json();
    packageData = json;
  }  
  
  return {
    props: {
      packageData,
    },
  }
}