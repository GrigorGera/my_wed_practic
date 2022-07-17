import React from 'react'

const wheel = () => {
    return (
        <div className="deal-wheel">
            {/* блок с призами */}
            <ul className="spinner"></ul>
            {/* язычок барабана */}
            <div className="ticker"></div>
            {/* кнопка */}
            <button className="btn-spin">Испытай удачу</button>
        </div>
    )
}

export default wheel