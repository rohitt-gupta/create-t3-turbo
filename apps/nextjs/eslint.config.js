import baseConfig, { restrictEnvAccess } from "@justcollab/eslint-config/base";
import nextjsConfig from "@justcollab/eslint-config/nextjs";
import reactConfig from "@justcollab/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
