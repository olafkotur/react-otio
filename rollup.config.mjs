import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'build/index.js',
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
    strict: false,
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
  external: ['react', 'react-dom', 'styled-components'],
};
