import React from 'react';
import PropTypes from 'prop-types';
import { useDropdown, useRandomId } from 'hooks';
import ToolOption from 'components/common/toolsMenu/toolOption/toolOption';
import SelectedTool from 'components/common/toolsMenu/selectedTool/selectedTool';
import { useNavigate, useParams } from 'react-router-dom';

function ToolsMenu({ label, pathPrefix, options }) {
  const { tool } = useParams();
  const id = useRandomId('toolsMenu-');
  const { isOpened, toggle } = useDropdown(id);
  const navigate = useNavigate();

  const selectedOption = options.find((option) => option.value === tool);
  const otherOptions = options.filter((option) => option.value !== tool);

  const handleChange = (value) => {
    toggle();
    navigate(`${pathPrefix}${value}`);
  };

  return (
    <div id={id}>
      {label && <label className="mb-1 block text-sm font-medium text-stone-700 dark:text-stone-300">{label}</label>}
      <div className="relative h-10">
        <SelectedTool onToggle={toggle} label={selectedOption?.label} icon={selectedOption?.icon} />
        <ul
          className={`absolute top-full left-0 z-10 flex w-full translate-y-2 flex-col space-y-0.5 overflow-auto rounded-md border
          border-stone-300 bg-white p-2 shadow-md dark:border-stone-700 dark:bg-stone-800 ${
            isOpened ? 'block' : 'hidden'
          }`}
        >
          {otherOptions.map((option) => {
            return (
              <ToolOption
                key={option.value}
                value={option.value}
                icon={option.icon}
                label={option.label}
                onClick={handleChange}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

ToolsMenu.defaultProps = {
  pathPrefix: '',
  label: undefined,
};

ToolsMenu.propTypes = {
  pathPrefix: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ToolsMenu;
