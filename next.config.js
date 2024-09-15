const path = require('path');

module.exports = {
  // Configurações do webpack
  webpack: (config, { dev }) => {
    // Configurações adicionais do webpack podem ser feitas aqui

    // Configuração de alias para importação de componentes
    config.resolve.alias['@components'] = path.join(__dirname, 'components');

    return config;
  },

  // Configurações do servidor
  serverRuntimeConfig: {
    // Configurações que só devem ser acessíveis no lado do servidor
  },

  // Configurações do cliente
  publicRuntimeConfig: {
    // Configurações que devem ser acessíveis tanto no lado do servidor quanto no cliente
  },

  // Configurações de fontes externas
  images: {
    domains: ['example.com', 'anotherdomain.com'], // Domínios de onde as imagens podem ser carregadas
  },

  // Outras configurações do Next.js
  // ...
};
