import type { NextPage } from 'next'

import Menu from '../components/common/01 Head/01 Menu'
import Hero from '../components/uncommon/01 Home/00 Index/02 Body/02 Hero'
import Clients from '../components/common/02 Body/03 Clients'

export default function Home() {
  return (
    <>
    <Menu />
    <Hero />
    <Clients />
    </>
  )
}
