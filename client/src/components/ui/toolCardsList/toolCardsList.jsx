import React from 'react';
import ToolCard from './toolCard/toolCard';
import { toolConstants } from '../../../utils/constants';

function ToolCardsList() {
  return (
    <ul className="grid grid-cols-1 gap-6 px-2 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-6 lg:px-0 xl:gap-8 2xl:grid-cols-3">
      {toolConstants.LIST.map((item) => {
        return (
          <ToolCard key={item.value} name={item.label} icon={item.icon} text={item.description} link={item.docsLink} />
        );
      })}
    </ul>
  );
}

export default ToolCardsList;
