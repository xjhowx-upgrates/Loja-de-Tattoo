import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Definindo __dirname e __filename com ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Inicializando o FlatCompat com a baseDirectory configurada
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Carregando as configurações do ESLint para Next.js e TypeScript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
];

export default eslintConfig;
