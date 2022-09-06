import React, { ReactElement } from 'react'

import style from './Header.module.scss'

function Header (): ReactElement {
  return (
    <header className={style.header}>
      <div>
        <img src="/logo.svg" alt="to.do" />
      </div>
    </header>
  )
}

export default Header
