type DB = 'DATABASE_URL';

type ProcessEnvKey = 'PORT';

type EnvKeys = ProcessEnvKey | DB;

export const getEnv = (key: EnvKeys): string => process.env[key];
