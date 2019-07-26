import AxiosHelper from './AxiosHelper';
import UserEndPoints from '../config/UserEndPoints';
import axios from 'axios';

class LoginHelper extends AxiosHelper {

  userLoggedIn;
  loggedUserInfo;
  loginErrorMessage;

  constructor () {
    super();
    this.userLoggedIn = false;
    this.loggedUserInfo = {};
    this.apiUrlGenerator = new UserEndPoints();
  }

  loginUser = async (userInfo) => {
    let urlApi = this.apiUrlGenerator.loginUser();

    return await axios.post(urlApi, userInfo)
      .then(res => {
        if (res.data.success === true) {
          localStorage.setItem('jwt', res.data.token);
          this.loggedUserInfo = res.data.foundUserInfo;
          this.userLoggedIn = true;
          return true;
        } else {
          this.checkLoginErrorMsg(res.data.message);
          return false;
        }
      }).catch(error => {
        return false;
      });
  };

  getUserInfofromToken = async () => {
    let urlApi = this.apiUrlGenerator.userInfoFromToken();

    return await axios.get(
      urlApi,
      this.headerConfiguration,
    ).then(response => {
      if (response.data.success === true) {
        this.loggedUserInfo = response.data.data.foundUserInfo;
        return true;
      }
    }).catch(error => {
      return false;
    });

  };

  checkLoginErrorMsg = (message) => {
    switch (message) {
      case 'Password Incorrect':
        this.loginErrorMessage = 'El email o la contraseña son incorrectos';
        break;
      case 'User not found':
        this.loginErrorMessage = 'El usuario no existe';
        break;
      default:
        this.loginErrorMessage = 'Hubo un error desconocido';
    }
  };
}

export default LoginHelper;
