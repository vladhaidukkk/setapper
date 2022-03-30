import React from 'react';
import Container from 'components/common/container';
import ToolCard from 'components/ui/toolCard';
import { ReactComponent as WebpackIcon } from 'assets/icons/webpack.svg';
import { ReactComponent as GulpIcon } from 'assets/icons/gulp.svg';
import { ReactComponent as EslintIcon } from 'assets/icons/eslint.svg';

function ToolsIntro() {
  return (
    <section className="border-t border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
      <Container>
        <div className="flex flex-col items-center pt-16 pb-24 text-center text-black dark:text-white sm:pt-20 sm:pb-28 md:pt-24 md:pb-32">
          <h2 className="mb-12 max-w-5xl space-y-1 px-4 text-5xl font-bold drop-shadow sm:mb-16 sm:text-6xl md:text-7xl">
            <div>
              We have builders for{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                the most
              </span>{' '}
              <span className="bg-gradient-to-r from-violet-500 to-violet-600 bg-clip-text text-transparent">
                popular
              </span>{' '}
              tools
            </div>
          </h2>
          <div>
            <ul className="grid grid-cols-1 gap-6 px-2 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-6 lg:px-0 xl:gap-8 2xl:grid-cols-3">
              <ToolCard
                name="Webpack"
                icon={WebpackIcon}
                text="It's an open-source JavaScript module bundler. It is made primarily for JavaScript, but it
                        can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are
                        included. Webpack takes modules with dependencies and generates static assets representing those
                        modules."
                link="https://webpack.js.org/concepts/"
              />
              <ToolCard
                name="Gulp"
                icon={GulpIcon}
                text="It's an open-source JavaScript toolkit created by Eric Schoffstall used as a streaming
                        build system (similar to a more package-focused Make) in front-end web development. It is a task
                        runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks
                        involved in web development like minification, concatenation, cache busting, unit testing,
                        linting, optimization, etc."
                link="https://gulpjs.com/docs/en/getting-started/quick-start"
              />
              <ToolCard
                name="ESlint"
                icon={EslintIcon}
                text="It's a static code analysis tool for identifying problematic patterns found in JavaScript
                        code. It was created by Nicholas C. Zakas in 2013. Rules in ESLint are configurable, and
                        customized rules can be defined and loaded. ESLint covers both code quality and coding style
                        issues. ESLint supports current standards of ECMAScript, and experimental syntax from drafts for
                        future standards. Code using JSX or TypeScript can also be processed when a plugin or transpiler
                        is used."
                link="https://eslint.org/docs/user-guide/getting-started"
              />
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ToolsIntro;
