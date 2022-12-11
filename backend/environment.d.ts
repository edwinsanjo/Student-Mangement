declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: Number;
      MONGO_URI: string;
      JWT_SECRET: string;
      NODE_ENV: "production" | "development";
    }
  }
}

export {};
