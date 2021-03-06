export const templateForgotPassword = (urlResetPassword: any) => {
  return `<html>
<style type="text/css">
  @import 'https://fonts.googleapis.com/css?family=Bowlby+One+SC&display=swap&subset=latin-ext';
  @import 'https://fonts.googleapis.com/css?family=Noto+Sans+HK:400,500,700,900&display=swap';


  .primary {
    color: rgb(255, 255, 255);
    display: flex;
    background-color: #8E99F3;
    border: none;
    border-radius: 50px;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 3px;
    height: 38px;
    text-transform: capitalize;
    width: 175px;
    transition: 0.3s;
    cursor: pointer;
  }

  .primary:hover {
    background-color: #5E92F3;
    transform: translateY(-0.25em);
  }

  .primary:hover {
    box-shadow: 0 7px 22px -2px rgba(0, 0, 0, 0.25);
  }

  .primary:focus {
    background-color: #5E92F3;
    transform: translateY(-0.25em);
  }

  .primary:focus {
    box-shadow: 0 7px 22px -2px rgba(0, 0, 0, 0.25);
  }
</style>

<body style="padding: 0; margin: 0; font-family: 'Noto Sans HK', sans-serif; font-weight: 700;">
  <div style="margin: 0 auto; padding-top: 50px;">
    <div class="app-name" style="text-align: center;font-size: 30px;padding: 30px;color: #929BE6;">Pets Love</div>
    <div style="text-align: center;">
      Reset your password
    </div>
    <div style="text-align: center; padding-top: 30px; padding-bottom: 30px; padding-left: 50px; padding-right: 50px;">
      <a href="${urlResetPassword}" class="primary" type="button">Change Password</a>
    </div>
  </div>
  </div>
</body>

</html>`;
};
