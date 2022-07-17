import React from 'react'
import Header from './Header';

const Main = () => {
  return (
    <div>
      <Header />
      <main>
        <article>
          Тут могло бы быть колесо фортуны
        </article>
        <aside>
          <div className="add-info">Тут могла бы быть ваша реклама</div>
          <div className="add">Реклама</div>
          <div className="add">Реклама</div>
          <div className="add">Реклама</div>
        </aside>
      </main>
    </div>
  )
}

export default Main;