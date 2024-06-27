module.exports = {
    apps: [
      {
        name: 'topup-agent',
        script: './server.js',
        instances: '1',
        exec_mode: 'cluster',
        autorestart: true,
      },
    ],
  }