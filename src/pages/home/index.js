import './style.css';
import NavigationBar from './component/NavigationBar';
const Home = () => {
    return (<>
        <div className="body">
            <NavigationBar />
            {/* 內文區 */}
            <div className='context'>
                {/* 右邊主文 */}
                <div>
                    <div>
                    a new way to experience online invitations
                    </div>
                    <div>
                    Plan in-person or virtual events for your next occasion with our stylish designer templates — ad free!
                    </div>
                    {/* 這裡要放按鈕元件 */}
                </div>
                {/* 左邊主圖 */}
                <div>

                </div>
            </div>
        </div>
    </>)
}
export default Home;