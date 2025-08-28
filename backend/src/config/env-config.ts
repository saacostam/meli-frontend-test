import dotenv from "dotenv";

dotenv.config();

export enum NodeEnv {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

export interface EnvConfig {
  port: number;
  nodeEnv: NodeEnv;
}

const rawEnv = process.env.NODE_ENV;

export const ENV_CONFIG: EnvConfig = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv:
    rawEnv && Object.values(NodeEnv).find((entry) => entry === rawEnv)
      ? (rawEnv as NodeEnv)
      : NodeEnv.PRODUCTION,
};
