"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subAdminAccountCreated = void 0;
const subAdminAccountCreated = (email, password, name) => {
    return `<!DOCTYPE html>
          <html>
          <head>
            <title>Welcome to OMA Archetypes</title>
          </head>
          <body>
          <table
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="font-family: Arial, sans-serif;"
          >
          <tr>
            <td align="center">
              <table width="600" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background-color: #00737f;padding: 20px;padding-top: 25px;">
                    <img
                    style="witdh: 200px;height:50px;"
                      src="https://firebasestorage.googleapis.com/v0/b/olivier-mythodrama.appspot.com/o/Logo%2Foma-logo.png?alt=media&token=d76ad7b6-4d51-4663-8ed4-09f7f5f53883"
                    />
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px;">
                    <p>Hello ${name}</p>
                    <p>Your account has been created.</p>
                    <p>
                      Please use the following credentials each time you login to
                      the platform:
                    </p>
                    <p>Email: <strong>${email}</strong></p>
                    <p>Password: <strong>${password}</strong></p>
                    <p style="margin-top: 35px;">
                      If you have any questions or need help, please contact our
                      support team.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          </table>
          </body>
          </html>
          `;
};
exports.subAdminAccountCreated = subAdminAccountCreated;
//# sourceMappingURL=subAdminTemp.js.map