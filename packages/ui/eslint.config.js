import baseConfig from "@justcollab/eslint-config/base";
import reactConfig from "@justcollab/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
