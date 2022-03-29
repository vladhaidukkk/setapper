import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthSubmitBtn from 'components/ui/authForm/authSubmitBtn/authSubmitBtn';
import AuthErrorsField from 'components/ui/authForm/authErrorsField/authErrorsField';

function AuthForm({ label, alt, onSubmit, btnText, children }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const getError = () => {
    if (Object.keys(errors).length !== 0) {
      return Object.values(errors)[0].message;
    }
    return undefined;
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div>
        <h2 className="text-center text-3xl font-bold text-black dark:text-white md:text-4xl">{label}</h2>
        {alt && (
          <p className="mt-2 text-center text-sm text-stone-700 dark:text-stone-300 md:text-base">
            Or{' '}
            <Link
              to={alt.link}
              className="font-medium text-indigo-600 transition-colors hover:text-indigo-500 focus:text-indigo-500
              dark:text-indigo-400 dark:hover:text-indigo-500"
            >
              {alt.text}
            </Link>
          </p>
        )}
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="-space-y-px rounded-md shadow">
          {React.Children.map(children, (child, index) => {
            const getPosition = () => {
              if (index === 0) return 'first';
              if (index === React.Children.count(children) - 1) return 'last';
              return undefined;
            };

            return child.props.name
              ? React.cloneElement(child, {
                  register,
                  key: child.props.name,
                  position: getPosition(),
                })
              : child;
          })}
        </div>
        {getError() && <AuthErrorsField error={getError()} />}
        <AuthSubmitBtn>{btnText}</AuthSubmitBtn>
      </form>
    </div>
  );
}

AuthForm.defaultProps = {
  alt: undefined,
  btnText: undefined,
};

AuthForm.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  alt: PropTypes.object,
  btnText: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default AuthForm;
