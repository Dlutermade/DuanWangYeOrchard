/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_ADDRESS: string;
  readonly VITE_API_URL: string;
  readonly VITE_API_USERNAME: string;
  readonly VITE_API_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
