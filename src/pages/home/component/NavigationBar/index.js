import './style.css';

const NavigationBar = () => {
    return (<>
        {/* 排版:分成左大區跟右大區 */}
        <div className="layout">
            {/* 左 */}
            <div className='Nav-Title'>
                Poply
            </div>
            {/* 右 */}
            <div className='Navright' >
                {/* 登陸,註冊,捲簾 */}
                <div className='Nav-font'>LOGIN</div>
                <div className='Nav-font'>SIGN UP</div>
                <button className='hanbuger' title='Open Menu'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="27" fill="none" viewBox="0 0 24 24">
                        <path stroke="#000" stroke-linecap="round" stroke-width="2" d="M4 18h16M4 12h16M4 6h16" />
                    </svg>
                </button>
            </div>
        </div>
    </>)
}

export default NavigationBar