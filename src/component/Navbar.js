import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList=['Women','Men','Baby','Kids','H&M HOME','Sport','Sale','지속가능성']
    const navigate = useNavigate()
    const goToLogin=()=>{
      navigate("/login")
    }
    const search = (event) => {
      if(event.key === "Enter"){
        let keyword = event.target.value
        navigate(`/?q=${keyword}`)
      }
    }
  return (
    <div>
        <div>
        {authenticate ? (
          <div className='login-button' onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div className='login-button' onClick={() => goToLogin()}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
        </div>
        <div className='nav-section'>
        <Link to="/">
          <img width={100} src="https://i.ibb.co/xF92kL2/pngegg.png" alt="h&m logo"/>
          </Link>
          </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map(menu=>
                <li>{menu}</li>)}
            </ul>
        <div className='search-area'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text"  placeholder="제품검색" onKeyPress={(event)=>search(event)} />
        </div>
        </div>
    </div>
  )
}

export default Navbar