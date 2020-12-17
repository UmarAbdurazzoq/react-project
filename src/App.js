import {useState} from 'react'
import {useRef} from 'react'
import './App.css';


function App() {
  const [lang,setLang] = useState("en");
  const [y, setY] = useState(0);
  const elementRef = useRef(null);
  const mainRef = useRef(null);
  

  const data ={
    en: {
        textone: 'Welcome', 
        texttwo: 'Developed by Company of Najot talim',
        login: 'Login',
        password: 'Password'
      },
      uz: {
        textone: 'Xush kelibsiz', 
        texttwo: 'Najot talim kompaniyasi tomonidan tuzilgan',
        login: 'Kirish',
        password: 'Parol'
      },
      ru: {
        textone: 'Добро пожаловать', 
        texttwo: 'Сделано компанией Najot talim',
        login: 'Логин',
        password: 'Пароль'
        }
};

  return (
    <main ref={mainRef}>

    <div className='wrapper'>
    <select
    defaultValue={lang}
    onChange={e => setLang(e.target.value)}>
    <option value="en">en</option>
    <option value="uz">uz</option>
    <option value="ru">ru</option>
    </select>

    <button onClick={e => {
      mainRef.current.classList.toggle('dark');
      e.target.classList.toggle('gold')
    }}>
  </button>

    </div>

    <h1>{data[lang].textone}</h1>
    
    <form>
      <div className='login'>
        <label htmlFor = 'login'>{data[lang].login}:</label>
				<input  type="text" id='login' placeholder={data[lang].login} />
		  </div>

		  <div className='password' >
        <label htmlFor = 'password'>{data[lang].password}:</label>
				<input ref={elementRef} onChange={e => {
					setY(e.target.value);
					if (y.length>=1 && y.length<6) {
						elementRef.current.classList.add('bg1')
					} else {
						elementRef.current.classList.remove('bg1')
						
					}
					}} type="password" id='password' placeholder={data[lang].password} />
	  	</div>
   </form>
    <p>{data[lang].texttwo}</p>
    </main>
  );
}

export default App;
