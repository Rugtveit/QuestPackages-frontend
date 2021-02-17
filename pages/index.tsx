import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import PackageCard from '../components/packageCard'

export default function Home() {
  return (
    <div>
      <Header/>
      <PackageCard packageName="beatsaber-hook" packageVersion="0.1.0"/>
    </div>
  )
}
