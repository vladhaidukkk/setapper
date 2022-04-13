import { ReactComponent as EslintIcon } from '../../assets/icons/tools/eslint.svg';
import { ReactComponent as WebpackIcon } from '../../assets/icons/tools/webpack.svg';
import { ReactComponent as GulpIcon } from '../../assets/icons/tools/gulp.svg';

const toolConstants = {
  LIST: [
    {
      label: 'Webpack',
      value: 'webpack',
      icon: WebpackIcon,
      description:
        "It's an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.",
      docsLink: 'https://webpack.js.org/concepts/',
    },
    {
      label: 'Gulp',
      value: 'gulp',
      icon: GulpIcon,
      description:
        "It's an open-source JavaScript toolkit created by Eric Schoffstall used as a streaming build system (similar to a more package-focused Make) in front-end web development. It is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development like minification, concatenation, cache busting, unit testing linting, optimization, etc.",
      docsLink: 'https://gulpjs.com/docs/en/getting-started/quick-start',
    },
    {
      label: 'Eslint',
      value: 'eslint',
      icon: EslintIcon,
      description:
        "It's a static code analysis tool for identifying problematic patterns found in JavaScript code. It was created by Nicholas C. Zakas in 2013. Rules in ESLint are configurable, and customized rules can be defined and loaded. ESLint covers both code quality and coding style issues. ESLint supports current standards of ECMAScript, and experimental syntax from drafts for future standards. Code using JSX or TypeScript can also be processed when a plugin or transpiler is used.",
      docsLink: 'https://eslint.org/docs/user-guide/getting-started',
    },
  ],
};

export default toolConstants;
