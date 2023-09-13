
import { Form, Link, useSearchParams} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm(prop) {
  const [searchParams, setSearchParams] = useSearchParams(); // şu an sadece searchParams lazım
  const isLogin = searchParams.get('mode')==='login' //useSearchParams hook'u kullanılarak, mevcut URL'deki sorgu parametrelerini searchParams değişkenine atarız.
  // Bu, URL'deki ?mode=login veya ?mode=signup gibi parametreleri işlememizi sağlar.
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button
            onClick={isLogin ? prop.signInHandler : prop.signUpHandler}
          >
            Save
            
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;