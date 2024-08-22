import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const menuList=['Women','Men','Baby','Kids','H&M HOME','Sport','Sale','지속가능성']
    const navigate = useNavigate()
    const goToLogin=()=>{
      navigate("/login")
    }
  return (
    <div>
        <div className='login-button' onClick={goToLogin}><FontAwesomeIcon icon={faUser} /><div>로그인</div></div>
        <div className='nav-section'><img width={100} src="https://i.ibb.co/xF92kL2/pngegg.png" alt="h&m logo"/></div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map(menu=>
                <li>{menu}</li>)}
            </ul>
        <div className='search-area'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type='text'/>
        </div>
        </div>
    </div>
  )
}

export default Navbar