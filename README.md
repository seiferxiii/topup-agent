# Ran Network - Topup Agent

## Allows your server to communicate with the ran network merchant panel

## Setup
1. Install [Node.js v18](https://nodejs.org/dist/v18.20.3/node-v18.20.3-x64.msi)
2. Install yarn and pm2
```bash
npm install yarn -g
npm install pm2 -g
```

3. Clone this repository or download it as zip from [GitHub](https://github.com/seiferxiii/topup-agent)

4. Go to the topup-agent folder and setup the environment variables

```bash
PORT=3333
HOST=0.0.0.0
NODE_ENV=production
APP_KEY=SERVER-KEY-FROM-MERCHANT-PANEL
RAN_SERVER_KEY=SERVER-KEY-FROM-MERCHANT-PANEL
DRIVE_DISK=local
DB_CONNECTION=mssql
MSSQL_SERVER=139.99.x.x
MSSQL_PORT=1433
MSSQL_USER=sa
MSSQL_PASSWORD="sqlpass"
MSSQL_DB_NAME=RanUser
RANGAME1_DB=RanGame1
RANSHOP_DB=RanShop
RANUSER_DB=RanUser
MD5_PASSWORD_ENABLE=0
EPOINTS_COLUMN=UserPoint
USERINFO_COLUMN=UserInfo
CONTRI_POINT_COLUMN=ContributionPoint
MMR_COLUMN=ChaMMRScore
PK_KILL_COLUMN=ChaPKScore
PK_DEATH_COLUMN=ChaPKDeath
CHARACTER_LEVEL_DATE_COLUMN=ChaMaxLevelDate
DISBURSEMENT_MODE=epoints
```

Notes: 
- Get the SERVER_KEY from the merchant panel
- Configure the MSSQL SERVER ip address, port, username and password
- Configure the Database Names, table and column names according to your server version
- Configure DISBURSEMENT_MODE to epoints or topup

5. Go to topup-agent folder and Open the terminal and run the following command
```bash
npm install pm2 -g && npm install yarn -g && yarn install
```

6. Go to topup-agent folder and Start the server. Go to the terminal and run the following command

```bash
yarn initialize
yarn start
```
7. Insert your first Account, Character and Item on ShopItemMap for the connection testing to see if the topup agent connection will be established

8. Go to the merchant panel and check if the topup agent connection was established