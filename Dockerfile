FROM test-registry.heritage.africa:8443/init/node:14

COPY . .

CMD ["node", "index.js"]
