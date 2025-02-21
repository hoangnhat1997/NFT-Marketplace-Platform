export default () => ({
  broker: process.env.BROKER ?? 'localhost:9092',
  services: {
    auth: {
      clientId: 'auth',
      groupId: 'auth',
      name: 'auth-kafka-client',
    },
    transaction: {
      clientId: 'transaction',
      groupId: 'transaction',
      name: 'transaction-kafka-client',
    },
    image: {
      clientId: 'image',
      groupId: 'image',
      name: 'image-kafka-client',
    },
  },
});
