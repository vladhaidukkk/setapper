import React from 'react';
import { useParams } from 'react-router-dom';
import { CursorClickIcon } from '@heroicons/react/solid';
import { capitalize } from 'lodash';

function ToolPresetsViewer() {
  const { tool } = useParams();
  return (
    <div className="flex flex-1 items-center justify-center p-2.5">
      <div className="flex flex-col items-center space-y-0.5">
        <h4 className="flex items-center text-lg font-medium text-black dark:text-white">
          <CursorClickIcon className="mr-2 h-5 w-5" />
          Select {capitalize(tool)} Preset
        </h4>
        <p className="max-w-[20rem] text-center text-sm text-stone-900 dark:text-stone-100">
          Full list of presets for this tool you can see on the left side of the screen
        </p>
      </div>
    </div>
  );
}

export default ToolPresetsViewer;
