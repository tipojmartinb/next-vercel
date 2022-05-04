
import Link from 'next/link'
import { Fragment } from 'react'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage(){
    return (
    <Fragment>
      <h1>About Page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.js</code>
        </p>
    </Fragment>
    )
}

AboutPage.getLayout = function getLayout(page:JSX.Element){
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}