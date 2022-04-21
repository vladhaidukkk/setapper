import { ReactComponent as EslintIcon } from '../../assets/icons/tools/eslint.svg';
import { ReactComponent as WebpackIcon } from '../../assets/icons/tools/webpack.svg';
import { ReactComponent as GulpIcon } from '../../assets/icons/tools/gulp.svg';
import { ReactComponent as PrettierIcon } from '../../assets/icons/tools/prettier.svg';
import { ReactComponent as RollupIcon } from '../../assets/icons/tools/rollup.svg';
import { ReactComponent as StylelintIcon } from '../../assets/icons/tools/stylelint.svg';

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
    {
      label: 'Prettier',
      value: 'prettier',
      icon: PrettierIcon,
      description:
        'Prettier is an opinionated code formatter with support for: JavaScript, JSX, Angular, Vue, TypeScript and other. It removes all original styling and ensures that all outputted code conforms to a consistent style. Rules in ESLint are configurable and can easily be fitted for your project.',
      docsLink: 'https://prettier.io/docs/en/index.html',
    },
    {
      label: 'Rollup',
      value: 'rollup',
      icon: RollupIcon,
      description:
        'Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the new standardized format for code modules included in the ES6 revision of JavaScript, instead of previous idiosyncratic solutions such as CommonJS and AMD. ES modules let you freely and seamlessly combine the most useful individual functions from your favorite libraries. This will eventually be possible natively everywhere, but Rollup lets you do it today.',
      docsLink: 'https://prettier.io/docs/en/index.html',
    },
    {
      label: 'Stylelint',
      value: 'stylelint',
      icon: StylelintIcon,
      description:
        'A mighty, modern linter that helps you avoid errors and enforce conventions in your styles. It has a lot of predefined settings and also can be easily extended. It will help you avoid errors and enforce conventions. There are also rules for enforcing stylistic consistency, but we now recommend you use Stylelint alongside a pretty printer like Prettier. Linters and pretty printers are complementary tools that work together.',
      docsLink: 'https://prettier.io/docs/en/index.html',
    },
  ],
};

export default toolConstants;
